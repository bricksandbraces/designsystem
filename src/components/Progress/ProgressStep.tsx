import cx from "classnames";
import React, { ReactNode } from "react";
import { Tooltip } from "../..";
import { prefix } from "../../settings";

export type ProgressStepProps = {
  /**
   * ProgressStep Children
   */
  children?: ReactNode;

  /**
   * ProgressStep Classnames
   */
  className?: string;

  /**
   * ProgressStep Current Item
   */
  current?: boolean;

  /**
   * ProgressStep onClick Item
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * ProgressStep Inactive Item
   */
  inactive?: boolean;

  /**
   * ProgressStep Error Item
   */
  error?: boolean;

  /**
   * ProgressStep Tooltip Content
   */
  tooltipContent?: string;

  /**
   * ProgressStep Tooltip Content
   */
  tooltipPlacement?: "bottom" | "top" | "left" | "right";

  /**
   * ProgressStep Label
   */
  label?: string;
};

export const ProgressStep = function ProgressStep({
  className,
  label,
  current,
  inactive,
  tooltipContent,
  tooltipPlacement,
  error,
  onClick,
  ...rest
}: ProgressStepProps) {
  return (
    <li
      className={cx(
        `${prefix}--progress-step`,
        {
          [`${prefix}--progress-step__current`]: current,
          [`${prefix}--progress-step__inactive`]: inactive,
          [`${prefix}--progress-step__interactive`]: onClick,
          [`${prefix}--progress-step__error`]: error,
          [`${prefix}--progress-step__tooltip`]: tooltipContent
        },
        className
      )}
      {...rest}
      title={label}
    >
      <button className={cx(`${prefix}--progress-step__button`)}>
        <div className={cx(`${prefix}--progress-step__container`)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={cx(`${prefix}--progress-step__icon`)}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle
              cx="12"
              cy="12"
              r="9"
              className={cx(`${prefix}--progress-step__icon-circle`)}
            />
            <path
              d="M9 12l2 2l4 -4"
              className={cx(`${prefix}--progress-step__icon-check`)}
            />
            <line
              x1="12"
              y1="8"
              x2="12"
              y2="12"
              className={cx(`${prefix}--progress-step__icon-error`)}
            />
            <line
              x1="12"
              y1="16"
              x2="12.01"
              y2="16"
              className={cx(`${prefix}--progress-step__icon-error`)}
            />
          </svg>
          {tooltipContent ? (
            <Tooltip
              tooltipContent={tooltipContent}
              placement={tooltipPlacement}
            >
              <p className={cx(`${prefix}--progress-step__label`)}>{label}</p>
            </Tooltip>
          ) : (
            <p className={cx(`${prefix}--progress-step__label`)}>{label}</p>
          )}
        </div>
        <div className={cx(`${prefix}--progress-step__indicator`)} />
      </button>
    </li>
  );
};
