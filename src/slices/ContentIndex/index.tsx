import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import ContentList from "./ContentList";
import Bounded from "@/components/Bounded";
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
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
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
    </Bounded>
  );
};

export default ProjectIndex;
