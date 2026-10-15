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
        { title: '쿠키런: 크럼블 공식 카페', description: '공식 카페 소식과 커뮤니티', tag: 'CAFE', url: 'https://cafe.naver.com/ccrumble' },
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
        { 
  title: '일일던전', 
  description: '경험치·반죽·코인·연구석·룬결정 모음 (클릭)', 
  tag: 'DAILY', 
  url: '#modal',
  dungeons: [
    {
      name: '경험치 던전',
      imgUrl: 'https://cdn.phototourl.com/member/2026-10-15-f070db28-e7ca-4004-8721-924d8bfec949.png',
      desc: '손컨 X<br>• 배치 팁: 중앙 기둥을 기준으로 좌우 배치를 다르게 하세요.'
    },
    {
      name: '반죽 던전',
      imgUrl: 'https://cdn.phototourl.com/member/2026-10-15-bc52451a-cc25-4b45-93f1-515242deee0f.png',
      desc: '손컨 X<br>• 주의사항: 스킬 쿨타임 관리가 중요합니다.'
    },
    {
      name: '코인 던전',
      imgUrl: 'https://cdn.phototourl.com/member/2026-10-15-a417f6dd-1b59-4f18-86b3-e07aea160cd3.png',
      desc: '시작하고 2시 방향<br>• 방향 맞춰서 빠르게 진입하세요.'
    },
    {
      name: '연구석 던전',
      imgUrl: 'https://cdn.phototourl.com/member/2026-10-15-2b6811f8-c0ee-46cf-97a2-63d18d7619d6.png',
      desc: '시작하고 7시 방향<br>• 안전하게 이동 후 자리를 잡습니다.'
    },
    {
      name: '룬결정 던전',
      imgUrl: 'https://cdn.phototourl.com/member/2026-10-15-79642bfc-7386-43c2-ad67-13505be044c2.png',
      desc: '손컨 X<br>• 무난하게 오토로 돌릴 수 있는 구간입니다.'
    }
  ]
},
        { title: '길드토벌전', description: '토벌전 덱 입니다', tag: 'GUILDBATTLE', url: 'https://cdn.phototourl.com/member/2026-10-15-e3082581-8d99-40c0-8198-ea29d59f39c8.png' },
        { title: '장비프리셋', description: '스테이지, 길드토벌전 장비 추천입니다', tag: 'EQUIPMENT', url: 'https://cdn.phototourl.com/member/2026-10-15-3e46ca52-8bd4-417e-91cf-34e0e34e8664.png' },
      ]
    }
  ],
  notices: [],
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
      <div class="link-cards">${items.map((item) => {
  if (item.url === '#modal') {
  // dungeons 데이터를 JSON 문자열로 안전하게 변환해서 함수에 넘겨줍니다
  const dungeonsJson = encodeURIComponent(JSON.stringify(item.dungeons || []));
  return `<a class="link-card" href="#" onclick="openModalGroup('${dungeonsJson}'); return false;">
    <div class="link-card__top"><h4>${escapeHtml(item.title)}</h4><span class="link-card__arrow" aria-hidden="true">모음</span></div>
    <p>${escapeHtml(item.description)}</p><span class="link-card__tag">${escapeHtml(item.tag)}</span>
  </a>`;
} else {
    return `<a class="link-card" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">
      <div class="link-card__top"><h4>${escapeHtml(item.title)}</h4><span class="link-card__arrow" aria-hidden="true">↗</span></div>
      <p>${escapeHtml(item.description)}</p><span class="link-card__tag">${escapeHtml(item.tag)}</span>
    </a>`;
  }
}).join('')}</div>
    </article>`;
  }).join('');
  emptyState.hidden = visibleCards > 0;
}

// 아까 복사한 구글 웹 앱 URL을 따옴표 사이에 그대로 붙여넣으세요!
const NOTION_API_URL = 'https://script.google.com/macros/s/AKfycbxR1tM6wfKcnhzfX4F5iQ1eM6ynhyI8pD4SFpyKuWY7FJIWztYM8XzK9uK8WDIBje3E/exec';

async function renderNotices() {
  try {
    const response = await fetch(NOTION_API_URL);
    const noticesData = await response.json();
    
    guildData.notices = noticesData;

    noticeList.innerHTML = guildData.notices.map((notice, index) => `<article class="notice-item">
      <span class="notice-item__number">0${index + 1}</span><div><h3>${escapeHtml(notice.title)}</h3><p>${escapeHtml(notice.text)}</p></div>
    </article>`).join('');
    
  } catch (error) {
    console.error('공지를 불러오는 데 실패했습니다:', error);
    noticeList.innerHTML = `<p style="padding: 20px; color: #76636b;">공지를 불러오는 중 문제가 발생했습니다.</p>`;
  }
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
// --- 맨 위로 가기 버튼 기능 ---
const scrollTopBtn = document.querySelector('#scrollTopBtn');

if (scrollTopBtn) {
  // 1. 스크롤을 조금이라도 내리면 버튼이 나타나고, 맨 위에 있으면 숨김
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollTopBtn.classList.add('is-visible');
    } else {
      scrollTopBtn.classList.remove('is-visible');
    }
  });

  // 2. 버튼을 클릭하면 페이지 맨 위로 부드럽게 스크롤
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
// --- 이미지 팝업 모달 제어 기능 ---
const modal = document.querySelector('#imageModal');
const modalClose = document.querySelector('#modalClose');
const modalBody = document.querySelector('#modalBody');

function openModalGroup(encodedJson) {
  if (modal && modalBody) {
    const dungeons = JSON.parse(decodeURIComponent(encodedJson));
    
    // 5개 던전의 HTML을 반복문으로 싹 만들어서 모달창 바디에 채워넣기
    modalBody.innerHTML = dungeons.map(d => `
      <div class="modal-item">
        <h4>${escapeHtml(d.name)}</h4>
        <img src="${escapeHtml(d.imgUrl)}" alt="${escapeHtml(d.name)}">
        <div class="modal__extra-desc">${d.desc}</div>
      </div>
    `).join('');

    modal.style.display = 'flex';
  }
}

if (modalClose) {
  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}

if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}
