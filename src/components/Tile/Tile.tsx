import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type TileProps = {
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

const Tile = ({
  children,
  disabled,
  readOnly,
  className,
  ...rest
}: TileProps) => {
  return (
    <div
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

export default Tile;
