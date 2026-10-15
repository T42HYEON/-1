/*
 * 길드 콘텐츠 편집 안내
 * ---------------------
 * 외부 링크는 아래 guildData.links 한 곳에서 제목·설명·URL을 바꾸면 됩니다.
 * 공지와 규칙도 같은 방식으로 수정할 수 있어요.
 */
const guildData = {
  links: [
    {
      id: 'official',
      title: '공식 커뮤니티 & 정보',
      icon: '◎',
      wide: false,
      items: [
        { title: '쿠키런: 크럼블 공식 포럼', description: '쿠키런: 크럼블 공식 사이트', tag: 'OFFICIAL', url: 'https://cookieruncrumble.com/ko' },
        { title: '쿠키런: 크럼블 공식 카페', description: '공식 카페 소식과 커뮤니티', tag: 'CAFE', url: 'https://cafe.naver.com/ca-fe/ccrumble?tc=article' },
        { title: '쿠키럼 크럼블 갤러리', description: '유저 이야기 & 메타', tag: 'COMMUNITY', url: 'https://m.dcinside.com/board/projectcc' }
      ]
    },
    {
      id: 'strategy',
      title: '공략 & 티어표',
      icon: '✦',
      wide: false,
      items: [
        { title: '크럼블줴줴이야', description: '크럼블 공략과 정보 모음', tag: 'GUIDE', url: 'https://crumb.gg' },
        { title: '크럼블펀', description: '크럼블 공략·티어 참고', tag: 'TIER', url: 'https://crumbles.fun' }
      ]
    },
    {
      id: 'guild',
      title: '길드 전용 자료실',
      icon: '▦',
      wide: true,
      items: [
        { title: '경험치던전', description: '손컨X', tag: 'DAILY', url: 'https://cdn.phototourl.com/member/2026-10-15-f070db28-e7ca-4004-8721-924d8bfec949.png' },
        { title: '반죽던전', description: '손컨X', tag: 'DAILY', url: 'https://cdn.phototourl.com/member/2026-10-15-bc52451a-cc25-4b45-93f1-515242deee0f.png' },
        { title: '코인던전', description: '시작하고 2시방향', tag: 'DAILY', url: 'https://cdn.phototourl.com/member/2026-10-15-a417f6dd-1b59-4f18-86b3-e07aea160cd3.png' },
        { title: '연구석던전', description: '시작하고 7시방향', tag: 'DAILY', url: 'https://cdn.phototourl.com/member/2026-10-15-2b6811f8-c0ee-46cf-97a2-63d18d7619d6.png' },
        { title: '룬결정던전', description: '손컨X', tag: 'DAILY', url: 'https://cdn.phototourl.com/member/2026-10-15-79642bfc-7386-43c2-ad67-13505be044c2.png' },
        { title: '길드토벌전', description: '토벌전 덱 입니다', tag: 'GUILDBATTLE', url: 'https://cdn.phototourl.com/member/2026-10-15-e3082581-8d99-40c0-8198-ea29d59f39c8.png' },
      ]
    }
  ],
  notices: [
    { title: '이번 주 길드전', text: '길드토벌전이 시작되었습니다! 열심히 해서 1등을 노려보자구욧!' },
    { title: '출석 체크', text: '하루 한 번 접속 후 길드 출석을 눌러주세요. 3일 이상 미접속 시 따히님이나 래아님께 미리 알려주세요.' },
    { title: '아이디어 수집 중', text: '새로운 공략이나 편의 기능 아이디어는 단백질쿠키 오픈채팅방에 자유롭게 남겨주세요.' }
  ],
  rules: [
    { title: '매일 출석하기', text: '길드 출석과 연구를 1만 전까지 해주세요.' },
    { title: '토벌전 참여하기', text: '시즌 기간동안 가능한 만큼 참여하고, 본인 투력 대비 3~400배는 쳐주세요!' },
    { title: '서로 배려하기', text: '실수는 괜찮아요. 질문과 피드백은 따뜻하게, 좋은 정보는 함께 나눠요.' }
  ]
};

const linkGroups = document.querySelector('#linkGroups');
const emptyState = document.querySelector('#emptyState');
const noticeList = document.querySelector('#noticeList');
const rulesGrid = document.querySelector('#rulesGrid');
const searchInput = document.querySelector('#linkSearch');
const toast = document.querySelector('#toast');

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' })[character]);
}

function renderLinks(query = '') {
  const normalizedQuery = query.trim().toLowerCase();
  let visibleCards = 0;
  linkGroups.innerHTML = guildData.links.map((group) => {
    const items = group.items.filter((item) => {
      const searchable = `${item.title} ${item.description} ${item.tag} ${group.title}`.toLowerCase();
      return !normalizedQuery || searchable.includes(normalizedQuery);
    });
    if (!items.length) return '';
    visibleCards += items.length;
    return `<article class="link-group${group.wide ? ' link-group--wide' : ''}">
      <div class="link-group__header">
        <div class="link-group__title"><span class="link-group__icon" aria-hidden="true">${escapeHtml(group.icon)}</span><h3>${escapeHtml(group.title)}</h3></div>
        <span class="link-group__count">${String(items.length).padStart(2, '0')} LINKS</span>
      </div>
      <div class="link-cards">${items.map((item) => `<a class="link-card" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">
        <div class="link-card__top"><h4>${escapeHtml(item.title)}</h4><span class="link-card__arrow" aria-hidden="true">↗</span></div>
        <p>${escapeHtml(item.description)}</p><span class="link-card__tag">${escapeHtml(item.tag)}</span>
      </a>`).join('')}</div>
    </article>`;
  }).join('');
  emptyState.hidden = visibleCards > 0;
}

function renderNotices() {
  noticeList.innerHTML = guildData.notices.map((notice, index) => `<article class="notice-item">
    <span class="notice-item__number">0${index + 1}</span><div><h3>${escapeHtml(notice.title)}</h3><p>${escapeHtml(notice.text)}</p></div>
  </article>`).join('');
}

function renderRules() {
  rulesGrid.innerHTML = guildData.rules.map((rule, index) => `<article class="rule-card">
    <span class="rule-card__number">0${index + 1}</span><h3>${escapeHtml(rule.title)}</h3><p>${escapeHtml(rule.text)}</p>
  </article>`).join('');
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('is-visible'), 2200);
}

renderLinks();
renderNotices();
renderRules();

searchInput.addEventListener('input', (event) => renderLinks(event.target.value));
document.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === 'Escape' && document.activeElement === searchInput) searchInput.blur();
});

document.querySelector('#themeToggle').addEventListener('click', () => {
  document.documentElement.classList.toggle('light');
  const isLight = document.documentElement.classList.contains('light');
  document.querySelector('#themeToggle span').textContent = isLight ? '☾' : '☼';
  showToast(isLight ? '라이트 모드로 바꿨어요.' : '밤 모드로 바꿨어요.');
});

document.querySelectorAll('.anchor-nav__item').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.anchor-nav__item').forEach((item) => item.classList.remove('is-active'));
    link.classList.add('is-active');
  });
});
