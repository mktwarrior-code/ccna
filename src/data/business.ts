import type { BusinessArea } from "@/types";

export const BUSINESS_AREAS: BusinessArea[] = [
  {
    id: "culture-promotion",
    title: "문화 진흥 및 글로벌 문화강국 실현",
    titleEn: "Culture Promotion & Global Cultural Power",
    icon: "🌏",
    description:
      "전통문화의 현대화와 세계화를 통해 대한민국을 최고의 문화강국으로 만듭니다.",
    subAreas: [
      {
        title: "전통문화의 현대화 및 세계화",
        content:
          "무형문화유산 보존계승 / K-문화 콘텐츠 / 세계 전통놀이 국제 표준화",
      },
      {
        title: "문화콘텐츠 산업 육성",
        content:
          "전통과 기술이 융합된 창작 콘텐츠(RPG, 애니, 드라마 등) 개발 및 지원",
      },
      {
        title: "생활문화와 민속문화의 확산",
        content:
          "지역 단위 전통놀이, 민속놀이, 전통시장 활성화 연계 지원",
      },
      {
        title: "디지털 문화자산 구축",
        content:
          "전통예술, 민속의례, 고전, 놀이 디지털 DB화 및 메타버스 플랫폼화",
      },
      {
        title: "공예/복식/음식문화의 세계화",
        content:
          "전통복식, 음식, 공예의 세계시장 진출 플랫폼 구축",
      },
      {
        title: "문화교육과 시민문화역량 강화",
        content:
          "전통놀이, 민속예절, 전통예술 지역 연계 교육 커리큘럼 개발",
      },
    ],
  },
  {
    id: "identity",
    title: "민족 정체성 강화 및 인류 보편 가치 확산",
    titleEn: "National Identity & Universal Human Values",
    icon: "🏛️",
    description:
      "잊혀진 민족문화를 복원하고 세계와 공존하는 정체성 모델을 개발합니다.",
    subAreas: [
      {
        title: "민족문화유산 복원보존 프로젝트",
        content:
          "잊혀진 의례, 예술, 놀이, 언어 등 고유 문화 복원 연구 및 재현",
      },
      {
        title: "민족정체성 기반 교육사업",
        content:
          "학교 및 청소년 대상 민속교육, 유산교육, 다문화 이해 교육 프로그램 개발",
      },
      {
        title: "가상공간문화 현대화",
        content:
          "국기, 국악, 국어, 국복, 국가의례 등 정체성 기반 문화의 현대적 계승",
      },
      {
        title: "다문화민족 정체성의 공존모델 개발",
        content:
          "이주민·다문화 가정과의 전통문화 교류 모델 구축, 포용성 제고",
      },
      {
        title: "세계 민족문화 비교연구",
        content:
          "한국문화와 세계민족의 전통문화, 놀이, 예술의 비교 및 학술 네트워크 운영",
      },
      {
        title: "민속학 및 문화인류학 지원",
        content:
          "민족정체성과 전통문화에 대한 학문적 기반 강화, 전문연구기관 연계",
      },
    ],
  },
  {
    id: "global-platform",
    title: "문명 연대 및 세계축제 플랫폼 구축",
    titleEn: "Civilizational Solidarity & Global Festival Platform",
    icon: "🎪",
    description:
          "피닉타 페스타를 중심으로 올림픽·월드컵과 어깨를 나란히 하는 지구촌 3대 축제를 구현합니다.",
    subAreas: [
      {
        title: "「피닉타 페스타」 주관 및 세계화",
        content:
          "전통놀이 기반 지구촌 축제 전략 개최 (올림픽·월드컵과 나란히 하는 문화축제)",
      },
      {
        title: "'세계 전통놀이 종주국' 전략추진",
        content:
          "대한민국 중심의 전통놀이 종목 선정, 국제 룰 제정, 세계 참가국 유치",
      },
      {
        title: "놀이외교 정책개발",
        content:
          "전통놀이를 통한 평화·연대·문화외교 구축, 외교부·문화부 협력 사업 연계",
      },
      {
        title: "세계 민속문화 교류 플랫폼 운영",
        content:
          "각국 문화원, 예술단, 대사관과 협력하여 전통놀이·의례·예술 교류 정례화",
      },
      {
        title: "세계 놀이유산 등재 및 보존활동",
        content:
          "유네스코 무형유산 등재 추진, 세계전통놀이 지도제작, 놀이유산 아카이브 구축",
      },
      {
        title: "다자간 문화외교 및 국제기구 연계",
        content:
          "유네스코, ICHCAP, ASEAN, OAS 등과 문화외교 전략적 파트너십 체결",
      },
      {
        title: "세계 피닉타 주간 제정",
        content:
          "국제기구 협력 '세계 전통놀이의 날', '피닉타 주간' 지정 및 글로벌 캠페인 운영",
      },
    ],
  },
  {
    id: "convergence",
    title: "융합 사업 영역",
    titleEn: "Convergence Business",
    icon: "🔗",
    description: "3대 핵심 사업과 연결되는 기술·산업·교육 교차 분야입니다.",
    subAreas: [
      {
        title: "기술 융합",
        content:
          "전통놀이 기반 게임화(Gamification), AR/VR 전통체험 콘텐츠 개발",
      },
      {
        title: "산업화",
        content:
          "놀이 기반 콘텐츠 산업, 관광상품, 교육 솔루션으로 확장",
      },
      {
        title: "관광",
        content: "'놀이 관광지' 개발, 피닉타 연계 지역축제 브랜드화",
      },
      {
        title: "교육",
        content:
          "전통 놀이 양성 과정, 세계 전통놀이 비교 교육 교재 개발",
      },
      {
        title: "언어",
        content:
          "놀이 관련 다국어 콘텐츠 번역 및 국제 홍보 시스템 구축",
      },
      {
        title: "제도화",
        content:
          "놀이/민속문화 관련 법제 정비 및 정책적 기반 구축",
      },
    ],
  },
];
