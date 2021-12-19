import React from "react";
import { Grid, Column } from "../../..";
import { idfy } from "../../../helpers/arrayUtilities";
import { prefix } from "../../../settings";

export type WordItem = {
  /**
   * WordItem Href
   */
  href?: string;

  /**
   * WordItem Label
   */
  label: string;

  /** WordItem OnClick Action (acts as button) */
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
};

export type WordBandProps = {
  /**
   * WordBand ClassName
   */
  className?: string;

  /**
   * WordBand Words
   */
  words?: WordItem[];
};

const WordBand = (
  {
    words = [
      { label: "Innovation", href: "#" },
      { label: "Design", href: "#" },
      { label: "Strategy", href: "#" },
      { label: "User Experience", href: "#" },
      { label: "User Interface", href: "#" },
      { label: "Mobile Applications", href: "#" },
      { label: "Business Applications", href: "#" },
      { label: "Interaction Design", href: "#" },
      { label: "Innovation", href: "#" },
      { label: "Design", href: "#" },
      { label: "Strategy", href: "#" },
      { label: "User Experience", href: "#" },
      { label: "User Interface", href: "#" },
      { label: "Mobile Applications", href: "#" },
      { label: "Business Applications", href: "#" },
      { label: "Interaction Design", href: "#" }
    ]
  }: WordBandProps,
  ref: React.ForwardedRef<HTMLElement>
) => {
  const indexedWordItems = idfy(words);

  return (
    <section className={`${prefix}--wordband`} ref={ref}>
      <Grid narrow className={`${prefix}--wordband-grid`}>
        <Column
          sm={4}
          md={8}
          lg={16}
          xlg={16}
          className={`${prefix}--wordband-column`}
        >
          <p className={`${prefix}--wordband-words`}>
            {indexedWordItems?.map((word) => {
              return <span>{word.label}&nbsp;/&nbsp;</span>;
            })}
          </p>
        </Column>
      </Grid>
    </section>
  );
};

export default React.forwardRef(WordBand);
