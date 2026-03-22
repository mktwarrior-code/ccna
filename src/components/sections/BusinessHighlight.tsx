import Image from "next/image";
import Link from "next/link";

const CARDS = [
  {
    icon: "🌏",
    title: "문화 진흥",
    subtitle: "글로벌 문화강국 실현",
    description:
      "전통문화 현대화, K-문화 콘텐츠 육성, 디지털 문화자산 구축으로 대한민국을 문화강국으로",
    href: "/business/culture-promotion",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: "🏛️",
    title: "민족 정체성",
    subtitle: "인류 보편 가치 확산",
    description:
      "민족문화유산 복원·보존, 정체성 기반 교육사업, 다문화 공존모델 개발",
    href: "/business/identity",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: "🎪",
    title: "세계축제 플랫폼",
    subtitle: "문명 연대 구축",
    description:
      "피닉타 페스타 주관, 세계 전통놀이 종주국 전략, 유네스코 연계 놀이유산 등재",
    href: "/business/global-platform",
    color: "from-amber-500 to-orange-600",
  },
];

export function BusinessHighlight() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">
            3대 핵심 추진분야
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-black text-gray-900">
            문화로 세상을 바꿉니다
          </h2>
        </div>

        {/* Three pillars infographic */}
        <div className="flex justify-center mb-12 lg:max-w-4xl lg:mx-auto">
          <Image
            src="/img/three-pillars.png"
            alt="3대 핵심 분야 인포그래픽"
            width={900}
            height={260}
            className="object-contain rounded-2xl shadow-md max-w-full"
          />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {CARDS.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-2xl mb-5`}
              >
                {card.icon}
              </div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                {card.subtitle}
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {card.description}
              </p>
              <p className="mt-5 text-amber-600 text-sm font-medium group-hover:underline">
                자세히 보기 →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
