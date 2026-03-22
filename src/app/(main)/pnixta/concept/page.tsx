import { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/common/PageHero";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export const metadata: Metadata = { title: "운영 콘셉트" };

const ELEMENTS = [
  { icon: "🎭", title: "문화공연", desc: "각국 전통 음악, 무용, 공연 상시 진행" },
  { icon: "🎮", title: "전통놀이 체험", desc: "세계 각국 놀이에 직접 참여하고 배울 수 있음" },
  { icon: "🍜", title: "먹거리", desc: "각국 전통 음식 야시장 마켓" },
  { icon: "🏺", title: "전통 공예", desc: "각국 전통 공예품 전시 및 판매" },
];

export default function ConceptPage() {
  return (
    <>
      <PageHero title="운영 콘셉트" subtitle="Concept" description="야시장형 체험 축제로 세계인이 함께 어울리는 공간" bgImage="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1920&q=80" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ label: "피닉타 축제", href: "/pnixta" }, { label: "운영 콘셉트" }]} />

        {/* Main concept */}
        <div className="mt-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-4">야시장형 구조</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              각국의 전통놀이 부스를 거리 형태로 배치하여 방문객이 자유롭게 체험하는 참여형 축제입니다.
              관람하는 축제가 아닌 <strong className="text-gray-900">마당놀이처럼 함께 어울러 즐기는</strong> 축제입니다.
            </p>
            <ul className="space-y-3">
              {["각국 전통놀이 부스를 거리 형태로 배치", "누구나 놀이에 참여하고 직접 배울 수 있음", "문화·공연·먹거리·공예가 어우러진 총체적 민속축제"].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-gray-600">
                  <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80"
              alt="야시장 축제 분위기"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Four elements */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-gray-900 text-center mb-8">축제 4대 구성요소</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ELEMENTS.map((el) => (
              <div key={el.title} className="text-center p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                <div className="text-4xl mb-3">{el.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{el.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{el.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Atmosphere images */}
        <div className="mt-12 grid grid-cols-3 gap-4">
          {[
            { url: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=600&q=80", alt: "전통놀이" },
            { url: "https://images.unsplash.com/photo-1519817650390-64a93db51149?w=600&q=80", alt: "축제 공연" },
            { url: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600&q=80", alt: "전통시장" },
          ].map((img) => (
            <div key={img.url} className="relative aspect-square rounded-xl overflow-hidden">
              <Image src={img.url} alt={img.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
