import React from "react";
import cx from "classnames";
import { IconMenu, IconX } from "@tabler/icons";
import { Logo } from "../../Logo/Logo";
import { Grid, Column } from "../../Grid/Grid";
import { prefix } from "../../../settings";
import { idfy } from "../../../helpers/arrayUtilities";
import { WebHeaderLink } from "./WebHeaderLink";
import { useControlledValue } from "../../../hooks/useControlled";
import { LinkItem } from "../../..";

export type WebHeaderProps = {
  /**
   * WebHeader LinkItems
   */
  linkItems?: LinkItem[];

  /**
   * WebHeader Logo
   */
  logo?: React.ReactNode;

  /**
   * WebHeader BaseUrl
   */
  baseUrl?: string;

  /**
   * WebHeader Open
   */
  open?: boolean;

  /**
   * WebHeader DefaultOpen
   */
  defaultOpen?: boolean;

  /**
   * WebHeader OnOpenChange
   */
  onOpenChange?: (newOpen: boolean) => void;
};

export const WebHeader = React.forwardRef(function WebHeader(
  { open, defaultOpen, onOpenChange, linkItems, logo, baseUrl }: WebHeaderProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  const [headerOpen, setHeaderOpen] = useControlledValue(
    open,
    defaultOpen,
    onOpenChange,
    false
  );
  const indexedLinkItems = idfy(linkItems);
  return (
    <>
      <header className={cx(`${prefix}--webheader`)} ref={ref}>
        <div>
          <Grid narrow>
            <Column className={cx(`${prefix}--webheader-container`)}>
              <a href={baseUrl} className={cx(`${prefix}--webheader-logo`)}>
                <Logo type="logotype" color="black" size="xsmall" />
              </a>
            </Column>
          </Grid>
        </div>
      </header>
      <button
        className={cx(`${prefix}--webheader-toggle`, {
          [`${prefix}--webheader-toggle__open`]: headerOpen
        })}
        onClick={() => {
          setHeaderOpen(!headerOpen);
        }}
      >
        {headerOpen ? <IconX /> : <IconMenu />}
      </button>
      <div
        className={cx(`${prefix}--webheader-menu`, {
          [`${prefix}--webheader-menu__open`]: headerOpen
        })}
      >
        <div>
          {indexedLinkItems?.map((link) => {
            return (
              <WebHeaderLink
                key={link.id}
                href={link.href}
                onClick={() => {
                  setHeaderOpen(!headerOpen);
                }}
              >
                {link.label}
              </WebHeaderLink>
            );
          })}
        </div>
        <div>
          <a
            href={baseUrl}
            className={cx(
              `${prefix}--webheader-logo ${prefix}--webheader-menu__logo`
            )}
          >
            {logo ?? <Logo type="logomark" color="white" size="xlarge" />}
          </a>
        </div>
      </div>
      <div className={cx(`${prefix}--webheader-overlay`)} />
    </>
  );
});
