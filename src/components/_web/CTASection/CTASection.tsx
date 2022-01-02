import { IconArrowNarrowRight } from "@tabler/icons";
import React from "react";
import { Button, Column, Grid, TextInput } from "../../..";
import { prefix } from "../../../settings";

export type CTASectionProps = {
  /**
   * CTASection Headline
   */
  headline?: string;

  /**
   * CTASection LinkTitle
   */
  linkTitle?: string;

  /**
   * CTASection LinkHref
   */
  linkHref?: string;
};

export const CTASection = React.forwardRef(function CTASection(
  {
    headline = "Let's create the next big innovation for the world of tomorrow.",
    linkHref = "#",
    linkTitle = "Together."
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
            {headline}{" "}
            <a href={linkHref}>
              {linkTitle}
              <IconArrowNarrowRight />
            </a>
          </h5>
          <div className={`${prefix}--ctasection-input__container`}>
            <TextInput
              className={`${prefix}--ctasection-input`}
              placeholder="Type in your email adress"
            />
            <Button className={`${prefix}--ctasection-input__button`}>
              Send
            </Button>
          </div>
        </Column>
      </Grid>
    </section>
  );
});
