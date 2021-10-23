import React, { ReactNode } from "react";
import cx from "classnames";
import Tippy, {
  TippyProps,
  useSingleton,
  UseSingletonProps
} from "@tippyjs/react";
import { roundArrow } from "tippy.js";
import { prefix } from "../../settings";
import IconOnlyButton, { IconOnlyButtonProps } from "./IconOnlyButton";

export type IconOnlyButtonGroupProps = {
  /**
   * IconOnlyButtonGroup Children
   */
  children: ReactNode;

  /**
   * Tooltip Theme
   */
  theme?: "light" | "dark";

  /**
   * IconOnlyButtonGroup Singleton Props
   */
  singletonProps?: Omit<TippyProps, "singleton">;

  /**
   * IconOnlyButtonGroup Singleton Config
   */
  singletonConfig?: UseSingletonProps;

  /**
   * IconOnlyButtonGroup ClassName
   */
  className?: string;
};

const IconOnlyButtonGroup = ({
  children,
  theme = "light",
  singletonProps,
  singletonConfig,
  className
}: IconOnlyButtonGroupProps) => {
  const [source, target] = useSingleton(singletonConfig);

  return (
    <div className={cx(`${prefix}--button-group`, className)}>
      <Tippy
        className={cx(`${prefix}--tooltip ${prefix}--tooltip-default`)}
        theme={theme === "light" ? "bbds-light" : "bbds-dark"}
        {...singletonProps}
        singleton={source}
        arrow={roundArrow}
        delay={1000}
      />
      {React.Children.map(children, (child) => {
        if (!child) {
          return undefined;
        }
        const elementChild: React.ReactElement<IconOnlyButtonProps> =
          child as React.ReactElement<IconOnlyButtonGroupProps>;
        const { props } = elementChild;

        return (
          <IconOnlyButton
            {...props}
            tooltipProps={{
              tooltipContent: "",
              ...props.tooltipProps,
              theme,
              singleton: target
            }}
          />
        );
      })}
    </div>
  );
};

export default IconOnlyButtonGroup;
