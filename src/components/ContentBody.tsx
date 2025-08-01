import { SliceZone } from "@prismicio/react";
import { Content } from "@prismicio/client";

import { components } from "@/slices";
import Heading from "@/components/Heading";
import { formatDate } from "@/lib/formatDate";

export default function ContentBody({
  page,
}: {
  page: Content.ProjectsDocument;
}) {
  const formattedDate = formatDate(page.data.date);
  return (
    <article className="px-4 py-10 md:px-6 md:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="rounded-2xl border-2 border-slate-800 bg-slate-900 px-4 py-10 md:px-8 md:py-20">
          <Heading as="h1">{page.data.title}</Heading>
          <div className="flex gap-4 text-yellow-400">
            {page.tags.map((tag, index) => (
              <span key={index} className="text-xl font-bold">
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-8 border-b border-slate-600 text-xl font-medium text-slate-300">
            {formattedDate}
          </p>
          <div className="prose prose-lg prose-invert mt-12 w-full max-w-none md:mt-20">
            <SliceZone slices={page.data.slices} components={components} />
          </div>
        </div>
      </div>
    </article>
  );
}
