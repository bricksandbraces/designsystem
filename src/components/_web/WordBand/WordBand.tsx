import React from "react";
import Ticker from "react-ticker";
import { ThemeProvider } from "../../..";
import { idfy } from "../../../helpers/arrayUtilities";
import { prefix } from "../../../settings";

export type WordItem = {
  /**
   * WordItem Label
   */
  label: string;
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

export const WordBand = React.forwardRef(function WordBand(
  { words = [{ label: "Innovation" }, { label: "Design" }] }: WordBandProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  const indexedWordItems = idfy(words);
  return (
    <ThemeProvider>
      <ThemeProvider
        theme={{
          light: { "color-app-05": "#EEE6FF", "color-app-01": "#5400FF" },
          dark: { "color-app-05": "#080019", "color-app-01": "#5400FF" }
        }}
      >
        <section className={`${prefix}--wordband`} ref={ref}>
          <Ticker speed={3} direction="toRight" mode="chain" offset="100%">
            {() => (
              <p className={`${prefix}--wordband-words`}>
                {indexedWordItems?.map((word) => {
                  return <span key={word.id}>{word.label}&nbsp;/&nbsp;</span>;
                })}
              </p>
            )}
          </Ticker>
        </section>
      </ThemeProvider>
    </ThemeProvider>
  );
});
