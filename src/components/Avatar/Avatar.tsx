import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

export type AvatarProps = {
  /**
   * Avatar ClassName
   */
  className?: string;

  /**
   * Avatar React Children
   */
  children?: ReactNode | string;

  /**
   *  Avatar Size
   *  */
  size?: "large" | "default" | "small";

  /**
   * Avatar Name (required for accessibility)
   */
  name: string;

  /**
   * Avatar Image URL
   */
  imgUrl?: string;
};

const Avatar = (
  { size = "default", className, name, imgUrl, children }: AvatarProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  return (
    <div className={cx(`${prefix}--avatar-container`, className)} ref={ref}>
      <div className={cx(`${prefix}--avatar ${prefix}--avatar-${size}`)}>
        {imgUrl ? (
          <img src={imgUrl} className={`${prefix}--avatar-img`} alt={name} />
        ) : (
          <span className={`${prefix}--avatar-alt`}>
            {children}
            <p className={`${prefix}--avatar-alt__text`}>
              {!children &&
                name
                  ?.split(" ")
                  .map((str) => str[0] ?? "")
                  .join("")}
            </p>
          </span>
        )}
      </div>
    </div>
  );
};

export default React.forwardRef(Avatar);
