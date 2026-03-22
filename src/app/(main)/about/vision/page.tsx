import { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export const metadata: Metadata = { title: "비전 및 미션" };

export default function VisionPage() {
  return (
    <>
      <PageHero title="비전 및 미션" subtitle="Vision & Mission" bgImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb
          items={[
            { label: "위원회 소개", href: "/about" },
            { label: "비전 및 미션" },
          ]}
        />

        {/* ───── 문화는 곧 경제입니다 ───── */}
        <section className="mt-10 text-center py-16 px-6 sm:px-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl text-white">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Our Vision
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
            문화는 곧&nbsp;
            <span className="text-amber-400">경제</span>입니다.
          </h2>
          <p className="mt-8 text-gray-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            문화를 통해 경제를 견인하는 새로운 모델을 지향합니다.
            우리나라에서 출발하여 세계로 확장되는 이 길 위에서,
            한국의 전통놀이와 스포츠가 세계인의 문화와 어우러져
            인류에게 풍요와 즐거움을 전하는 축제를 만들어갑니다.
          </p>
        </section>

        {/* ───── 세계 3대 지구촌 축제를 향한 출발점 ───── */}
        <section className="mt-16">
          <SectionHeading emoji="🪩" title="세계 3대 지구촌 축제를 향한 출발점" />
          <ul className="mt-6 space-y-3">
            {[
              "제기차기, 윷놀이, 활쏘기, 태견, 씨름 같은 한국 민속놀이와 스포츠",
              "전통스포츠협회와의 연계",
              "다국적 전통놀이협회와 연계",
              "폐교를 활용한 야시장 문화 육성",
              "야외공연장 무료공연 문화인 육성",
              "교실 단위 자격증",
              "12띠 가면 놀이 · 연극",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ───── 한국스포츠경영관리협회 ───── */}
        <section className="mt-16">
          <SectionHeading emoji="🪩" title="한국스포츠경영관리협회" tag="공동협력사" />
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { num: "1", text: "세계 한글 지도사 표경식 총재" },
              { num: "2", text: "전통 놀이 · 스포츠" },
              { num: "3", text: "안전 · 놀이 · 자격증" },
              { num: "4", text: "각종 지도자 자격증" },
              { num: "5", text: "아트 자격증" },
              { num: "6", text: "프리스타일 축구 자격증" },
            ].map((item) => (
              <div
                key={item.num}
                className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl shadow-sm"
              >
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center text-sm">
                  {item.num}
                </span>
                <span className="text-gray-800 font-medium text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ───── 전통 야시장 안착과 복합 플랫폼 ───── */}
        <section className="mt-16">
          <SectionHeading emoji="🪩" title="전통 야시장 안착과 복합 플랫폼" />
          <ul className="mt-6 space-y-3">
            {[
              "전통 놀이와 전통 스포츠를 활용한 교실 운영",
              "지역 아침 · 저녁 운동 (태견, 체조, 춤 등)",
              "동계 · 하계 · 심신 · 인성교육",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 p-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl">
            <p className="text-gray-800 leading-relaxed">
              이 모든 요소가 결합하여 그 지역에 맞게 도입되는{" "}
              <strong className="text-amber-700">&ldquo;전통 야시장 축제관&rdquo;</strong>이
              단순한 행사에 머물지 않고, 경제 · 문화 · 교육이 통합된 복합 플랫폼으로
              발전합니다.
            </p>
          </div>
        </section>

        {/* ───── 공동체 복지와 지속 가능한 수익 구조 ───── */}
        <section className="mt-16">
          <SectionHeading emoji="🪩" title="공동체 복지와 지속 가능한 수익 구조" />
          <ul className="mt-6 space-y-3">
            {[
              "지역 특산품과 입점 상품의 홍보 · 판매",
              "먹거리 부스, 전통놀이 체험, 자율 공연을 통한 관광 활성화",
              "자격증 과정을 통한 2차 · 3차 수익모델 체계화",
              "태전, 태교, 예비부부, 다문화교육, 단계별 아이돌봄교실",
              "협회 · 지역사회 · 참여자가 함께 성장하는 구조 확립",
              "주관 (유)모바세유니온과 입점계약, 수출, 납품, 답례품, 멤버혜택",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 p-6 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-2xl">
            <p className="text-gray-800 leading-relaxed">
              축제가 지역경제를 살리고 참여자에게 직접적 수익과 기회를 제공하는{" "}
              <strong className="text-emerald-700">선순환 구조</strong>를 만들어냅니다.
            </p>
          </div>
        </section>

        {/* ───── 행사를 넘어서는 진정한 전통문화 안착 ───── */}
        <section className="mt-16">
          <SectionHeading emoji="🪩" title="행사를 넘어서는 진정한 전통문화 안착" />
          <ul className="mt-6 space-y-3">
            {[
              "지역주민 참여 야시장과 놀이 · 문화 안착",
              "우리가 만드는 축제는 단순히 즐거움을 넘어 세계인이 하나되는 지구촌 공동체 의식입니다.",
              "각 나라의 전통과 우리의 전통놀이가 함께 살아 움직이며 행복의 장을 만듭니다.",
              "문화적 가치와 경제적 성과를 동시에 담아냅니다.",
              "글로벌 문화경제 속 한국의 전통이 세계와 연결되는 일입니다.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ───── 세계로 향하는 구체적 비전 — 피닉타 축제 ───── */}
        <section className="mt-16">
          <SectionHeading emoji="🪩" title="세계로 향하는 지구촌 3대 축제 구체적 비전" tag="피닉타 축제" />
          <div className="mt-6 space-y-5 text-gray-700 leading-relaxed">
            <p>
              문화민족선진화위원회는 국내 협회 운영을 넘어서, 세계 각국의 단체와
              단순한 MOU를 넘어선{" "}
              <strong className="text-amber-700">MOA(실질 협력 체계)</strong>를
              구축합니다.
            </p>
            <p>
              해외 지부 안착을 통해 각 나라의 전통성을 중시하며
              대한민국의 전통성도 함께하는 장을 만들어갑니다.
            </p>
            <p>
              이를 통해 책임과 권한이 보장되는 협력 모델을 실현하고,
              한국에서 시작된 전통놀이 축제를{" "}
              <strong className="text-amber-700">세계대회 &lsquo;피닉타 축제&rsquo;</strong>
              라는 이름으로 지구촌이 주목하는 무대에 올리며
              문화 종주국으로 되어갑니다.
            </p>
          </div>
        </section>

        {/* ───── 실행 계획 ───── */}
        <section className="mt-16">
          <SectionHeading emoji="🪩" title="실행 계획" />
          <div className="mt-6 p-6 sm:p-8 bg-gray-900 text-white rounded-2xl">
            <h4 className="text-amber-400 font-bold mb-4 text-lg">1단계 — 조직 구축</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {["발대식", "문화민족선진화위원회 등록", "4본부 발대식", "4개 본부 등록 (문화체육관광부 소관 사단법인)"].map(
                (step) => (
                  <span
                    key={step}
                    className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300"
                  >
                    {step}
                  </span>
                )
              )}
            </div>
            <p className="text-gray-300 leading-relaxed">
              오늘의 문화민족선진화위원회 발대식은 단순한 행사 출발이 아니라,
              세계 3대 지구촌 축제로 도약하는 실질적 출발점입니다.
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed">
              문화와 복지의 물결을 함께 키워내어, 전통과 경제가 동시에
              살아 숨 쉬는 새로운 길을 열어갑니다.
            </p>
          </div>
        </section>

        {/* ───── 숙원 사업 — 피닉타 축제 ───── */}
        <section className="mt-16 mb-8">
          <div className="text-center mb-8">
            <p className="text-sm text-amber-600 font-semibold tracking-widest uppercase mb-2">
              문화민족선진화위원회 숙원 사업
            </p>
            <h3 className="text-3xl sm:text-4xl font-black text-gray-900">
              피닉타 축제
            </h3>
          </div>

          <div className="p-6 sm:p-10 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-3xl">
            <p className="text-gray-800 leading-loose text-base sm:text-lg">
              피닉타 축제를 올림픽, 월드컵 다음으로 지구촌 3번째 축제가 되기 위해서는
              나라별 전통과 문화가 담긴 놀이 또는 스포츠를 선정하고, 현대화를 통한
              대중적 확산과 창의적 아이디어를 접목하여 경쟁하는 스포츠가 아닌
              세계인과 함께 누리는 새로운 놀이축제로, 관람문화가 아닌 마당놀이처럼
              함께 어울려 즐기는 축제로 발전시켜 길이길이 후손에게 물려주어야 합니다.
            </p>
            <p className="mt-6 text-gray-800 leading-loose text-base sm:text-lg">
              문화민족선진화위원회에서 해마다 우리가 선정
              (태견, 국궁, 씨름, 윷놀이, 연날리기, 잣치기 등)하여
              보존에 머무르지 않고 현대화와 대중화를 통해
              창의적이며 세계적인 스포츠로 변화하고 발전하며
              지속하는 것이 목표입니다.
            </p>
            <p className="mt-8 text-center text-xl sm:text-2xl font-black text-amber-700">
              오랜 시간 이어져온 변치 않는 가치를<br className="sm:hidden" />
              후대에 전하고 세계에 알리자!
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

/* ── 섹션 제목 공통 컴포넌트 ── */
function SectionHeading({
  emoji,
  title,
  tag,
}: {
  emoji: string;
  title: string;
  tag?: string;
}) {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className="text-2xl">{emoji}</span>
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{title}</h3>
      {tag && (
        <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
          {tag}
        </span>
      )}
    </div>
  );
}
