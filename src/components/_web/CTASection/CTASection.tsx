import React from "react";
import { Column, Grid } from "../../..";
import { prefix } from "../../../settings";

export type CTASectionProps = {
  /**
   * CTASection Headline
   */
  headline?: string;

  /**
   * CTASection LinkTitle
   */
  cta?: React.ReactNode;
};

export const CTASection = React.forwardRef(function CTASection(
  {
    headline = "Let's create the next big innovation for the world of tomorrow.",
    cta = "Together."
  }: CTASectionProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  return (
    <section className={`${prefix}--ctasection`} ref={ref}>
      <Grid narrow className={`${prefix}--ctasection-grid`}>
        <Column
          sm={4}
          md={6}
          mdOffset={1}
          lg={12}
          lgOffset={2}
          xlg={12}
          xlgOffset={2}
          className={`${prefix}--ctasection-column`}
        >
          <h5 className={`${prefix}--ctasection-headline`}>
            {headline} <span>{cta}</span>
          </h5>
        </Column>
      </Grid>
    </section>
  );
});
