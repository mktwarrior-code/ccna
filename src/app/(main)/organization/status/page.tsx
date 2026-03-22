import { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export const metadata: Metadata = { title: "조직현황" };

const POSITIONS = [
  { dept: "최고지도부", roles: ["의장", "공동대표", "상임고문", "고문", "자문위원", "감사"] },
  { dept: "전략/행정", roles: ["전략기획실장", "비서실장", "행정총괄본부장", "예산기획부장", "조직운영부장", "대외협력부장"] },
  { dept: "행사운영", roles: ["행사총괄본부장", "콘텐츠기획부장", "현장운영부장", "안전관리부장", "행사지원부장"] },
  { dept: "성공위원회", roles: ["대외협력위원장", "국제위원장", "윤리위원장", "교육위원장", "여성위원장", "청년위원장", "정책위원장", "경제위원장", "사회위원장", "문화위원장", "홍보위원장", "과학기술위원장", "심판위원장", "선수위원장"] },
];

export default function StatusPage() {
  return (
    <>
      <PageHero title="조직현황" subtitle="Organization Status" description="국제본부 임원 및 위원 현황" bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ label: "조직", href: "/organization" }, { label: "조직현황" }]} />

        <div className="mt-10 space-y-6">
          {POSITIONS.map((group) => (
            <div key={group.dept} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <div className="px-6 py-3 bg-gray-50 border-b border-gray-100">
                <h3 className="font-bold text-gray-900 text-sm">{group.dept}</h3>
              </div>
              <div className="p-4 flex flex-wrap gap-2">
                {group.roles.map((role) => (
                  <span key={role} className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg font-medium">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* T/O Table */}
        <div className="mt-10">
          <h3 className="font-bold text-gray-900 mb-4 text-lg">T/O 현황</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left font-semibold">구분</th>
                  <th className="px-4 py-3 text-right font-semibold">임원</th>
                  <th className="px-4 py-3 text-right font-semibold">대의원</th>
                  <th className="px-4 py-3 text-right font-semibold">합계</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">전국 조직 (254지회)</td>
                  <td className="px-4 py-3 text-right">12,192</td>
                  <td className="px-4 py-3 text-right">89,154</td>
                  <td className="px-4 py-3 text-right font-bold text-amber-600">101,445+</td>
                </tr>
                <tr className="bg-amber-50 border-b border-amber-100">
                  <td className="px-4 py-3 font-bold text-amber-800">목표 정회원</td>
                  <td className="px-4 py-3 text-right text-amber-700" colSpan={2}>4,000명 × 254지회</td>
                  <td className="px-4 py-3 text-right font-black text-amber-700">1,016,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
