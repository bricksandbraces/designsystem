import { IconChevronDown, IconMenu, IconX } from "@tabler/icons";
import Tippy from "@tippyjs/react";
import cx from "classnames";
import React from "react";
import { roundArrow } from "tippy.js";
import { Button, IconOnlyButton, Link } from "../../..";
import { idfy } from "../../../helpers/arrayUtilities";
import { useControlledValue } from "../../../hooks/useControlled";
import { prefix } from "../../../settings";
import { Column, Grid } from "../../Grid/Grid";
import { Logo } from "../../Logo/Logo";

export type LinkItem = {
  /**
   * LinkItem Link to location
   */
  href: string;

  /**
   * LinkItem Label
   */
  label: string;

  /**
   * LinkItem Promo
   */
  promo?: boolean;
};

export type ProductHeaderProps = {
  /**
   * ProductHeader LinkItems
   */
  linkItems?: LinkItem[];

  /**
   * ProductHeader Logo
   */
  logo?: React.ReactNode;

  /**
   * ProductHeader BaseUrl
   */
  baseUrl?: string;

  /**
   * ProductHeader Open
   */
  open?: boolean;

  /**
   * ProductHeader DefaultOpen
   */
  defaultOpen?: boolean;

  /**
   * ProductHeader OnOpenChange
   */
  onOpenChange?: (newOpen: boolean) => void;
};

export const ProductHeader = React.forwardRef(function ProductHeader(
  {
    open,
    defaultOpen,
    onOpenChange,
    linkItems,
    logo,
    baseUrl
  }: ProductHeaderProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  const [menuOpen, setMenuOpen] = useControlledValue(
    open,
    defaultOpen,
    onOpenChange,
    false
  );
  const indexedLinkItems = idfy(linkItems);
  return (
    <header
      className={cx(`${prefix}--header ${prefix}--header-product`)}
      ref={ref}
    >
      <Grid narrow>
        <Column
          sm={4}
          md={8}
          lg={16}
          xlg={16}
          className={cx(`${prefix}--header-container`)}
        >
          <a href={baseUrl} className={cx(`${prefix}--header-logo`)}>
            <Logo type="logotype" color="black" size="xsmall" />
          </a>
          <button
            className={cx(`${prefix}--header-product__toggle`, {
              [`${prefix}--header-product__toggle-open`]: menuOpen
            })}
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            {menuOpen ? <IconX /> : <IconMenu />}
          </button>
          {indexedLinkItems && (
            <div className={cx(`${prefix}--header-product__links`)}>
              <Tippy
                interactive
                className={cx(`${prefix}--header-product__list`)}
                animation="bbds-animation"
                placement="bottom"
                theme="dark"
                offset={[0, 8]}
                allowHTML
                arrow={false}
                content={
                  <>
                    <a className={cx(`${prefix}--header-product__list-item`)}>
                      Item 1
                    </a>
                    <a className={cx(`${prefix}--header-product__list-item`)}>
                      Item 1
                    </a>
                    <a className={cx(`${prefix}--header-product__list-item`)}>
                      Item 1
                    </a>
                  </>
                }
              >
                <button
                  className={cx(
                    `${prefix}--link ${prefix}--link-default ${prefix}--header-product__list-trigger `
                  )}
                >
                  <span className={cx(`${prefix}--link-label`)}>Open Menu</span>
                </button>
              </Tippy>
              {indexedLinkItems?.map((link) => {
                return link.promo === undefined ? (
                  <Link key={link.id} href={link.href}>
                    {link.label}
                  </Link>
                ) : (
                  <Button key={link.id} href={link.href} size="small">
                    {link.label}
                  </Button>
                );
              })}
            </div>
          )}
        </Column>
      </Grid>
      <div
        className={cx(`${prefix}--header-product__menu`, {
          [`${prefix}--header-product__menu-open`]: menuOpen
        })}
      >
        <p className={cx(`${prefix}--header-product__menu-headline`)}>
          Headline
        </p>
        <a className={cx(`${prefix}--header-product__menu-link`)}>Blog</a>
        <a className={cx(`${prefix}--header-product__menu-link`)}>About us</a>
        <a className={cx(`${prefix}--header-product__menu-link`)}>Imprint</a>
        <p className={cx(`${prefix}--header-product__menu-headline`)}>
          Headline
        </p>
        <a className={cx(`${prefix}--header-product__menu-link`)}>Blog</a>
        <a className={cx(`${prefix}--header-product__menu-link`)}>About us</a>
        <a className={cx(`${prefix}--header-product__menu-link`)}>Imprint</a>
      </div>
    </header>
  );
});
