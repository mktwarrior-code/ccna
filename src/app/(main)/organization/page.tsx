import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/common/PageHero";

export const metadata: Metadata = { title: "조직" };

const MENUS = [
  { href: "/organization/chart", icon: "🌐", title: "조직도", desc: "국제본부 전체 조직 구조" },
  { href: "/organization/status", icon: "📋", title: "조직현황", desc: "임원 및 위원 현황 테이블" },
  { href: "/organization/domestic", icon: "🗺️", title: "전국 조직", desc: "4본부 23지부 254지회 현황" },
  { href: "/organization/international", icon: "🌍", title: "국제 네트워크", desc: "6개 연맹 221개국 조직" },
];

export default function OrganizationPage() {
  return (
    <>
      <PageHero title="조직" subtitle="Organization" description="4본부 · 23지부 · 254지회 · 221개국 국제 네트워크" bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80" />
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Organization overview image */}
        <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden mb-10">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
            alt="조직 협업"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 to-transparent flex items-center px-8">
            <div>
              <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest">Organization</p>
              <p className="text-white text-xl sm:text-2xl font-bold mt-1">전국 조직망으로 연결됩니다</p>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {MENUS.map((item) => (
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
