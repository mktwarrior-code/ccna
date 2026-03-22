import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 bg-amber-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
          역사적인 문화사업에 동참해 주십시오
        </h2>
        <p className="text-amber-100 text-lg mb-2">
          대한민국 국민이면 누구나 회원이 될 수 있습니다.
        </p>
        <p className="text-amber-200 text-sm mb-10">
          "머언 훗날 우리 후손들이 '우리 증조 할아버지, 고조 할머니가 그 때 바로 그 일을 만드신 분이야.'
          라고 이야기 할 날이 올 것입니다."
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/membership/apply"
            className="px-8 py-4 bg-white text-amber-600 font-bold rounded-xl hover:bg-amber-50 transition-all hover:scale-105 shadow-lg text-sm sm:text-base"
          >
            지금 회원가입하기 →
          </Link>
          <Link
            href="/membership/benefits"
            className="px-8 py-4 bg-amber-600 text-white font-semibold rounded-xl hover:bg-amber-700 border border-amber-400 transition-all text-sm sm:text-base"
          >
            회원 혜택 알아보기
          </Link>
        </div>
      </div>
    </section>
  );
}
