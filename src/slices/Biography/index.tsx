import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";

import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

/**
 * Props for `Biography`.
 */
export type BiographyProps = SliceComponentProps<Content.BiographySlice>;

/**
 * Component for "Biography" Slices.
 */
const Biography = ({ slice }: BiographyProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-4 py-10 md:px-6 md:py-14 lg:py-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
          <Heading size="lg" className="col-start-1 text-nowrap">
            {slice.primary.heading}
          </Heading>

          <div className="prose prose-xl prose-slate prose-invert col-start-1">
            <PrismicRichText field={slice.primary.description} />
          </div>
          <Button
            linkField={slice.primary.button_link}
            label={slice.primary.button_text}
          />
          <Avatar
            image={slice.primary.avatar}
            className="row-start-1 max-w-sm mx-auto md:col-start-2 md:row-end-3"
          />
        </div>
      </div>
    </section>
  );
};

export default Biography;
