import { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/common/PageHero";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export const metadata: Metadata = { title: "의장 환영사" };

export default function GreetingPage() {
  return (
    <>
      <PageHero title="의장 환영사" subtitle="Greeting" bgImage="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=80" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb
          items={[
            { label: "위원회 소개", href: "/about" },
            { label: "의장 환영사" },
          ]}
        />

        <div className="mt-8 grid md:grid-cols-3 gap-10">
          {/* Profile sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
                  alt="신동이 의장"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <p className="font-bold text-gray-900 text-lg">신동이</p>
                <p className="text-sm text-amber-600 font-medium">문화민족선진화위원회</p>
                <p className="text-sm text-gray-500">의장</p>
              </div>
            </div>
          </div>

          {/* Main greeting text */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-black text-gray-900 mb-6">
              문화민족선진화위원회에 오신 것을 환영합니다
            </h2>

            <div className="prose prose-gray max-w-none space-y-5 text-gray-700 leading-relaxed">
              <p>
                우리는 민족중흥의 역사적 사명을 띠고 이 땅에 태어났는데, 조상의 빛난 얼을 오늘에
                되살려야 하는데, 안으로 자주독립의 자세를 확립하고 밖으로 인류공영에 이바지 해야
                하는데 우리는 도대체 무엇을 했을까요.
              </p>
              <p>
                만약에 인생을 살면서 목숨을 걸어도 좋을 만큼 보람된 일을 할 수만 있다면!
                정치, 경제, 사회, 문화를 총망라하여 우리가 집단지성으로 하나로 뭉칠 수 있는
                가장 좋은 것이 바로 <strong className="text-gray-900">문화</strong>입니다.
              </p>

              {/* Highlight quote */}
              <blockquote className="my-8 p-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl">
                <p className="text-lg font-medium text-gray-800 leading-relaxed">
                  "축구경기장에서 일본과 한국이 축구를 하는 데, 한국이 골을 넣으면 다 같이 일어나서
                  박수를 치는데, 바로 옆에 아주 나쁜 사람, 철천지 원수, 도둑, 사기꾼이 있다고 칩시다.
                  누가 시키지도 않았는데 동시에 일어나 다같이 함성을 지르며 박수갈채를 보냅니다.
                  바로 하나가 되는 순간이고 이것이 바로 문화의 힘이며,{" "}
                  <span className="text-amber-700 font-bold">그 힘은 사상과 이념을 초월합니다.</span>"
                </p>
              </blockquote>

              <p>
                문화민족선진화위원회의 숙원사업은 우리가 올림픽, 월드컵 다음으로 지구촌 세번째
                축제를 만들어 이를 안착시켜서 길이길이 후손에게 물려주는 것입니다.
              </p>
              <p>
                머언 훗날 우리 후손들이 <em>'우리 증조 할아버지, 고조 할머니가 그 때 바로 그
                일을 만드신 분이야.'</em> 라고 이야기 할 날이 올 것입니다.
              </p>
              <p>
                이 역사적인 문화사업에 동참해 주실 것을 간곡히 부탁드립니다. 감사합니다.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-10 pt-8 border-t border-gray-100 text-right">
              <p className="text-2xl font-black text-amber-600">
                "대한민국이 최고의 문화강국이 될 것이다."
              </p>
              <p className="mt-3 text-gray-600 font-medium">
                문화민족선진화위원회 의장 <strong className="text-gray-900">신동이</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
