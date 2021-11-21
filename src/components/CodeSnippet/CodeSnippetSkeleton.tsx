import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import SkeletonAnimatedContainer from "../Skeleton/SkeletonAnimatedContainer";
import IconOnlyButtonSkeleton from "../Button/IconOnlyButtonSkeleton";
import ButtonSkeleton from "../Button/ButtonSkeleton";

type CodeSnippetSkeletonProps = {
  /**
   * CodeSnippetSkeleton ClassName
   */
  className?: string;
};

const CodeSnippetSkeleton = ({ className }: CodeSnippetSkeletonProps) => {
  return (
    <SkeletonAnimatedContainer
      style={{ width: "100%" }}
      className={cx(
        `${prefix}--codesnippet`,

        className
      )}
    >
      <div className={`${prefix}--codesnippet-button__container`}>
        <ButtonSkeleton size="small" light />
        <IconOnlyButtonSkeleton size="small" light />
      </div>
    </SkeletonAnimatedContainer>
  );
};

export default CodeSnippetSkeleton;
