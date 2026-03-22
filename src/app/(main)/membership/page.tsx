import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/common/PageHero";

export const metadata: Metadata = { title: "회원가입" };

export default function MembershipPage() {
  return (
    <>
      <PageHero
        title="회원가입"
        subtitle="Membership"
        description="대한민국 국민이면 누구나 회원이 될 수 있습니다."
        bgImage="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80"
      />
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Membership banner */}
        <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden mb-10">
          <Image
            src="/img/membership-benefits.png"
            alt="회원 혜택"
            fill
            className="object-contain bg-amber-50"
          />
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { href: "/membership/benefits", icon: "🏆", title: "회원 종류 및 혜택", desc: "위원·대의원·임원 등급별 혜택" },
            { href: "/membership/process", icon: "📝", title: "가입 절차", desc: "신청 → 납부 → 회원 → 축제 참여" },
            { href: "/membership/apply", icon: "✅", title: "가입 신청", desc: "온라인으로 간편하게 가입 신청" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col items-center text-center p-8 bg-white border border-gray-100 rounded-2xl hover:border-amber-200 hover:shadow-md transition-all"
            >
              <span className="text-4xl mb-4">{item.icon}</span>
              <h3 className="font-bold text-gray-900 group-hover:text-amber-600 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
