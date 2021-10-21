import React, { ReactNode } from "react";
import cx from "classnames";
import Tippy, {
  TippyProps,
  useSingleton,
  UseSingletonProps
} from "@tippyjs/react";
import { prefix } from "../../settings";
import IconOnlyButton, { IconOnlyButtonProps } from "./IconOnlyButton";

export type IconOnlyButtonGroupProps = {
  /**
   * IconOnlyButtonGroup Children
   */
  children: ReactNode;

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
  singletonProps,
  singletonConfig,
  className
}: IconOnlyButtonGroupProps) => {
  const [source, target] = useSingleton(singletonConfig);

  return (
    <div className={cx(`${prefix}--button-group`, className)}>
      <Tippy {...singletonProps} singleton={source} />
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
              singleton: target
            }}
          />
        );
      })}
    </div>
  );
};

export default IconOnlyButtonGroup;
