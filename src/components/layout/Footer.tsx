import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* 조직 정보 */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/img/ccna-logo.png"
                alt="로고"
                width={36}
                height={36}
                className="rounded-full"
              />
              <span className="text-white font-bold text-lg">문화민족선진화위원회</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              문화의 힘으로 지구촌 3대 축제를 만드는<br />
              대한민국 문화강국 실현 위원회
            </p>
            <p className="mt-4 text-xs text-amber-500 font-medium italic">
              "대한민국이 최고의 문화강국이 될 것이다."
            </p>
          </div>

          {/* 주요 메뉴 */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">
              바로가기
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/about/greeting", label: "의장 환영사" },
                { href: "/about/vision", label: "비전 및 미션" },
                { href: "/pnixta", label: "피닉타 페스타" },
                { href: "/organization/chart", label: "조직도" },
                { href: "/membership/apply", label: "회원가입" },
                { href: "/news/notice", label: "공지사항" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">
              연락처
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <span className="text-gray-300">이메일</span>
                <br />
                <a
                  href="mailto:info@ccna.or.kr"
                  className="hover:text-amber-400 transition-colors"
                >
                  info@ccna.or.kr
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact/inquiry"
                className="inline-block px-4 py-2 border border-gray-600 hover:border-amber-500 hover:text-amber-400 rounded-lg text-sm transition-colors"
              >
                문의하기 →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} 문화민족선진화위원회(PNIXTA). All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/contact/inquiry" className="hover:text-gray-300 transition-colors">
              개인정보처리방침
            </Link>
            <Link href="/contact/inquiry" className="hover:text-gray-300 transition-colors">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
