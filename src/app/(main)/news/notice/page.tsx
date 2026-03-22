import { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export const metadata: Metadata = { title: "공지사항" };

const NOTICES = [
  { id: 1, title: "PNIXTA WORLD CULPORTS FESTA 2024 개최 안내", date: "2024-08-01", important: true },
  { id: 2, title: "문화민족선진화위원회 국제본부 출범 선언", date: "2024-07-15", important: true },
  { id: 3, title: "전국 254개 지회 조직 구축 완료 안내", date: "2024-06-10" },
  { id: 4, title: "2024년 하반기 임원 교육 일정 공지", date: "2024-05-20" },
  { id: 5, title: "피닉타 페스타 자원봉사자 모집 안내", date: "2024-04-01" },
];

export default function NoticePage() {
  return (
    <>
      <PageHero title="공지사항" subtitle="Notice" bgImage="https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?w=1920&q=80" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ label: "소식/미디어", href: "/news" }, { label: "공지사항" }]} />

        <div className="mt-8">
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
            {NOTICES.map((notice, i) => (
              <div
                key={notice.id}
                className={`flex items-center gap-4 px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                  i < NOTICES.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                {notice.important && (
                  <span className="flex-shrink-0 px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-bold rounded">
                    중요
                  </span>
                )}
                <p className={`flex-1 text-sm ${notice.important ? "font-semibold text-gray-900" : "text-gray-700"}`}>
                  {notice.title}
                </p>
                <span className="flex-shrink-0 text-xs text-gray-400">{notice.date}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-gray-400">
            더 많은 공지사항은 추후 업데이트됩니다.
          </p>
        </div>
      </div>
    </>
  );
}
