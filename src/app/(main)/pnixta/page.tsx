import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/common/PageHero";

export const metadata: Metadata = { title: "피닉타 페스타" };

export default function PnixtaPage() {
  return (
    <>
      <PageHero
        title="피닉타 페스타"
        subtitle="PNIXTA WORLD CULPORTS FESTA"
        description="전통놀이로 세계를 하나로 — 지구촌 3번째 초대형 축제"
        bgImage="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1920&q=80"
      />

      {/* Definition */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-6">
                피닉타(PNIXTA)란?
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-amber-50 rounded-xl">
                  <span className="text-2xl">🔥</span>
                  <div>
                    <p className="font-bold text-gray-900">Phinicta = Phoenix + Star</p>
                    <p className="text-sm text-gray-600 mt-1">
                      불사조(Phoenix)와 별(Star)의 합성어. 영원히 빛나는 문화의 상징
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-blue-50 rounded-xl">
                  <span className="text-2xl">🎪</span>
                  <div>
                    <p className="font-bold text-gray-900">Festa = 세계인의 놀이 잔치</p>
                    <p className="text-sm text-gray-600 mt-1">
                      민속 야시장형 체험 축제 — 문화공연 + 놀이 + 먹거리 + 공예가 어우러진 총체적 민속축제
                    </p>
                  </div>
                </div>
              </div>

              {/* 3 Keywords */}
              <div className="mt-8">
                <p className="text-sm font-semibold text-gray-500 mb-4">핵심 키워드</p>
                <div className="flex gap-3">
                  {["전통성", "대중성", "창의성"].map((kw) => (
                    <span
                      key={kw}
                      className="flex-1 text-center py-3 bg-gray-900 text-amber-400 font-bold text-sm rounded-xl"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Poster */}
            <div className="flex justify-center">
              <div className="relative w-72 shadow-2xl rounded-2xl overflow-hidden">
                <Image
                  src="/img/pnixta-poster.png"
                  alt="PNIXTA WORLD CULPORTS FESTA 2024 공식 포스터"
                  width={288}
                  height={384}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision quote */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">비전</p>
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold leading-relaxed">
            "피닉타 페스타는 인류의 전통놀이를 통해 문명의 다양성과 연대를 잇는,
            <span className="text-amber-400"> 지구촌 세 번째 초대형 축제</span>를 꿈꾼다."
          </blockquote>
          <p className="mt-6 text-gray-400 text-sm">
            관람문화가 아닌 마당놀이처럼 함께 어울러 즐기는 축제로 발전시켜 길이길이 후손에게 물려줍니다.
          </p>
        </div>
      </section>

      {/* Sub menu */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: "/pnixta/concept", icon: "🗺️", title: "운영 콘셉트", desc: "야시장형 체험 축제의 구체적 운영 방식" },
              { href: "/pnixta/phases", icon: "📅", title: "추진 단계", desc: "한국 → 세계로 이어지는 순환 개최 계획" },
              { href: "/pnixta/archive", icon: "🎮", title: "전통놀이 아카이브", desc: "한국을 비롯한 세계 전통놀이 소개" },
              { href: "/pnixta/gallery", icon: "🖼️", title: "갤러리", desc: "피닉타 축제 현장 사진" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex gap-4 p-5 bg-white border border-gray-100 rounded-2xl hover:border-amber-200 hover:shadow-md transition-all group"
              >
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-amber-600 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
