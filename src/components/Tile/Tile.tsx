import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

export type TileProps = {
  /**
   * Tile ClassName
   */
  className?: string;

  /**
   * Tile Disabled
   */
  disabled?: boolean;

  /**
   * Tile ReadOnly
   */
  readOnly?: boolean;

  /**
   * Tile Children
   */
  children?: ReactNode;
};

const Tile = (
  { children, disabled, readOnly, className, ...rest }: TileProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  return (
    <div
      ref={ref}
      className={cx(
        `${prefix}--tile`,
        {
          [`${prefix}--tile-disabled`]: disabled,
          [`${prefix}--tile-readonly`]: readOnly
        },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default React.forwardRef(Tile);
