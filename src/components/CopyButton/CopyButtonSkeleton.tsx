import React from "react";
import { IconOnlyButtonSkeleton } from "../Button/IconOnlyButtonSkeleton";

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

export const CopyButtonSkeleton = function CopyButtonSkeleton({
  size = "default",
  className
}: CopyButtonSkeletonProps) {
  return <IconOnlyButtonSkeleton size={size} className={className} />;
};
