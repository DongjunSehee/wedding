/**
 * Nature Green Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "서동준",
    nameEn: "Groom",
    father: "서범수",
    mother: "강봉숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "박세희",
    nameEn: "Bride",
    father: "박경태",
    mother: "문상희",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-10-24",
    time: "12:00",
    venue: "예술웨딩컨벤션",
    hall: "하비홀 2층",
    address: "전남 목포시 남농로 9",
    tel: "061-276-0050",
    mapLinks: {
      kakao: "https://place.map.kakao.com/10940406",
      naver: "https://map.naver.com/p/entry/place/20256060?c=15.00,0,0,0,dh&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202606172038&locale=ko&svcName=map_pcv5"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "결혼합니다",
    content: "있는 그대로 사랑하고 서로의 존재에 감사하며\n곁에 있을때\n가장 나다운 모습이 되게 하는 사람과\n모든 계절을 함께 하고자 합니다.\n\n그 시작의 자리에\n늘 곁에서 아껴주셨던 소중한 분들을 모십니다."
  },

  // ── 오시는 길 ──
  // (mapLinks와 캘린더는 location 섹션 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "서동준", bank: "국민은행", number: "944502-00-493535" },
      { role: "아버지", name: "서범수", bank: "농협은행", number: "448-02-016941" },
      { role: "어머니", name: "강봉숙", bank: "농협은행", number: "584-02-063062" }
    ],
    bride: [
      { role: "신부", name: "박세희", bank: "농협은행", number: "352-1163-630273" },
      { role: "아버지", name: "박경태", bank: "국민은행", number: "752201-01-019365" },
      { role: "어머니", name: "문상희", bank: "농협은행", number: "527021-56-074755" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "신랑 ♥ 신부 결혼합니다",
    description: "2026년 10월 24일, 소중한 분들을 초대합니다."
  }
};
