import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/common/PageHero";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export const metadata: Metadata = { title: "가입 절차" };

const STEPS = [
  { step: 1, icon: "📝", title: "가입 신청", desc: "온라인 신청서 작성 (이름, 연락처, 이메일, 가입 등급 선택)" },
  { step: 2, icon: "💳", title: "회비 납부", desc: "지정 계좌로 회비 납부 후 입금 확인 연락" },
  { step: 3, icon: "✅", title: "회원 확정", desc: "담당자 확인 후 회원 자격 부여 및 멤버십 카드 발급" },
  { step: 4, icon: "🎪", title: "축제 참여", desc: "국내외 피닉타 페스타 및 위원회 각종 행사 참여" },
];

const FAQ = [
  { q: "누가 가입할 수 있나요?", a: "대한민국 국민이면 누구나 가입 신청이 가능합니다." },
  { q: "가입 후 혜택은 언제부터 받을 수 있나요?", a: "회비 납부 확인 후 회원 자격이 부여되어 즉시 혜택을 받을 수 있습니다." },
  { q: "회원 등급을 변경할 수 있나요?", a: "가입 후 담당 지회에 문의하시면 등급 변경이 가능합니다." },
  { q: "해외 거주자도 가입이 가능한가요?", a: "재외동포 및 해외 거주 한국인도 가입 가능합니다. 국제위원회 소속으로 활동하게 됩니다." },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero title="가입 절차" subtitle="Membership Process" bgImage="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ label: "회원가입", href: "/membership" }, { label: "가입 절차" }]} />

        {/* Steps */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map((s, i) => (
            <div key={s.step} className="relative flex flex-col items-center text-center p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
              {i < STEPS.length - 1 && (
                <div className="absolute top-10 -right-2 hidden lg:block text-gray-300 text-xl font-bold z-10">→</div>
              )}
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-2xl mb-3">
                {s.icon}
              </div>
              <div className="w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-bold flex items-center justify-center mb-3">
                {s.step}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/membership/apply"
            className="inline-block px-8 py-4 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-xl transition-all text-sm"
          >
            지금 가입 신청하기 →
          </Link>
        </div>

        {/* FAQ */}
        <div className="mt-14">
          <h3 className="font-bold text-gray-900 mb-5 text-xl">자주 묻는 질문</h3>
          <div className="space-y-4">
            {FAQ.map((item) => (
              <div key={item.q} className="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="font-bold text-gray-900 mb-2">Q. {item.q}</p>
                <p className="text-sm text-gray-600">A. {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
