import { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export const metadata: Metadata = { title: "보도자료" };

const PRESS = [
  { id: 1, title: "문화민족선진화위원회, 지구촌 3대 축제 '피닉타 페스타' 비전 발표", date: "2024-07-20", media: "문화일보" },
  { id: 2, title: "'피닉타' 전통놀이 기반 세계축제 표준화 추진", date: "2024-06-15", media: "한국경제" },
  { id: 3, title: "CCNA, 254개 지회 전국 조직망 구축 완료", date: "2024-05-10", media: "조선일보" },
];

export default function PressPage() {
  return (
    <>
      <PageHero title="보도자료" subtitle="Press Release" bgImage="https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?w=1920&q=80" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ label: "소식/미디어", href: "/news" }, { label: "보도자료" }]} />

        <div className="mt-8 space-y-4">
          {PRESS.map((item) => (
            <div key={item.id} className="flex gap-4 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer">
              <div className="flex-shrink-0 w-16 text-center">
                <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">{item.media}</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900 text-sm">{item.title}</p>
                <p className="text-xs text-gray-400 mt-1">{item.date}</p>
              </div>
            </div>
          ))}
          <p className="text-center text-sm text-gray-400 pt-4">추후 업데이트됩니다.</p>
        </div>
      </div>
    </>
  );
}
