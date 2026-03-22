import { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/common/PageHero";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export const metadata: Metadata = { title: "위원회 ISSUE" };

const TIMELINE = [
  { era: "수렵시대", icon: "🏹", desc: "생존을 위한 사냥" },
  { era: "농경시대", icon: "🌾", desc: "땅을 일구는 정착" },
  { era: "산업시대", icon: "🏭", desc: "기계와 생산의 혁명" },
  { era: "지식시대", icon: "💻", desc: "정보와 지식의 폭발" },
  { era: "문화시대", icon: "🎭", desc: "놀이와 문화가 지배", highlight: true },
];

const TERRITORIES = [
  { type: "정치영토", desc: "전쟁을 통해 빼앗는 물리적 영토", icon: "⚔️" },
  { type: "경제영토", desc: "경제력으로 확보하는 시장과 자원", icon: "💰" },
  { type: "과학영토", desc: "기술과 혁신으로 개척하는 제3의 영역", icon: "🔬" },
  { type: "문화영토", desc: "문화의 영향력이 지배하는 현재의 영토", icon: "🎪", highlight: true },
];

export default function IssuePage() {
  return (
    <>
      <PageHero
        title="위원회 ISSUE"
        subtitle="The Age of Homo Ludens"
        description="놀이를 즐기는 인류, 호모 루덴스 시대의 도래"
        bgImage="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1920&q=80"
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb
          items={[
            { label: "위원회 소개", href: "/about" },
            { label: "위원회 ISSUE" },
          ]}
        />

        {/* Homo Ludens */}
        <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">
              Homo Ludens
            </span>
            <h2 className="mt-3 text-3xl font-black text-gray-900">
              놀이를 즐기는 인류
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              "노는 것은 생존보다 더 진지하다."
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              지혜로운 인간을 뜻하는 <strong>호모 사피엔스(Homo Sapiens)</strong> 시대에서
              놀이를 즐기는 <strong className="text-amber-600">호모 루덴스(Homo Ludens)</strong> 시대로
              이미 바뀌었습니다. 현재는 문화가 큰 영향도를 발휘하는 <strong>문화영토 시대</strong>입니다.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/img/k-power-diagram.png"
              alt="K파워 한파워 다이어그램"
              width={340}
              height={340}
              className="object-contain drop-shadow-lg"
            />
          </div>
        </div>

        {/* Era Timeline */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-gray-900 text-center mb-8">
            인류 문명의 시대 흐름
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block" />
            <div className="grid md:grid-cols-5 gap-4">
              {TIMELINE.map((item, i) => (
                <div key={item.era} className="relative flex flex-col items-center text-center">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-3 z-10 ${
                      item.highlight
                        ? "bg-amber-500 shadow-lg shadow-amber-200"
                        : "bg-gray-100"
                    }`}
                  >
                    {item.icon}
                  </div>
                  {i < TIMELINE.length - 1 && (
                    <div className="absolute top-7 left-[calc(50%+28px)] right-0 h-0.5 bg-gray-200 hidden md:block" />
                  )}
                  <p className={`text-sm font-bold ${item.highlight ? "text-amber-600" : "text-gray-800"}`}>
                    {item.era}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Territories */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-gray-900 text-center mb-8">
            영토의 변화 — 정치에서 문화로
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TERRITORIES.map((t) => (
              <div
                key={t.type}
                className={`p-5 rounded-2xl border text-center ${
                  t.highlight
                    ? "bg-amber-500 border-amber-400 text-white"
                    : "bg-white border-gray-100"
                }`}
              >
                <div className="text-3xl mb-3">{t.icon}</div>
                <h4 className={`font-bold text-sm mb-2 ${t.highlight ? "text-white" : "text-gray-900"}`}>
                  {t.type}
                </h4>
                <p className={`text-xs leading-relaxed ${t.highlight ? "text-amber-100" : "text-gray-500"}`}>
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">
            이제 다가오는 미래는 문화가 명실공히 우리민족의 진면목을 보여줄 시대이며,
            그 키워드는 바로 <strong className="text-amber-600">루덴스(Ludens)</strong>입니다.
          </p>
        </div>
      </div>
    </>
  );
}
