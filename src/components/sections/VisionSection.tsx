import Image from "next/image";

export function VisionSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Quote & message */}
          <div>
            <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest">
              의장 신동이
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
              "바로 하나가 되는 순간,<br />
              이것이 바로{" "}
              <span className="text-amber-500">문화의 힘</span>"
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              축구경기장에서 한국이 골을 넣으면 누가 시키지도 않았는데
              다 같이 일어나 박수갈채를 보냅니다. 그 힘은 사상과 이념을 초월합니다.
              문화민족선진화위원회는 이 문화의 힘으로 지구촌 세 번째 축제를 만들어
              후손에게 물려줍니다.
            </p>
            <blockquote className="mt-8 pl-5 border-l-4 border-amber-400">
              <p className="text-2xl font-bold text-gray-800">
                "대한민국이 최고의 문화강국이 될 것이다."
              </p>
              <cite className="text-sm text-gray-500 mt-2 block not-italic">
                — 신동이, 문화민족선진화위원회 의장
              </cite>
            </blockquote>

            {/* Homo Ludens keyword */}
            <div className="mt-10 p-6 bg-gray-50 rounded-2xl">
              <p className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-2">
                시대의 키워드
              </p>
              <p className="text-xl font-bold text-gray-900">
                호모 루덴스 (Homo Ludens)
              </p>
              <p className="text-base text-gray-500 mt-2">
                수렵시대 → 농경시대 → 산업시대 → 지식시대 →{" "}
                <strong className="text-gray-800">문화시대(현재)</strong>
              </p>
            </div>
          </div>

          {/* Right: K-Power diagram */}
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/img/k-power-diagram.png"
                alt="K파워 한파워 개념도"
                width={520}
                height={520}
                className="object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
