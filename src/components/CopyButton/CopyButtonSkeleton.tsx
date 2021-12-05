import React from "react";
import IconOnlyButtonSkeleton from "../Button/IconOnlyButtonSkeleton";

export type CopyButtonSkeletonProps = {
  /**
   * CopyButtonSkeleton ClassName
   */
  className?: string;

  /**
   * CopyButtonSkeleton Size
   */
  size?: "large" | "default" | "small";
};

const CopyButtonSkeleton = ({
  size = "default",
  className
}: CopyButtonSkeletonProps) => (
  <IconOnlyButtonSkeleton size={size} className={className} />
);

export default CopyButtonSkeleton;
