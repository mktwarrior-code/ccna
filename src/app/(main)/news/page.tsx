import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/common/PageHero";

export const metadata: Metadata = { title: "소식/미디어" };

export default function NewsPage() {
  return (
    <>
      <PageHero title="소식/미디어" subtitle="News & Media" description="위원회 최신 소식과 미디어 자료" bgImage="https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?w=1920&q=80" />
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* News banner */}
        <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden mb-10">
          <Image
            src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&q=80"
            alt="활동 현장"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
            <p className="text-white text-lg font-bold">위원회 최신 소식을 확인하세요</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: "/news/notice", icon: "📢", title: "공지사항", desc: "위원회 공식 공지 및 안내" },
            { href: "/news/press", icon: "📰", title: "보도자료", desc: "언론 보도 및 보도자료 모음" },
            { href: "/news/gallery", icon: "🖼️", title: "활동 갤러리", desc: "행사 및 활동 사진 모음" },
            { href: "/news/video", icon: "🎬", title: "영상 아카이브", desc: "위원회 공식 영상 자료" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex gap-4 p-6 bg-white border border-gray-100 rounded-2xl hover:border-amber-200 hover:shadow-md transition-all"
            >
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h3 className="font-bold text-gray-900 group-hover:text-amber-600 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
