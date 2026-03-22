import { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export const metadata: Metadata = { title: "가입 신청" };

export default function ApplyPage() {
  return (
    <>
      <PageHero title="가입 신청" subtitle="Apply for Membership" bgImage="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80" />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb items={[{ label: "회원가입", href: "/membership" }, { label: "가입 신청" }]} />

        <div className="mt-8 bg-white border border-gray-100 rounded-2xl shadow-sm p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">회원 가입 신청서</h2>

          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                성명 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="홍길동"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                연락처 <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="010-0000-0000"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                이메일 <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="example@email.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                주소 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="시/도, 시/군/구"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              />
            </div>

            {/* Affiliation */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                소속 (선택)
              </label>
              <input
                type="text"
                placeholder="단체명 또는 직장명"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              />
            </div>

            {/* Membership tier */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                가입 희망 등급 <span className="text-red-500">*</span>
              </label>
              <select
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white"
              >
                <option value="">선택해주세요</option>
                <option value="member">위원 (멤버십 혜택)</option>
                <option value="delegate">대의원 (지회 활동)</option>
                <option value="executive">임원 (운영진)</option>
              </select>
            </div>

            {/* Interests */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                관심 분야 (복수 선택 가능)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {["전통놀이", "문화공연", "교육사업", "국제교류", "행사운영", "홍보/미디어"].map((interest) => (
                  <label key={interest} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded accent-amber-500" />
                    <span className="text-sm text-gray-700">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Agreement */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" required className="mt-0.5 rounded accent-amber-500" />
                <span className="text-sm text-gray-600">
                  개인정보 수집 및 이용에 동의합니다. 수집된 정보는 회원 관리 및 위원회 활동 안내 목적으로만 사용됩니다.
                  <span className="text-red-500"> *</span>
                </span>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-xl transition-all text-sm mt-2"
            >
              가입 신청하기
            </button>
          </form>

          <p className="mt-5 text-xs text-gray-400 text-center">
            신청 후 담당자가 확인하여 연락드립니다. 문의: info@ccna.or.kr
          </p>
        </div>
      </div>
    </>
  );
}
