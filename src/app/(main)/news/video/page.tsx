import { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export const metadata: Metadata = { title: "영상 아카이브" };

export default function VideoPage() {
  return (
    <>
      <PageHero title="영상 아카이브" subtitle="Video Archive" bgImage="https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?w=1920&q=80" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ label: "소식/미디어", href: "/news" }, { label: "영상 아카이브" }]} />
        <div className="mt-10 text-center py-20 bg-gray-50 rounded-2xl border border-gray-100">
          <p className="text-4xl mb-4">🎬</p>
          <p className="font-bold text-gray-900 mb-2">영상 자료 준비 중</p>
          <p className="text-sm text-gray-500">피닉타 페스타 공식 영상이 곧 업로드될 예정입니다.</p>
        </div>
      </div>
    </>
  );
}
