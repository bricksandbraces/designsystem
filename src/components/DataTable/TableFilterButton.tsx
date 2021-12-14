import { IconFilter } from "@tabler/icons";
import React from "react";
import { withoutPropagation } from "../../helpers/eventUtilities";
import IconOnlyButton from "../Button/IconOnlyButton";

export type TableFilterButtonProps = {
  /**
   * TableFilterButton ActiveFiltersCount
   */
  activeFiltersCount: number;

  /**
   * TableFilterButton On Change
   */
  setFilterPanelOpen: (open: boolean) => void;
};

const TableFilterButton = (
  { activeFiltersCount, setFilterPanelOpen, ...rest }: TableFilterButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) => {
  return (
    <IconOnlyButton
      ref={ref}
      kind="ghost"
      icon={<IconFilter fill={activeFiltersCount ? "white" : undefined} />}
      onClick={withoutPropagation(() => setFilterPanelOpen(true))}
      {...rest}
    />
  );
};

export default React.forwardRef(TableFilterButton);
