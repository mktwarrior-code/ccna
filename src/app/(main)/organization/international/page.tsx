import { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export const metadata: Metadata = { title: "국제 네트워크" };

const FEDERATIONS = [
  { name: "아시아연맹", icon: "🌏", countries: 47, color: "bg-emerald-100 border-emerald-300 text-emerald-800" },
  { name: "유럽연맹", icon: "🌍", countries: 44, color: "bg-blue-100 border-blue-300 text-blue-800" },
  { name: "미주연맹", icon: "🌎", countries: 35, color: "bg-purple-100 border-purple-300 text-purple-800" },
  { name: "아프리카연맹", icon: "🌍", countries: 54, color: "bg-orange-100 border-orange-300 text-orange-800" },
  { name: "중동연맹", icon: "🕌", countries: 18, color: "bg-yellow-100 border-yellow-300 text-yellow-800" },
  { name: "오세아니아연맹", icon: "🏝️", countries: 14, color: "bg-teal-100 border-teal-300 text-teal-800" },
];

const PARTNERS = ["유네스코(UNESCO)", "ICHCAP", "ASEAN", "OAS", "국제놀이협회"];

export default function InternationalPage() {
  return (
    <>
      <PageHero
        title="국제 네트워크"
        subtitle="International Network"
        description="6개 연맹 · 221개국 지부위원회 글로벌 네트워크"
        bgImage="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1920&q=80"
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ label: "조직", href: "/organization" }, { label: "국제 네트워크" }]} />

        {/* Summary stats */}
        <div className="mt-10 grid grid-cols-3 gap-4">
          {[
            { value: "6", unit: "개", label: "연맹" },
            { value: "221", unit: "개국", label: "지부위원회" },
            { value: "∞", unit: "", label: "문화 연대" },
          ].map((s) => (
            <div key={s.label} className="text-center p-5 bg-gray-900 rounded-2xl text-white">
              <p className="text-3xl font-black text-amber-400">{s.value}<span className="text-xl">{s.unit}</span></p>
              <p className="text-xs text-gray-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Federations */}
        <div className="mt-10">
          <h3 className="font-bold text-gray-900 mb-5">6개 대륙 연맹</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEDERATIONS.map((fed) => (
              <div key={fed.name} className={`p-5 border rounded-2xl ${fed.color}`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{fed.icon}</span>
                  <h4 className="font-bold">{fed.name}</h4>
                </div>
                <p className="text-sm">지부위원회: <strong>{fed.countries}개국</strong></p>
              </div>
            ))}
          </div>
        </div>

        {/* International partners */}
        <div className="mt-10 p-6 bg-amber-50 border border-amber-100 rounded-2xl">
          <h3 className="font-bold text-amber-800 mb-4">국제기구 협력 대상</h3>
          <p className="text-sm text-amber-700 mb-4">
            다자간 문화외교 및 국제기구 연계를 통한 문화외교 전략적 파트너십 체결 추진
          </p>
          <div className="flex flex-wrap gap-2">
            {PARTNERS.map((p) => (
              <span key={p} className="px-3 py-1.5 bg-white text-amber-700 text-sm rounded-lg border border-amber-200 font-medium">
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Strategy */}
        <div className="mt-6 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
          <h3 className="font-bold text-gray-900 mb-3">국제화 전략</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex gap-2"><span className="text-amber-500">•</span>외국 대사관, 문화원, 한인회 연계 참여 유도</li>
            <li className="flex gap-2"><span className="text-amber-500">•</span>민속놀이 보급 취지에 맞는 기업과 CSR 협약</li>
            <li className="flex gap-2"><span className="text-amber-500">•</span>'세계 전통놀이의 날', '피닉타 주간' 국제 지정 추진</li>
            <li className="flex gap-2"><span className="text-amber-500">•</span>유네스코 무형유산 등재 추진 및 세계전통놀이 지도제작</li>
          </ul>
        </div>
      </div>
    </>
  );
}
