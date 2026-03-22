import { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/common/PageHero";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export const metadata: Metadata = { title: "추진 단계" };

const PHASES = [
  {
    step: "KR 1단계",
    color: "bg-emerald-500",
    border: "border-emerald-200",
    bg: "bg-emerald-50",
    title: "대한민국 전통놀이부터 시작",
    items: [
      "국내 전통놀이(윷놀이, 줄다리기, 제기차기, 널뛰기, 팽이치기 등) 중심으로 '한국 피닉타 페스타' 개최",
      "대한민국을 세계 전통놀이 종주국으로 선언하고 국제 표준화 작업 착수",
      "놀이문화 아카이빙 + 놀이 체험 + 놀이교육 콘텐츠 개발 병행",
    ],
  },
  {
    step: "2단계",
    color: "bg-blue-500",
    border: "border-blue-200",
    bg: "bg-blue-50",
    title: "세계 각국 전통놀이 유치 및 선정",
    items: [
      "피닉타 세계전통놀이 종목 선정위원회 발족 (문화계·외교계·놀이학계 전문가 참여)",
      "국가별 대표 놀이 1~2종 선정 → 참가국 등록 방식 운영",
      "유네스코, 국제놀이협회 등과 협약 체결하여 전통놀이 보호 + 보급 추진",
      '"놀이 외교관", "놀이 종목 유치 경쟁" 등의 콘셉트로 국가 간 참여 확대',
    ],
  },
  {
    step: "순환운영",
    color: "bg-amber-500",
    border: "border-amber-200",
    bg: "bg-amber-50",
    title: "한국 → 외국 → 한국 순환 개최",
    items: [
      "한국 → 외국 → 한국 순으로 개최",
      "참가국 순회 피닉타 미니 페스타를 통해 세계에 분산 개최 (한-아세안, 한-중남미 등)",
      "한국은 페스타의 본산이자 본부 국가로 기능",
    ],
  },
];

export default function PhasesPage() {
  return (
    <>
      <PageHero title="추진 단계" subtitle="Phases" description="국내에서 세계로 — 단계적 확산 전략" bgImage="https://images.unsplash.com/photo-1538485399081-7191377e8241?w=1920&q=80" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ label: "피닉타 축제", href: "/pnixta" }, { label: "추진 단계" }]} />

        {/* Featured image */}
        <div className="mt-10 relative h-48 sm:h-56 rounded-2xl overflow-hidden mb-10">
          <Image
            src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1200&q=80"
            alt="전통놀이 축제"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
            <p className="text-white text-lg font-bold">전통놀이에서 세계 축제로</p>
          </div>
        </div>

        <div className="space-y-6">
          {PHASES.map((phase, i) => (
            <div key={phase.step} className={`p-6 ${phase.bg} border ${phase.border} rounded-2xl`}>
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 ${phase.color} text-white text-xs font-bold rounded-full`}>
                  {phase.step}
                </span>
                <h3 className="font-bold text-gray-900 text-lg">{phase.title}</h3>
              </div>
              <ul className="space-y-2">
                {phase.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-sm text-gray-700">
                    <span className="text-amber-500 font-bold flex-shrink-0 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Cycle diagram */}
        <div className="mt-12 p-8 bg-gray-900 rounded-3xl text-white text-center">
          <h3 className="text-xl font-bold mb-6">순환 개최 방식</h3>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {["🇰🇷 한국 (본산)", "→", "🌏 세계 각국", "→", "🇰🇷 한국 복귀"].map((item, i) => (
              <span
                key={i}
                className={`text-sm font-medium ${
                  item === "→" ? "text-gray-500" : "px-4 py-2 bg-white/10 rounded-xl"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-400">
            슬로건: "지구촌 3대 축제 - 피닉타 페스타" | "전통놀이의 종주국, 한국에서 시작된 세계인의 축제"
          </p>
        </div>
      </div>
    </>
  );
}
