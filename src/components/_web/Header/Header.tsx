import { IconMenu, IconX } from "@tabler/icons";
import cx from "classnames";
import React from "react";
import { LinkItem } from "../../..";
import { idfy } from "../../../helpers/arrayUtilities";
import { useControlledValue } from "../../../hooks/useControlled";
import { prefix } from "../../../settings";
import { Column, Grid } from "../../Grid/Grid";
import { Logo } from "../../Logo/Logo";
import { HeaderLink } from "./HeaderLink";

export type HeaderProps = {
  /**
   * Header LinkItems
   */
  linkItems?: LinkItem[];

  /**
   * Header Logo
   */
  logo?: React.ReactNode;

  /**
   * Header BaseUrl
   */
  baseUrl?: string;

  /**
   * Header Open
   */
  open?: boolean;

  /**
   * Header DefaultOpen
   */
  defaultOpen?: boolean;

  /**
   * Header OnOpenChange
   */
  onOpenChange?: (newOpen: boolean) => void;
};

export const Header = React.forwardRef(function Header(
  { open, defaultOpen, onOpenChange, linkItems, logo, baseUrl }: HeaderProps,
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
      <header className={cx(`${prefix}--header`)} ref={ref}>
        <div>
          <Grid narrow>
            <Column className={cx(`${prefix}--header-container`)}>
              <a href={baseUrl} className={cx(`${prefix}--header-logo`)}>
                <Logo type="logotype" color="black" size="xsmall" />
              </a>
            </Column>
          </Grid>
        </div>
      </header>
      <button
        className={cx(`${prefix}--header-toggle`, {
          [`${prefix}--header-toggle__open`]: headerOpen
        })}
        onClick={() => {
          setHeaderOpen(!headerOpen);
        }}
      >
        {headerOpen ? <IconX /> : <IconMenu />}
      </button>
      <div
        className={cx(`${prefix}--header-menu`, {
          [`${prefix}--header-menu__open`]: headerOpen
        })}
      >
        <div>
          {indexedLinkItems?.map((link) => {
            return (
              <HeaderLink
                key={link.id}
                href={link.href}
                onClick={() => {
                  setHeaderOpen(!headerOpen);
                }}
              >
                {link.label}
              </HeaderLink>
            );
          })}
        </div>
        <div>
          <a
            href={baseUrl}
            className={cx(
              `${prefix}--header-logo ${prefix}--header-menu__logo`
            )}
          >
            {logo ?? <Logo type="logomark" color="white" size="xlarge" />}
          </a>
        </div>
      </div>
      <div className={cx(`${prefix}--header-overlay`)} />
    </>
  );
});
