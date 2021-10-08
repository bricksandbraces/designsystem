import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type AvatarProps = {
  /**
   * Avatar ClassName
   */
  className?: string;

  /**
   * React Children
   */
  children?: ReactNode | string;

  /** Avatar Size */
  size?: "large" | "default" | "small";

  /**
   * Avatar Name
   */
  name?: string;

  /**
   * Avatar Image
   */
  imgUrl?: string;
};

const Avatar = ({
  size = "default",
  className,
  name,
  imgUrl,
  children
}: AvatarProps) => {
  return (
    <div className={cx(`${prefix}--avatar-container`, className)}>
      <div className={cx(`${prefix}--avatar ${prefix}--avatar-${size}`)}>
        {imgUrl && (
          <img src={imgUrl} className={`${prefix}--avatar-img`} alt={name} />
        )}
        <span className={`${prefix}--avatar-alt`}>
          {children}
          <p className={`${prefix}--avatar-alt__text`}>
            {!children &&
              !imgUrl &&
              name
                ?.split(" ")
                .map((str) => str[0] ?? "")
                .join("")}
          </p>
        </span>
      </div>
    </div>
  );
};

export default Avatar;
