import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import ContentList from "./ContentList";
import Heading from "@/components/Heading";
import { JSX } from "react";
/**
 * Props for `ProjectIndex`.
 */
export type ProjectIndexProps = SliceComponentProps<Content.ContentIndexSlice>;

/**
 * Component for "ProjectIndex" Slices.
 */
const ProjectIndex = async ({
  slice,
}: ProjectIndexProps): Promise<JSX.Element> => {
  const client = createClient();
  const projects = await client.getAllByType("projects");

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-4 py-10 md:px-6 md:py-14 lg:py-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <Heading size="xl" className="mb-8">
          {slice.primary.heading}
        </Heading>
        {isFilled.richText(slice.primary.description) && (
          <div className="prose prose-xl prose-invert mb-10">
            <PrismicRichText field={slice.primary.description} />
          </div>
        )}
        <ContentList
          items={projects}
          contentType={slice.primary.content_type}
          viewMoreText={slice.primary.view_more_text}
          fallbackItemImage={slice.primary.fallback}
        />
      </div>
    </section>
  );
};

export default ProjectIndex;
