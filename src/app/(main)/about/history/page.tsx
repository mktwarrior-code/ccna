import { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/common/PageHero";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export const metadata: Metadata = { title: "연혁" };

const HISTORY = [
  {
    year: "2024",
    events: [
      {
        month: "09",
        title: "PNIXTA WORLD CULPORTS FESTA 개최",
        desc: "서울올림픽주경기장 일원, 2024.09.14~09.18",
      },
      {
        month: "07",
        title: "문화민족선진화위원회 국제본부 출범",
        desc: "의장 신동이, 국제 조직 체계 선포",
      },
    ],
  },
  {
    year: "2023",
    events: [
      {
        month: "11",
        title: "4본부 23지부 전국 조직 구성 완료",
        desc: "중앙·전경·충경·강경 본부 체계 완성",
      },
      {
        month: "05",
        title: "피닉타 페스타 기획안 발표",
        desc: "지구촌 3대 축제 비전 공식 선언",
      },
    ],
  },
  {
    year: "2022",
    events: [
      {
        month: "03",
        title: "문화민족선진화위원회 창립",
        desc: "전통문화와 놀이를 통한 문화강국 실현을 목표로 창립",
      },
    ],
  },
];

export default function HistoryPage() {
  return (
    <>
      <PageHero title="연혁" subtitle="History" description="문화민족선진화위원회의 발자취" bgImage="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&q=80" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb
          items={[
            { label: "위원회 소개", href: "/about" },
            { label: "연혁" },
          ]}
        />

        {/* Featured image */}
        <div className="mt-10 relative h-48 sm:h-56 rounded-2xl overflow-hidden mb-12">
          <Image
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80"
            alt="문화 축제 현장"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
            <p className="text-white text-lg font-bold">2022년 창립부터 현재까지</p>
          </div>
        </div>

        <div className="space-y-12">
          {HISTORY.map((group) => (
            <div key={group.year} className="relative pl-8 border-l-2 border-gray-200">
              {/* Year badge */}
              <div className="absolute -left-4 top-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-6">{group.year}</h3>

              <div className="space-y-5">
                {group.events.map((event, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="flex-shrink-0 w-10 text-sm font-bold text-amber-600 mt-0.5">
                      {event.month}월
                    </span>
                    <div>
                      <p className="font-bold text-gray-900">{event.title}</p>
                      <p className="text-sm text-gray-500 mt-0.5">{event.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
