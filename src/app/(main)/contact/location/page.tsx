import { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export const metadata: Metadata = { title: "오시는 길" };

export default function LocationPage() {
  return (
    <>
      <PageHero title="오시는 길" subtitle="Location" bgImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ label: "문의", href: "/contact" }, { label: "오시는 길" }]} />

        <div className="mt-10 grid md:grid-cols-2 gap-8 items-start">
          {/* Map placeholder */}
          <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400">
            <div className="text-center">
              <p className="text-4xl mb-2">🗺️</p>
              <p className="text-sm">지도는 추후 등록됩니다</p>
            </div>
          </div>

          {/* Address info */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-5">국제본부</h2>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <span className="text-amber-500 flex-shrink-0">📍</span>
                <div>
                  <p className="font-semibold text-gray-900">주소</p>
                  <p className="text-gray-600 mt-0.5">추후 공개 예정</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-amber-500 flex-shrink-0">✉️</span>
                <div>
                  <p className="font-semibold text-gray-900">이메일</p>
                  <a href="mailto:info@ccna.or.kr" className="text-amber-600 hover:underline">
                    info@ccna.or.kr
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-amber-500 flex-shrink-0">🌐</span>
                <div>
                  <p className="font-semibold text-gray-900">홈페이지</p>
                  <p className="text-gray-600">ccna.or.kr</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
