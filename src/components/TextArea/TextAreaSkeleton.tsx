import cx from "classnames";
import React from "react";
import { SkeletonContainer, SkeletonText } from "../..";
import { prefix } from "../../settings";

export type TextAreaSkeletonProps = {
  /**
   * TextAreaSkeleton ClassName
   */
  className?: string;
};

export const TextAreaSkeleton = function TextAreaSkeleton({
  className
}: TextAreaSkeletonProps) {
  return (
    <div
      className={cx(
        `${prefix}--textarea ${prefix}--skeleton `,

        className
      )}
    >
      <SkeletonText
        style={{ width: "4rem" }}
        className={cx(`${prefix}--typography-label`)}
      />
      <SkeletonContainer
        style={{ width: "100%" }}
        className={`${prefix}--textarea-input`}
      >
        <div style={{ width: "75%" }}>
          <SkeletonText style={{ width: "100%" }} />
          <SkeletonText style={{ width: "100%" }} />
          <SkeletonText style={{ width: "75%" }} />
        </div>
      </SkeletonContainer>
    </div>
  );
};
