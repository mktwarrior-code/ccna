import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/common/PageHero";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { BUSINESS_AREAS } from "@/data/business";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const area = BUSINESS_AREAS.find((a) => a.id === id);
  return { title: area?.title ?? "사업 영역" };
}

export async function generateStaticParams() {
  return BUSINESS_AREAS.map((area) => ({ id: area.id }));
}

export default async function BusinessDetailPage({ params }: Props) {
  const { id } = await params;
  const area = BUSINESS_AREAS.find((a) => a.id === id);
  if (!area) notFound();

  return (
    <>
      <PageHero
        title={area.title}
        subtitle={area.titleEn}
        description={area.description}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb
          items={[
            { label: "사업 영역", href: "/business" },
            { label: area.title },
          ]}
        />

        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {area.subAreas.map((sub, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-100 text-amber-600 text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{sub.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{sub.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
