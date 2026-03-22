import { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/common/PageHero";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export const metadata: Metadata = { title: "전략 로드맵" };

const ROADMAP = [
  {
    phase: "1단계",
    period: "단기",
    label: "국내 기반 구축",
    color: "bg-emerald-500",
    textColor: "text-emerald-700",
    border: "border-emerald-200",
    bg: "bg-emerald-50",
    items: ["국내 문화카르텔 형성", "문화 조직 구축", "국내 조직 체계화"],
  },
  {
    phase: "2단계",
    period: "중장기",
    label: "민족 문화카르텔",
    color: "bg-blue-500",
    textColor: "text-blue-700",
    border: "border-blue-200",
    bg: "bg-blue-50",
    items: ["민족 문화카르텔 구축", "국제위원회 선포", "재외동포 네트워크 연결"],
  },
  {
    phase: "3단계",
    period: "장기",
    label: "국제 문화카르텔",
    color: "bg-purple-500",
    textColor: "text-purple-700",
    border: "border-purple-200",
    bg: "bg-purple-50",
    items: ["국제 문화카르텔 활성화", "국제위원회 활성화", "6개 연맹 221국 확장"],
  },
  {
    phase: "최종목표",
    period: "완성",
    label: "지구촌 3대 축제",
    color: "bg-amber-500",
    textColor: "text-amber-700",
    border: "border-amber-200",
    bg: "bg-amber-50",
    items: ["지구촌 3대 축제 실현", "피닉타 페스타 정례화", "우수한 민족문화 창달"],
    highlight: true,
  },
];

const KEYWORDS = [
  { key: "문화", icon: "🎭" },
  { key: "놀이(Play)", icon: "🎮" },
  { key: "재미(Fun)", icon: "😄" },
];

export default function RoadmapPage() {
  return (
    <>
      <PageHero
        title="전략 로드맵"
        subtitle="Strategic Roadmap"
        description="국내에서 세계로 — 단계별 문화강국 실현 전략"
        bgImage="https://images.unsplash.com/photo-1519817650390-64a93db51149?w=1920&q=80"
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb
          items={[
            { label: "위원회 소개", href: "/about" },
            { label: "전략 로드맵" },
          ]}
        />

        {/* Featured image */}
        <div className="mt-10 relative h-48 sm:h-56 rounded-2xl overflow-hidden mb-10">
          <Image
            src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&q=80"
            alt="축제 비전"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/60 to-transparent flex items-center px-8">
            <p className="text-white text-xl sm:text-2xl font-bold max-w-md">
              국내에서 세계로, 단계별 확산 전략
            </p>
          </div>
        </div>

        {/* Strategy keywords */}
        <div className="text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
            전략 핵심 키워드
          </p>
          <div className="inline-flex items-center gap-3 flex-wrap justify-center">
            {KEYWORDS.map((kw, i) => (
              <div key={kw.key} className="flex items-center gap-2">
                <span className="px-5 py-2.5 bg-amber-100 text-amber-700 font-bold rounded-full text-sm">
                  {kw.icon} {kw.key}
                </span>
                {i < KEYWORDS.length - 1 && (
                  <span className="text-gray-300 font-bold text-xl">+</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Roadmap steps */}
        <div className="mt-14 space-y-6">
          {ROADMAP.map((step, index) => (
            <div
              key={step.phase}
              className={`relative flex gap-6 p-6 ${step.bg} border ${step.border} rounded-2xl ${
                step.highlight ? "ring-2 ring-amber-400 ring-offset-2" : ""
              }`}
            >
              {/* Step number */}
              <div className="flex-shrink-0 flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-xl ${step.color} text-white flex items-center justify-center font-black text-sm`}
                >
                  {index + 1 < 4 ? `${index + 1}` : "★"}
                </div>
                {index < ROADMAP.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gray-200 mt-3 min-h-6" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap mb-3">
                  <span className={`text-lg font-black ${step.textColor}`}>
                    {step.phase}
                  </span>
                  <span className="px-2 py-0.5 text-xs rounded-full bg-white border border-gray-200 text-gray-500">
                    {step.period}
                  </span>
                  <span className={`font-semibold text-sm ${step.textColor}`}>
                    {step.label}
                  </span>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {step.items.map((item) => (
                    <li
                      key={item}
                      className="px-3 py-1.5 bg-white rounded-lg text-sm text-gray-700 border border-gray-100"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Final vision */}
        <div className="mt-12 p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl text-center text-white">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            최종 비전
          </p>
          <p className="text-2xl font-black">
            올림픽 · 월드컵 · <span className="text-amber-400">피닉타 페스타</span>
          </p>
          <p className="text-gray-300 mt-3 text-sm">
            지구촌 3번째 초대형 문화축제로 세계인과 함께 즐기는 축제를 만듭니다
          </p>
        </div>
      </div>
    </>
  );
}
