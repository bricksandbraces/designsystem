import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import { ButtonOrAnchor } from "../Button/Button";

type ClickableTileProps = {
  /**
   * ClickableTile ClassName
   */
  className?: string;

  /**
   * ClickableTile Href
   */
  href?: string;

  /**
   * ClickableTile Target
   */
  target?: string;

  /**
   * ClickableTile Disabled
   */
  disabled?: boolean;

  /**
   * ClickableTile readOnly
   */
  readOnly?: boolean;

  /**
   * ClickableTile onClick
   */
  onClick?: React.MouseEventHandler<ButtonOrAnchor>;

  /**
   * ClickableTile onMouseEnter
   */
  onMouseEnter?: React.MouseEventHandler<ButtonOrAnchor>;

  /**
   * ClickableTile onMouseLeave
   */
  onMouseLeave?: React.MouseEventHandler<ButtonOrAnchor>;

  /**
   * ClickableTile onFocus
   */
  onFocus?: (event: React.FocusEvent<ButtonOrAnchor>) => void;

  /**
   * ClickableTile Children
   */
  children?: ReactNode;
};

const ClickableTile = ({
  children,
  className,
  disabled,
  readOnly,
  onClick,
  ...rest
}: ClickableTileProps) => {
  return (
    <>
      {onClick ? (
        <button
          disabled={disabled}
          className={cx(
            `${prefix}--tile ${prefix}--tile-clickable`,
            {
              [`${prefix}--tile-disabled`]: disabled,
              [`${prefix}--tile-readonly`]: readOnly
            },

            className
          )}
          {...rest}
        >
          {children}
        </button>
      ) : (
        <a
          aria-disabled={disabled}
          className={cx(
            `${prefix}--tile ${prefix}--tile-clickable`,
            {
              [`${prefix}--tile-disabled`]: disabled,
              [`${prefix}--tile-readonly`]: readOnly
            },

            className
          )}
          {...rest}
        >
          {children}
        </a>
      )}
    </>
  );
};

export default ClickableTile;
