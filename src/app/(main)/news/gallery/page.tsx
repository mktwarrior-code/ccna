import { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/common/PageHero";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export const metadata: Metadata = { title: "활동 갤러리" };

const IMAGES = [
  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80",
  "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=600&q=80",
  "https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=600&q=80",
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80",
  "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=600&q=80",
  "https://images.unsplash.com/photo-1519817650390-64a93db51149?w=600&q=80",
];

export default function NewsGalleryPage() {
  return (
    <>
      <PageHero title="활동 갤러리" subtitle="Activity Gallery" bgImage="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=80" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ label: "소식/미디어", href: "/news" }, { label: "활동 갤러리" }]} />
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {IMAGES.map((url, i) => (
            <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
              <Image src={url} alt={`활동 사진 ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
