import React, { ReactNode, useState } from "react";
import TooltipTrigger from "./TooltipTrigger";
import ContainerTooltipIcon from "./ContainerTooltipIcon";
import ContainerTooltipContainer from "./ContainerTooltipContainer";

type ComposedContainerTooltipProps = {
  /**
   * Position of tooltip.
   */
  tooltipPosition: "top" | "bottom" | "left" | "right";

  /**
   * Children of tooltip.
   */
  children: ReactNode;
};

const ComposedContainerTooltip = ({
  children,
  tooltipPosition
}: ComposedContainerTooltipProps) => {
  const [open, setOpen] = useState(false);
  return (
    <TooltipTrigger open={open}>
      <ContainerTooltipIcon
        onClick={() => {
          setOpen(!open);
        }}
      />
      <ContainerTooltipContainer tooltipPosition={tooltipPosition} withCaret>
        {children}
      </ContainerTooltipContainer>
    </TooltipTrigger>
  );
};

export default ComposedContainerTooltip;
