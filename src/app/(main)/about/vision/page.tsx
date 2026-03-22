import { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/common/PageHero";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export const metadata: Metadata = { title: "비전 및 미션" };

const CORE_VALUES = [
  {
    icon: "🏺",
    title: "전통성",
    desc: "수천 년 민족의 전통문화와 놀이를 보존하고 세계에 전합니다.",
  },
  {
    icon: "👥",
    title: "대중성",
    desc: "누구나 참여할 수 있는 열린 축제와 문화 플랫폼을 만듭니다.",
  },
  {
    icon: "💡",
    title: "창의성",
    desc: "전통과 기술을 융합하여 새로운 문화콘텐츠를 창조합니다.",
  },
];

const MISSIONS = [
  {
    num: "01",
    title: "문화 진흥 및 글로벌 문화강국 실현",
    desc: "전통문화 현대화, K-문화 콘텐츠 육성, 디지털 문화자산 구축을 통해 대한민국을 최고의 문화강국으로 발전시킵니다.",
    color: "border-emerald-500",
    bg: "bg-emerald-50",
    numColor: "text-emerald-600",
  },
  {
    num: "02",
    title: "민족 정체성 강화 및 인류 보편 가치 확산",
    desc: "잊혀진 민족문화유산을 복원·보존하고, 세계와 공존하는 다문화 정체성 모델을 개발합니다.",
    color: "border-blue-500",
    bg: "bg-blue-50",
    numColor: "text-blue-600",
  },
  {
    num: "03",
    title: "문명 연대 및 세계축제 플랫폼 구축",
    desc: "피닉타 페스타를 통해 전통놀이로 세계를 연결하고 올림픽·월드컵과 나란히 하는 지구촌 3대 축제를 실현합니다.",
    color: "border-amber-500",
    bg: "bg-amber-50",
    numColor: "text-amber-600",
  },
];

export default function VisionPage() {
  return (
    <>
      <PageHero title="비전 및 미션" subtitle="Vision & Mission" bgImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb
          items={[
            { label: "위원회 소개", href: "/about" },
            { label: "비전 및 미션" },
          ]}
        />

        {/* Vision Statement */}
        <div className="mt-10 text-center py-16 px-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl text-white">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Our Vision
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
            "대한민국이 최고의<br />
            <span className="text-amber-400">문화강국</span>이 될 것이다."
          </h2>
          <p className="mt-6 text-gray-300 max-w-xl mx-auto">
            문화의 힘으로 세계를 하나로 묶고, 지구촌 3대 축제를 통해
            대한민국의 위상을 전 세계에 알립니다.
          </p>
        </div>

        {/* Visual banner */}
        <div className="mt-12 relative h-48 sm:h-64 rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&q=80"
            alt="축제 현장"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/60 to-transparent flex items-center px-8">
            <p className="text-white text-xl sm:text-2xl font-bold max-w-md">
              문화의 힘으로 세계를 하나로
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-gray-900 text-center mb-8">핵심 가치</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {CORE_VALUES.map((val) => (
              <div
                key={val.title}
                className="text-center p-8 bg-white border border-gray-100 rounded-2xl shadow-sm"
              >
                <div className="text-4xl mb-4">{val.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{val.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Missions */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-gray-900 text-center mb-8">3대 미션</h3>
          <div className="space-y-5">
            {MISSIONS.map((m) => (
              <div
                key={m.num}
                className={`flex gap-6 p-6 ${m.bg} border-l-4 ${m.color} rounded-r-2xl`}
              >
                <span className={`text-4xl font-black ${m.numColor} flex-shrink-0`}>
                  {m.num}
                </span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">{m.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
