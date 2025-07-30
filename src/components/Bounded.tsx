import { cn } from "@/lib/utils";
import React from "react";

type BoundedPops = {
  as?: React.ElementType;
  classname?: string;
  children: React.ReactNode;
};

const Bounded = React.forwardRef<HTMLDivElement, BoundedPops>(
  ({ as: Comp = "section", classname, children, ...restProps }, ref) => {
    return (
      <Comp
        ref={ref}
        className={cn("px-4 py-10 md:px-8 md:py-12 lg:px-12", classname)}
        {...restProps}
      >
        <div className="mx-auto w-full">{children}</div>
      </Comp>
    );
  }
);

Bounded.displayName = "Bounded";

export default Bounded;
