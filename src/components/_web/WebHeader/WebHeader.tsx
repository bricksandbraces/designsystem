import { IconMenu, IconX } from "@tabler/icons";
import cx from "classnames";
import React from "react";
import { LinkItem } from "../../..";
import { idfy } from "../../../helpers/arrayUtilities";
import { useControlledValue } from "../../../hooks/useControlled";
import { prefix } from "../../../settings";
import { Column, Grid } from "../../Grid/Grid";
import { Logo } from "../../Logo/Logo";
import { WebHeaderLink } from "./WebHeaderLink";

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
