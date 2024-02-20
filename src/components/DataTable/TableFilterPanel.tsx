import { IconX } from "@tabler/icons-react";
import cx from "classnames";
import React from "react";
import { Headline } from "../..";
import { prefix } from "../../settings";
import { IconOnlyButton } from "../Button/IconOnlyButton";

export type TableToolbarFilterPanelProps = {
  /**
   * TableToolbarFilterPanel Children
   */
  children: React.ReactNode;

  /**
   * TableToolbarFilterPanel Open
   */
  open?: boolean;

  /**
   * TableToolbarFilterPanel OnClose
   */
  onClose?: () => void;
};

export const TableFilterPanel = React.forwardRef(
  function TableToolbarFilterPanel(
    { open, children, onClose, ...rest }: TableToolbarFilterPanelProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) {
    return (
      <div
        className={cx(`${prefix}--datatable-filterpanel`, {
          [`${prefix}--datatable-filterpanel__open`]: open
        })}
        {...rest}
        ref={ref}
      >
        <div className={cx(`${prefix}--datatable-filterpanel__header`)}>
          <IconOnlyButton
            size="small"
            kind="ghost"
            onClick={onClose}
            icon={<IconX />}
            className={cx(`${prefix}--datatable-filterpanel__close`)}
          />
          <Headline type="h5">Filter</Headline>
        </div>
        <div className={cx(`${prefix}--datatable-filterpanel__filter`)}>
          {children}
        </div>
      </div>
    );
  }
);
