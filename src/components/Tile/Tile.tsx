import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type TileProps = {
  /**
   * Tile ClassName
   */
  className?: string;
  /**
   * Tile Children
   */
  children?: ReactNode;
};

const Tile = ({ children, className }: TileProps) => {
  return (
    <div
      className={cx(
        `${prefix}--tile`,

        className
      )}
    >
      {children}
    </div>
  );
};

export default Tile;
