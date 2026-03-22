import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image - Korean traditional festival from Unsplash */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=80"
          alt="한국 전통 문화 축제"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight mb-6">
          지구촌{" "}
          <span className="text-amber-400">3대 축제</span>를<br />
          꿈꾸는 위원회
        </h1>

        {/* Sub heading */}
        <p className="text-xl sm:text-2xl text-gray-200 font-light mb-4">
          문화민족선진화위원회
        </p>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
          전통놀이와 문화의 힘으로 올림픽·월드컵과 어깨를 나란히 하는<br className="hidden sm:block" />
          지구촌 세 번째 초대형 축제, <strong className="text-amber-400">피닉타 페스타</strong>를 만들어 갑니다.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/pnixta"
            className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-white font-semibold rounded-xl transition-all hover:scale-105 text-sm sm:text-base shadow-lg shadow-amber-500/30"
          >
            피닉타 페스타 알아보기 →
          </Link>
          <Link
            href="/membership/apply"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 transition-all hover:scale-105 text-sm sm:text-base"
          >
            회원가입
          </Link>
        </div>

      </div>

    </section>
  );
}
