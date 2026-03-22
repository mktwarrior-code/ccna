import Image from "next/image";
import Link from "next/link";

export function PnixtaPreview() {
  return (
    <section className="py-20 lg:py-28 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full mb-4">
              PNIXTA = Phoenix + Star
            </span>
            <h2 className="text-3xl lg:text-5xl font-black leading-tight mb-6">
              피닉타 페스타<br />
              <span className="text-amber-400">WORLD CULPORTS FESTA</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              인류의 전통놀이를 통해 문명의 다양성과 연대를 잇는,
              지구촌 세 번째 초대형 축제입니다. 관람문화가 아닌 마당놀이처럼
              함께 어울려 즐기는 축제로 발전시켜 길이길이 후손에게 물려줍니다.
            </p>

            {/* 3 keywords */}
            <div className="flex gap-3 flex-wrap mb-8">
              {["전통성", "대중성", "창의성"].map((kw) => (
                <span
                  key={kw}
                  className="px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-sm font-semibold"
                >
                  {kw}
                </span>
              ))}
            </div>

            {/* Festival rankings */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { rank: "1st", name: "올림픽", flag: "🇬🇷" },
                { rank: "2nd", name: "월드컵", flag: "🏆" },
                { rank: "3rd", name: "피닉타", flag: "🇰🇷", highlight: true },
              ].map((f) => (
                <div
                  key={f.name}
                  className={`text-center p-3 rounded-xl border ${
                    f.highlight
                      ? "bg-amber-500/20 border-amber-500/40"
                      : "bg-white/5 border-white/10"
                  }`}
                >
                  <div className="text-2xl mb-1">{f.flag}</div>
                  <div className="text-xs text-gray-400">{f.rank}</div>
                  <div
                    className={`text-sm font-bold ${
                      f.highlight ? "text-amber-400" : "text-white"
                    }`}
                  >
                    {f.name}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/pnixta"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-white font-semibold rounded-xl transition-all text-sm"
            >
              피닉타 페스타 전체 보기 →
            </Link>
          </div>

          {/* Right: Poster + Unsplash festival image */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1538485399081-7191377e8241?w=600&q=80"
                alt="전통놀이 축제"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/img/pnixta-poster.png"
                  alt="PNIXTA 공식 포스터"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=600&q=80"
                  alt="한국 전통문화"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
