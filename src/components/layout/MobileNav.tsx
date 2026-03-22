"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import type { NavItem } from "@/types";

export function MobileNav() {
  const pathname = usePathname();
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggle = (id: string) =>
    setOpenItem((prev) => (prev === id ? null : id));

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-100 flex items-center gap-3">
        <Image
          src="/img/ccna-logo.png"
          alt="로고"
          width={32}
          height={32}
          className="rounded-full"
        />
        <div>
          <span className="font-bold text-base text-gray-900">문화민족선진화위원회</span>
        </div>
      </div>

      {/* Nav items */}
      <nav className="flex-1 overflow-y-auto py-4">
        {NAV_ITEMS.map((item) => (
          <MobileNavItem
            key={item.id}
            item={item}
            pathname={pathname}
            isOpen={openItem === item.id}
            onToggle={() => toggle(item.id)}
          />
        ))}
      </nav>

      {/* Bottom CTA */}
      <div className="px-6 py-4 border-t border-gray-100">
        <Link
          href="/membership/apply"
          className="block w-full text-center py-3 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-lg transition-colors"
        >
          회원가입
        </Link>
      </div>
    </div>
  );
}

function MobileNavItem({
  item,
  pathname,
  isOpen,
  onToggle,
}: {
  item: NavItem;
  pathname: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const isActive =
    pathname === item.href || pathname.startsWith(item.href + "/");
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div>
      <div className="flex items-center px-6">
        <Link
          href={item.href}
          className={`flex-1 py-3 text-sm font-medium ${
            isActive ? "text-amber-600" : "text-gray-800"
          }`}
        >
          {item.label}
        </Link>
        {hasChildren && (
          <button
            onClick={onToggle}
            className="p-1 text-gray-400"
            aria-label={isOpen ? "닫기" : "열기"}
          >
            <ChevronDown
              className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </button>
        )}
      </div>

      {hasChildren && isOpen && (
        <div className="bg-gray-50 border-y border-gray-100">
          {item.children!.map((child) => (
            <Link
              key={child.id}
              href={child.href}
              className={`block px-10 py-2.5 text-sm ${
                pathname === child.href
                  ? "text-amber-600 font-medium"
                  : "text-gray-600 hover:text-amber-600"
              }`}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
