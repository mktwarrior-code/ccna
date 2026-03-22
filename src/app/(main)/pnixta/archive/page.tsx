import { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/common/PageHero";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { TRADITIONAL_GAMES } from "@/data/traditional-games";

export const metadata: Metadata = { title: "전통놀이 아카이브" };

const GAME_IMAGES: Record<string, string> = {
  "yut-nori": "https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=400&q=80",
  "juldarigi": "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=400&q=80",
  "jegi-chagi": "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=400&q=80",
  "neolttwigi": "https://images.unsplash.com/photo-1519817650390-64a93db51149?w=400&q=80",
  "paengichagi": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&q=80",
  "ssireum": "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=400&q=80",
};

export default function ArchivePage() {
  return (
    <>
      <PageHero
        title="전통놀이 아카이브"
        subtitle="Traditional Games Archive"
        description="한국 전통놀이부터 세계 각국의 민속놀이까지"
        bgImage="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1920&q=80"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ label: "피닉타 축제", href: "/pnixta" }, { label: "전통놀이 아카이브" }]} />

        {/* Filter bar placeholder */}
        <div className="mt-8 flex gap-2 flex-wrap">
          {["전체", "아시아", "유럽", "미주", "아프리카"].map((region) => (
            <button
              key={region}
              className={`px-4 py-2 text-sm rounded-full border transition-colors ${
                region === "전체"
                  ? "bg-amber-500 text-white border-amber-500"
                  : "bg-white text-gray-600 border-gray-200 hover:border-amber-300"
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Games grid */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRADITIONAL_GAMES.map((game) => (
            <div key={game.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all group">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={GAME_IMAGES[game.id] ?? "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&q=80"}
                  alt={game.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-0.5 bg-black/50 text-white text-xs rounded-full backdrop-blur-sm">
                    {game.region}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-gray-900">{game.name}</h3>
                  <span className="text-xs text-gray-400">{game.nameEn}</span>
                </div>
                <p className="text-xs text-amber-600 font-medium mb-2">{game.country}</p>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                  {game.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Coming soon notice */}
        <div className="mt-12 p-8 bg-amber-50 border border-amber-200 rounded-2xl text-center">
          <p className="text-amber-700 font-semibold mb-2">🌍 세계 전통놀이 아카이브 확장 예정</p>
          <p className="text-sm text-amber-600">
            피닉타 세계전통놀이 종목 선정위원회 발족 후 221개국 전통놀이가 추가됩니다.
          </p>
        </div>
      </div>
    </>
  );
}
