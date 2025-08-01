import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

/**
 * Props for `Experience`.
 */
export type ExperienceProps = SliceComponentProps<Content.ExperienceSlice>;

/**
 * Component for "Experience" Slices.
 */
const Experience = ({ slice }: ExperienceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-4 py-10 md:px-6 md:py-14 lg:py-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <Heading as="h2" size="lg">
          {slice.primary.heading}
        </Heading>
        {slice.primary.event.map((event, index) => (
          <div
            key={index}
            className="ml-6 mt-6 max-w-3xl md:ml-12 border-l-2 border-slate-700 pl-4"
          >
            {/* Institution */}
            <Heading as="h3" size="md" className="text-slate-100">
              {event.institution}
            </Heading>

            {/* Title and Time Period */}
            <div className="mt-1 flex flex-col gap-1 text-slate-400">
              <span className="text-lg font-medium">{event.title}</span>
              <span className="text-sm font-normal italic">
                {event.time_period}
              </span>
            </div>

            {/* Description */}
            <div className="prose prose-invert prose-slate mt-4">
              <PrismicRichText field={event.description} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
