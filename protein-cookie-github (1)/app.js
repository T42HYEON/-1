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
        { title: '쿠키럼 크럼블 갤러리', description: '유저 이야기 & 메타', tag: 'COMMUNITY', url: 'https://m.dcinside.com/board/projectcc' },
        { title: '쿠키럼 크럼블 쿠폰', description: '쿠폰 등록 바로가기', tag: 'COUPON', url: 'https://coupon.devplay.com/coupon/cc/ko' }
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
      desc: '오토덱<br>• 배치 팁: 그냥 놔두면 깨져요.'
    },
    {
      name: '반죽 던전',
      imgUrl: 'https://cdn.phototourl.com/member/2026-10-15-bc52451a-cc25-4b45-93f1-515242deee0f.png',
      desc: '오토덱<br>• 배치 팁: 그냥 놔두면 깨지는데 타임아웃되면 5시방향 이동'
    },
    {
      name: '코인 던전',
      imgUrl: 'https://cdn.phototourl.com/member/2026-10-15-a417f6dd-1b59-4f18-86b3-e07aea160cd3.png',
      desc: '시작하고 2시 방향<br>• 방향 맞춰서 빠르게 진입하세요.'
    },
    {
      name: '연구석 던전',
      imgUrl: 'https://cdn.phototourl.com/member/2026-10-15-2b6811f8-c0ee-46cf-97a2-63d18d7619d6.png',
      desc: '시작하고 7시 방향<br>• 7시방향으로 가면 몬스터를 시계방향으로 차례대로 잡아요.'
    },
    {
      name: '룬결정 던전',
      imgUrl: 'https://cdn.phototourl.com/member/2026-10-15-1233db6d-9ae7-4a02-b434-73b831905de3.png',
      desc: '오토덱<br>• 찰스가 든든하게 다 맞아줘요.'
    }
  ]
},
        { 
          title: '길드토벌전', 
          description: '토벌전 덱, 공격력 순위 및 슈가룬 세팅 (클릭)', 
          tag: 'GUILDBATTLE', 
          url: '#modal',
          dungeons: [
            { 
              name: '길드토벌전 덱', 
              imgUrl: 'https://cdn.phototourl.com/member/2026-10-15-e3082581-8d99-40c0-8198-ea29d59f39c8.png', 
              desc: '• 토벌전 고득점을 위한 추천 덱 구성입니다.<br>• 본인 투력에 맞게 최대한 참여해 주세요!' 
            },
            { 
              name: '토벌전 공격력 순위', 
              imgUrl: 'https://cdn.phototourl.com/member/2026-10-15-8f4493a2-3194-4d88-901c-d17f4d39a657.png', 
              desc: '• 토벌전 캐릭터별 공격력 순위표입니다.<br>• 3순위는 시작하자마자 석류버프를 받고 4순위는 나중에 받는데요.' 
            },
            { 
              name: '토벌전 슈가룬 세팅', 
              imgUrl: 'https://cdn.phototourl.com/member/2026-10-15-2a62ae56-0429-44e3-bad3-ce0a95314ca6.png', 
              desc: '• 토벌전 진행 시 필요한 슈가룬 세팅 정보입니다.<br>• 슈가슈가룬~ 쇼코쇼코룬~' 
            }
          ]
        },
        { 
          title: '장비프리셋', 
          description: '스테이지, 길드토벌전 장비 추천 (클릭)', 
          tag: 'EQUIPMENT', 
          url: '#modal',
          dungeons: [
            { name: '장비 프리셋 모음', imgUrl: 'https://cdn.phototourl.com/member/2026-10-15-3e46ca52-8bd4-417e-91cf-34e0e34e8664.png', desc: '• 스테이지 및 길드토벌전 장비 세팅 추천 가이드입니다.<br>• 아레나장비는 토벌전 C에서 체력3이 아닌 치저3을 선택하면 됩니다.' }
          ]
        },
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
        // ★ 핵심 포인트: url이 #modal이면 팝업을 띄우고 return false로 페이지 위로 튀는 현상을 막아줍니다.
        if (item.url === '#modal') {
          const dungeonsJson = encodeURIComponent(JSON.stringify(item.dungeons || []));
          return `<a class="link-card" href="#" onclick="openModalGroup('${escapeHtml(item.title)}', '${dungeonsJson}'); return false;">
            <div class="link-card__top"><h4>${escapeHtml(item.title)}</h4><span class="link-card__arrow" aria-hidden="true">팝업</span></div>
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
const modalTitle = document.querySelector('#modalTitle'); // ★ 제목 변경용 변수 추가

const modalDesc = document.querySelector('#modalDesc'); // ★ 상단 설명글 조종용 변수 추가

function openModalGroup(title, encodedJson) {
  if (modal && modalBody) {
    const dungeons = JSON.parse(decodeURIComponent(encodedJson));
    
    // 팝업창 상단 제목 변경
    if (modalTitle) modalTitle.textContent = title;

    // ★ 일일던전일 때만 상단 설명글을 보여주고, 토벌전이나 장비프리셋일 때는 깔끔하게 숨기기(비우기)
    if (modalDesc) {
      if (title === '일일던전') {
        modalDesc.textContent = '손컨X 및 던전별 공략 모음';
        modalDesc.style.display = 'block';
      } else {
        modalDesc.textContent = '';
        modalDesc.style.display = 'none';
      }
    }

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
