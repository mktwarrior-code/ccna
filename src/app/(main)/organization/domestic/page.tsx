import { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export const metadata: Metadata = { title: "전국 조직" };

const HEADQUARTERS = [
  {
    name: "중앙본부",
    branches: 5,
    chapters: 51,
    color: "border-blue-500",
    bg: "bg-blue-50",
    text: "text-blue-700",
  },
  {
    name: "전경본부",
    branches: 7,
    chapters: 68,
    color: "border-emerald-500",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
  },
  {
    name: "충경본부",
    branches: 6,
    chapters: 53,
    color: "border-purple-500",
    bg: "bg-purple-50",
    text: "text-purple-700",
  },
  {
    name: "강경본부",
    branches: 6,
    chapters: 68,
    color: "border-orange-500",
    bg: "bg-orange-50",
    text: "text-orange-700",
  },
];

const STATS_SUMMARY = [
  { label: "총 임원", value: "12,192명" },
  { label: "총 대의원", value: "89,154명" },
  { label: "임원+대의원 합계", value: "101,445명" },
  { label: "목표 정회원", value: "1,016,000명" },
];

export default function DomesticPage() {
  return (
    <>
      <PageHero title="전국 조직" subtitle="Domestic Network" description="4본부 23지부 254지회 전국 조직망" bgImage="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&q=80" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ label: "조직", href: "/organization" }, { label: "전국 조직" }]} />

        {/* Stats summary */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS_SUMMARY.map((s) => (
            <div key={s.label} className="text-center p-5 bg-gray-900 rounded-2xl text-white">
              <p className="text-2xl font-black text-amber-400">{s.value}</p>
              <p className="text-xs text-gray-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Headquarters grid */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {HEADQUARTERS.map((hq) => (
            <div key={hq.name} className={`p-5 ${hq.bg} border-l-4 ${hq.color} rounded-r-2xl`}>
              <h3 className={`font-black text-lg ${hq.text} mb-3`}>{hq.name}</h3>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">지부</span>
                  <span className="font-bold text-gray-900">{hq.branches}개</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">지회</span>
                  <span className="font-bold text-gray-900">{hq.chapters}개</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Organization structure info */}
        <div className="mt-10 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
          <h3 className="font-bold text-gray-900 mb-4">조직 편성 기준</h3>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <p className="font-semibold text-gray-800 mb-2">지회 편성 기준</p>
              <p>인구 20만명 ±α 기준으로 전국 254개 지회 편성</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-2">임원 구성</p>
              <p>각 본부·지부·지회의 임원은 48명으로 구성</p>
              <p className="mt-1">지회 산하: 대의원 351명 + 회원</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-2">복수직책 제도</p>
              <p>분소의 부서임원 중 선임이 상위 분소의 부서임원을 겸임</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-2">목표 회원</p>
              <p>4,000명 × 254지회 = <strong className="text-amber-600">1,016,000명</strong></p>
            </div>
          </div>
        </div>

        {/* Organization building strategies */}
        <div className="mt-8 grid sm:grid-cols-2 gap-5">
          <div className="p-6 bg-amber-50 border border-amber-100 rounded-2xl">
            <h4 className="font-bold text-amber-800 mb-3">조직구축 전략 1</h4>
            <p className="text-sm text-amber-700 mb-3">전국 단체들과 협업하여 지역별 실무조직 구축</p>
            <div className="flex flex-wrap gap-1.5">
              {["대한노인회", "향교", "호남향우회", "해병전우회", "상록회", "연예인협회", "소상공인협회", "라이온스클럽", "JC(청년회의소)"].map((org) => (
                <span key={org} className="px-2 py-0.5 bg-white text-amber-700 text-xs rounded-full border border-amber-200">
                  {org}
                </span>
              ))}
            </div>
          </div>
          <div className="p-6 bg-blue-50 border border-blue-100 rounded-2xl">
            <h4 className="font-bold text-blue-800 mb-3">조직구축 전략 2</h4>
            <p className="text-sm text-blue-700 mb-3">지방자치단체와의 MOU를 통한 공동 문화사업 전개</p>
            <ul className="space-y-1.5 text-xs text-blue-700">
              <li>• 축제 내 지역특산품/전통놀이 지역별 릴레이 개최</li>
              <li>• 문화관광과, 문화재과 홍보 및 예산 확보</li>
              <li>• 전문문화연구원, 각국 대사관 문화부 협력</li>
              <li>• 기업과 CSR 협약을 통한 민속놀이 보급</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
