import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import IconOnlyButtonSkeleton from "../Button/IconOnlyButtonSkeleton";
import ButtonSkeleton from "../Button/ButtonSkeleton";
import SkeletonContainer from "../Skeleton/SkeletonContainer";
import SkeletonText from "../Skeleton/SkeletonText";

type CodeSnippetSkeletonProps = {
  /**
   * CodeSnippetSkeleton ClassName
   */
  className?: string;
};

const CodeSnippetSkeleton = ({ className }: CodeSnippetSkeletonProps) => {
  return (
    <SkeletonContainer
      style={{ width: "100%" }}
      className={cx(
        `${prefix}--codesnippet`,

        className
      )}
    >
      <div style={{ width: "75%" }}>
        <SkeletonText style={{ width: "100%" }} />
        <SkeletonText style={{ width: "100%" }} />
        <SkeletonText style={{ width: "100%" }} />
        <SkeletonText style={{ width: "75%" }} />
      </div>
      <div className={`${prefix}--codesnippet-button__container`}>
        <ButtonSkeleton size="small" />
        <IconOnlyButtonSkeleton size="small" />
      </div>
    </SkeletonContainer>
  );
};

export default CodeSnippetSkeleton;
