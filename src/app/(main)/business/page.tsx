import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/common/PageHero";
import { BUSINESS_AREAS } from "@/data/business";

export const metadata: Metadata = { title: "사업 영역" };

export default function BusinessPage() {
  return (
    <>
      <PageHero
        title="사업 영역"
        subtitle="Business Areas"
        description="3대 핵심 추진분야와 융합 사업을 통해 문화강국을 실현합니다."
        bgImage="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1920&q=80"
      />

      {/* Three pillars infographic */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Image
            src="/img/three-pillars.png"
            alt="3대 핵심 분야 인포그래픽"
            width={1000}
            height={280}
            className="object-contain rounded-xl shadow-sm max-w-full mx-auto"
          />
        </div>
      </section>

      {/* Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {BUSINESS_AREAS.map((area) => (
              <Link
                key={area.id}
                href={`/business/${area.id}`}
                className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-amber-200"
              >
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-600 mb-2 leading-snug">
                  {area.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.subAreas.slice(0, 3).map((sub) => (
                    <span
                      key={sub.title}
                      className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {sub.title}
                    </span>
                  ))}
                  {area.subAreas.length > 3 && (
                    <span className="px-2.5 py-1 bg-gray-100 text-gray-400 text-xs rounded-full">
                      +{area.subAreas.length - 3}
                    </span>
                  )}
                </div>
                <p className="mt-5 text-amber-600 text-sm font-medium group-hover:underline">
                  자세히 보기 →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
