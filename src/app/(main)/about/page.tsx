import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/common/PageHero";

export const metadata: Metadata = { title: "위원회 소개" };

const SUB_MENUS = [
  { href: "/about/greeting", title: "의장 환영사", desc: "신동이 의장의 창립 메시지" },
  { href: "/about/vision", title: "비전 및 미션", desc: "위원회의 설립 비전과 핵심 가치" },
  { href: "/about/issue", title: "위원회 ISSUE", desc: "호모 루덴스 시대와 문화영토" },
  { href: "/about/roadmap", title: "전략 로드맵", desc: "단계별 국내외 확장 전략" },
  { href: "/about/history", title: "연혁", desc: "위원회 주요 활동 기록" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="위원회 소개"
        subtitle="About"
        description="문화민족선진화위원회의 설립 배경, 비전, 그리고 전략을 소개합니다."
        bgImage="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&q=80"
      />
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo symbol with text */}
        <div className="flex flex-col items-center mb-12">
          <Image
            src="/img/ccna-logo.png"
            alt="CCNA 로고"
            width={200}
            height={200}
            className="object-contain w-32 sm:w-40 lg:w-48"
          />
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">
            CCNA
          </h2>
          <p className="mt-2 text-sm sm:text-base lg:text-lg text-gray-500 font-medium">
            Committee for Cultural and National Advancement
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {SUB_MENUS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group p-6 bg-white border border-gray-100 rounded-2xl hover:border-amber-200 hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-600 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
              <span className="mt-4 block text-amber-500 text-sm font-medium">
                자세히 보기 →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
