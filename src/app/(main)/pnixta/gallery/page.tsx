import { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/common/PageHero";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export const metadata: Metadata = { title: "갤러리" };

const GALLERY_IMAGES = [
  { url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80", alt: "한국 전통 문화 공연", span: "col-span-2 row-span-2" },
  { url: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=600&q=80", alt: "전통놀이 체험" },
  { url: "https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=600&q=80", alt: "한국 전통 문화" },
  { url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80", alt: "축제 현장" },
  { url: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=600&q=80", alt: "전통 공연" },
  { url: "https://images.unsplash.com/photo-1519817650390-64a93db51149?w=600&q=80", alt: "축제 무대" },
  { url: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&q=80", alt: "전통 스포츠" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero title="갤러리" subtitle="Gallery" description="피닉타 축제 현장 사진 모음" bgImage="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=80" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ label: "피닉타 축제", href: "/pnixta" }, { label: "갤러리" }]} />

        {/* Grid gallery */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-48">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className={`relative rounded-xl overflow-hidden ${img.span ?? ""} aspect-square lg:aspect-auto`}
              style={{ minHeight: i === 0 ? "320px" : "160px" }}
            >
              <Image
                src={img.url}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Poster highlight */}
        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-sm shadow-2xl rounded-2xl overflow-hidden">
            <Image
              src="/img/pnixta-poster.png"
              alt="PNIXTA WORLD CULPORTS FESTA 2024 공식 포스터"
              width={400}
              height={533}
              className="object-contain w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
