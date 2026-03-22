import type { NavItem } from "@/types";

export const SITE_NAME = "문화민족선진화위원회";
export const SITE_NAME_EN = "PNIXTA";
export const SITE_DESCRIPTION =
  "문화의 힘으로 지구촌 3대 축제를 만드는 문화민족선진화위원회";

export const NAV_ITEMS: NavItem[] = [
  {
    id: "about",
    label: "위원회 소개",
    labelEn: "About",
    href: "/about",
    children: [
      {
        id: "greeting",
        label: "의장 환영사",
        labelEn: "Greeting",
        href: "/about/greeting",
      },
      {
        id: "vision",
        label: "비전 및 미션",
        labelEn: "Vision & Mission",
        href: "/about/vision",
      },
      {
        id: "issue",
        label: "위원회 ISSUE",
        labelEn: "Issue",
        href: "/about/issue",
      },
      {
        id: "roadmap",
        label: "전략 로드맵",
        labelEn: "Roadmap",
        href: "/about/roadmap",
      },
      {
        id: "history",
        label: "연혁",
        labelEn: "History",
        href: "/about/history",
      },
    ],
  },
  {
    id: "business",
    label: "사업 영역",
    labelEn: "Business",
    href: "/business",
    children: [
      {
        id: "culture-promotion",
        label: "문화 진흥",
        labelEn: "Culture Promotion",
        href: "/business/culture-promotion",
      },
      {
        id: "identity",
        label: "민족 정체성",
        labelEn: "National Identity",
        href: "/business/identity",
      },
      {
        id: "global-platform",
        label: "세계축제 플랫폼",
        labelEn: "Global Festival",
        href: "/business/global-platform",
      },
      {
        id: "convergence",
        label: "융합 사업",
        labelEn: "Convergence",
        href: "/business/convergence",
      },
    ],
  },
  {
    id: "pnixta",
    label: "피닉타 축제",
    labelEn: "PNIXTA Festa",
    href: "/pnixta",
    children: [
      {
        id: "pnixta-about",
        label: "피닉타 페스타 소개",
        labelEn: "About PNIXTA",
        href: "/pnixta",
      },
      {
        id: "concept",
        label: "운영 콘셉트",
        labelEn: "Concept",
        href: "/pnixta/concept",
      },
      {
        id: "phases",
        label: "추진 단계",
        labelEn: "Phases",
        href: "/pnixta/phases",
      },
      {
        id: "archive",
        label: "전통놀이 아카이브",
        labelEn: "Archive",
        href: "/pnixta/archive",
      },
      {
        id: "gallery",
        label: "갤러리",
        labelEn: "Gallery",
        href: "/pnixta/gallery",
      },
    ],
  },
  {
    id: "organization",
    label: "조직",
    labelEn: "Organization",
    href: "/organization",
    children: [
      {
        id: "chart",
        label: "조직도",
        labelEn: "Org Chart",
        href: "/organization/chart",
      },
      {
        id: "status",
        label: "조직현황",
        labelEn: "Status",
        href: "/organization/status",
      },
      {
        id: "domestic",
        label: "전국 조직",
        labelEn: "Domestic",
        href: "/organization/domestic",
      },
      {
        id: "international",
        label: "국제 네트워크",
        labelEn: "International",
        href: "/organization/international",
      },
    ],
  },
  {
    id: "membership",
    label: "회원가입",
    labelEn: "Membership",
    href: "/membership",
    children: [
      {
        id: "benefits",
        label: "회원 종류 및 혜택",
        labelEn: "Benefits",
        href: "/membership/benefits",
      },
      {
        id: "process",
        label: "가입 절차",
        labelEn: "Process",
        href: "/membership/process",
      },
      {
        id: "apply",
        label: "가입 신청",
        labelEn: "Apply",
        href: "/membership/apply",
      },
    ],
  },
  {
    id: "news",
    label: "소식/미디어",
    labelEn: "News",
    href: "/news",
    children: [
      {
        id: "notice",
        label: "공지사항",
        labelEn: "Notice",
        href: "/news/notice",
      },
      {
        id: "press",
        label: "보도자료",
        labelEn: "Press",
        href: "/news/press",
      },
      {
        id: "news-gallery",
        label: "활동 갤러리",
        labelEn: "Gallery",
        href: "/news/gallery",
      },
      {
        id: "video",
        label: "영상 아카이브",
        labelEn: "Video",
        href: "/news/video",
      },
    ],
  },
  {
    id: "contact",
    label: "문의",
    labelEn: "Contact",
    href: "/contact",
    children: [
      {
        id: "location",
        label: "오시는 길",
        labelEn: "Location",
        href: "/contact/location",
      },
      {
        id: "inquiry",
        label: "문의하기",
        labelEn: "Inquiry",
        href: "/contact/inquiry",
      },
    ],
  },
];

export const STATS = [
  { label: "본부", value: 4, suffix: "개" },
  { label: "지부", value: 23, suffix: "개" },
  { label: "지회", value: 254, suffix: "개" },
  { label: "조직 임원+대의원", value: 101445, suffix: "명+" },
  { label: "목표 회원", value: 1016000, suffix: "명" },
];
