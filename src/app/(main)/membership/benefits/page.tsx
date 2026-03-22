import { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/common/PageHero";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export const metadata: Metadata = { title: "회원 종류 및 혜택" };

const TIERS = [
  {
    name: "위원",
    nameEn: "Member",
    desc: "기본 멤버십 혜택",
    color: "border-gray-300",
    bg: "bg-gray-50",
    badge: "bg-gray-200 text-gray-700",
    benefits: ["위원회 행사 참여", "멤버십 카드 발급", "위원회 활동 정보 수신", "국내외 축제 참여"],
  },
  {
    name: "대의원",
    nameEn: "Delegate",
    desc: "지회 활동 및 투표권",
    color: "border-blue-400",
    bg: "bg-blue-50",
    badge: "bg-blue-200 text-blue-800",
    benefits: ["위원 혜택 포함", "지회 공식 활동 참여", "투표권 부여", "대의원 배지 수여", "지회 의사결정 참여"],
  },
  {
    name: "임원",
    nameEn: "Executive",
    desc: "위원회 운영 참여",
    color: "border-amber-400",
    bg: "bg-amber-50",
    badge: "bg-amber-400 text-white",
    highlight: true,
    benefits: ["대의원 혜택 포함", "위원회 운영진 참여", "정책 결정 참여", "국제 행사 공식 대표 자격", "임원 직함 부여", "특별 행사 VIP 초청"],
  },
];

export default function BenefitsPage() {
  return (
    <>
      <PageHero title="회원 종류 및 혜택" subtitle="Membership Benefits" bgImage="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ label: "회원가입", href: "/membership" }, { label: "회원 종류 및 혜택" }]} />

        {/* Benefits pyramid image */}
        <div className="mt-10 flex justify-center">
          <Image
            src="/img/membership-benefits.png"
            alt="회원 혜택 피라미드"
            width={400}
            height={400}
            className="object-contain drop-shadow-lg"
          />
        </div>

        {/* Tier cards */}
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`p-6 ${tier.bg} border-2 ${tier.color} rounded-2xl ${
                tier.highlight ? "ring-2 ring-amber-300 ring-offset-2" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-black text-gray-900">{tier.name}</h3>
                <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${tier.badge}`}>
                  {tier.nameEn}
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-4">{tier.desc}</p>
              <ul className="space-y-2">
                {tier.benefits.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-gray-700">
                    <span className="text-amber-500 font-bold flex-shrink-0">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Fee usage */}
        <div className="mt-10 p-6 bg-gray-50 border border-gray-100 rounded-2xl">
          <h3 className="font-bold text-gray-900 mb-4">회비 용도</h3>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="flex gap-3 p-4 bg-white rounded-xl border border-gray-100">
              <span className="text-2xl">🏢</span>
              <div>
                <p className="font-bold text-gray-900">운영자금</p>
                <p className="text-gray-500 mt-1">위원회 및 각 분소의 운영에 사용</p>
              </div>
            </div>
            <div className="flex gap-3 p-4 bg-white rounded-xl border border-gray-100">
              <span className="text-2xl">🎪</span>
              <div>
                <p className="font-bold text-gray-900">행사자금</p>
                <p className="text-gray-500 mt-1">위원회 각종 행사 및 피닉타 페스타 개최</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
