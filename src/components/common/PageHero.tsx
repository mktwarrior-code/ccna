import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  bgImage?: string;
}

export function PageHero({ title, subtitle, description, badge, bgImage }: PageHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-32 pb-16 overflow-hidden">
      {/* Background image */}
      {bgImage ? (
        <div className="absolute inset-0">
          <Image
            src={bgImage}
            alt=""
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-gray-900/80" />
        </div>
      ) : (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-amber-500 blur-3xl" />
          <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-amber-700 blur-3xl" />
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <span className="inline-block px-3 py-1 text-xs font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full mb-4">
            {badge}
          </span>
        )}
        {subtitle && (
          <p className="text-amber-400 text-sm font-medium mb-2 uppercase tracking-widest">
            {subtitle}
          </p>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
