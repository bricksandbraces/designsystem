import React, { JSXElementConstructor, ReactElement, ReactNode } from "react";
import type { TippyProps } from "@tippyjs/react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { roundArrow } from "tippy.js";
import "tippy.js/dist/svg-arrow.css";
import cx from "classnames";
import { prefix } from "../../settings";

export type ContainerTooltipProps = {
  /**
   * ContainerTooltip Children
   */
  children?: ReactElement<any, string | JSXElementConstructor<any>>;

  /**
   * ContainerTooltip Theme
   */
  theme: "light" | "dark";

  /**
   * ContainerTooltip Title
   */
  title: string;

  /**
   * ContainerTooltip Body
   */
  body: ReactNode;
} & Omit<TippyProps, "content">;

const ContainerTooltip = ({
  children,
  theme,
  title,
  body,
  ...props
}: ContainerTooltipProps) => {
  return (
    <Tippy
      className={cx(`${prefix}--tooltip ${prefix}--tooltip-container`)}
      arrow={roundArrow}
      trigger="click"
      animation="bbds-animation"
      duration={150}
      theme={theme === "light" ? "bbds-light" : "bbds-dark"}
      {...props}
      content={
        <>
          <div className={cx(`${prefix}--tooltip-container__title`)}>
            {title}
          </div>
          <div className={cx(`${prefix}--tooltip-container__body`)}>{body}</div>
        </>
      }
    >
      {children}
    </Tippy>
  );
};

export default ContainerTooltip;
