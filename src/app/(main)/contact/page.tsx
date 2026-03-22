import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/common/PageHero";

export const metadata: Metadata = { title: "문의" };

export default function ContactPage() {
  return (
    <>
      <PageHero title="문의" subtitle="Contact" bgImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80" />
      <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact banner */}
        <div className="relative h-40 sm:h-48 rounded-2xl overflow-hidden mb-10">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80"
            alt="소통"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/60 to-transparent flex items-center px-8">
            <p className="text-white text-xl font-bold">언제든 문의해 주세요</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: "/contact/location", icon: "📍", title: "오시는 길", desc: "국제본부 위치 및 교통 안내" },
            { href: "/contact/inquiry", icon: "✉️", title: "문의하기", desc: "온라인 문의 양식" },
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

        {/* Quick contact info */}
        <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
          <p className="text-sm text-gray-600">
            이메일:{" "}
            <a href="mailto:info@ccna.or.kr" className="text-amber-600 font-semibold hover:underline">
              info@ccna.or.kr
            </a>
          </p>
          <p className="text-xs text-gray-400 mt-2">홈페이지: ccna.or.kr</p>
        </div>
      </section>
    </>
  );
}
