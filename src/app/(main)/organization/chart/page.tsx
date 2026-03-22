import { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export const metadata: Metadata = { title: "조직도" };

function OrgBox({ title, sub, highlight }: { title: string; sub?: string; highlight?: boolean }) {
  return (
    <div className={`px-3 py-2 rounded-lg border text-center text-xs font-medium ${
      highlight
        ? "bg-amber-500 text-white border-amber-400"
        : "bg-white text-gray-800 border-gray-200 shadow-sm"
    }`}>
      <div className="font-bold">{title}</div>
      {sub && <div className="text-xs opacity-70 mt-0.5">{sub}</div>}
    </div>
  );
}

export default function ChartPage() {
  return (
    <>
      <PageHero title="조직도" subtitle="Organization Chart" description="문화민족선진화위원회 국제본부 조직 구조" bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-x-auto">
        <Breadcrumb items={[{ label: "조직", href: "/organization" }, { label: "조직도" }]} />

        <div className="mt-10 min-w-[640px]">
          {/* Top: 의장 */}
          <div className="flex justify-center mb-4">
            <div className="px-6 py-3 bg-gray-900 text-white rounded-xl font-black text-sm">
              의장 (신동이)
            </div>
          </div>

          {/* Line */}
          <div className="flex justify-center mb-4">
            <div className="w-0.5 h-6 bg-gray-300" />
          </div>

          {/* Staff */}
          <div className="flex justify-center gap-3 mb-4 flex-wrap">
            {["전략기획실", "비서실"].map((t) => (
              <OrgBox key={t} title={t} />
            ))}
          </div>
          <div className="flex justify-center mb-4">
            <div className="w-0.5 h-6 bg-gray-300" />
          </div>

          {/* Support units */}
          <div className="flex justify-center gap-2 mb-6 flex-wrap">
            {["정보국", "수행국", "의전국", "공동대표단", "고문단", "자문위원단", "감사"].map((t) => (
              <OrgBox key={t} title={t} />
            ))}
          </div>

          {/* Three major committees */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            {[
              { title: "집행위원회", color: "bg-blue-50 border-blue-200 text-blue-800" },
              { title: "조직위원회", color: "bg-emerald-50 border-emerald-200 text-emerald-800" },
              { title: "성공위원회", color: "bg-purple-50 border-purple-200 text-purple-800" },
            ].map((c) => (
              <div key={c.title} className={`p-3 rounded-xl border text-center font-bold text-sm ${c.color}`}>
                {c.title}
              </div>
            ))}
          </div>

          {/* Sub-units */}
          <div className="grid grid-cols-3 gap-4">
            {/* 집행위원회 */}
            <div className="space-y-2">
              {["행정총괄본부", "행사총괄본부"].map((t) => (
                <OrgBox key={t} title={t} />
              ))}
            </div>

            {/* 조직위원회 */}
            <div className="space-y-2">
              <OrgBox title="한국위원회" sub="4본부 22지부 254지회" />
              <OrgBox title="국제위원회" sub="6연맹 221지부" />
            </div>

            {/* 성공위원회 */}
            <div className="grid grid-cols-2 gap-1.5">
              {["대외협력", "국제", "윤리", "교육", "여성", "청년", "정책", "경제", "사회", "문화"].map((t) => (
                <div key={t} className="px-2 py-1.5 text-center text-xs bg-white border border-gray-200 rounded-lg text-gray-700">
                  {t}위원장
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-10 p-5 bg-gray-50 rounded-xl">
          <h3 className="font-bold text-gray-900 mb-3 text-sm">조직 구성 요약</h3>
          <div className="grid sm:grid-cols-3 gap-3 text-sm">
            <div className="text-gray-600">
              <span className="font-semibold text-gray-800">집행위원회</span><br />
              행정총괄본부 (예산기획부·조직운영부·대외협력부)<br />
              행사총괄본부 (콘텐츠·현장운영·안전·행사지원)
            </div>
            <div className="text-gray-600">
              <span className="font-semibold text-gray-800">조직위원회</span><br />
              한국: 4본부 22지부 254지회<br />
              국제: 6연맹 221개국
            </div>
            <div className="text-gray-600">
              <span className="font-semibold text-gray-800">성공위원회</span><br />
              대외협력·국제·윤리·교육·여성·청년<br />
              정책·경제·사회·문화·홍보·과기·심판·선수
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
