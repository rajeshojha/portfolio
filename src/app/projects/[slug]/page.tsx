import { caseStudies } from "@/data/case-studies";
import { notFound } from "next/navigation";
import CaseStudyContent from "./CaseStudyContent";

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies[slug];

  if (!study) {
    notFound();
  }

  return <CaseStudyContent study={study} />;
}
