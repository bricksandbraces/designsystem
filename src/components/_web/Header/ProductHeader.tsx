import { IconAccessible, IconMenu2, IconX } from "@tabler/icons";
import cx from "classnames";
import React from "react";
import { idfy } from "../../../helpers/arrayUtilities";
import { useControlledValue } from "../../../hooks/useControlled";
import { prefix } from "../../../settings";
import { Column, Grid } from "../../Grid/Grid";
import { Logo } from "../../Logo/Logo";
import { ProductHeaderLink } from "./ProductHeaderLink";
import { ProductHeaderMenu } from "./ProductHeaderMenu";
import { ProductHeaderMenuItem } from "./ProductHeaderMenuItem";

export type ProductHeaderLinkItem = {
  /**
   * ProductHeaderLinkItem ProductHeaderLink to location
   */
  href: string;

  /**
   * ProductHeaderLinkItem Label
   */
  label: string;

  /**
   * ProductHeaderLinkItem Promo
   */
  promo?: boolean;
};

export type ProductHeaderProps = {
  /**
   * ProductHeader ProductHeaderLinkItems
   */
  linkItems?: ProductHeaderLinkItem[];

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
  { open, defaultOpen, onOpenChange, linkItems, baseUrl }: ProductHeaderProps,
  ref: React.ForwardedRef<HTMLElement>
) {
  const [menuOpen, setMenuOpen] = useControlledValue(
    open,
    defaultOpen,
    onOpenChange,
    false
  );
  const indexedProductHeaderLinkItems = idfy(linkItems);
  return (
    <header
      className={cx(`${prefix}--header ${prefix}--header-product`)}
      ref={ref}
    >
      <Grid narrow>
        <Column
          sm={4}
          md={8}
          lg={14}
          lgOffset={1}
          xlgOffset={1}
          xlg={14}
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
            {menuOpen ? <IconX /> : <IconMenu2 />}
          </button>
          {indexedProductHeaderLinkItems && (
            <div className={cx(`${prefix}--header-product__links`)}>
              <ProductHeaderMenu label="Open menu">
                <ProductHeaderMenuItem
                  title="Item 1"
                  subtitle="This is a description"
                  icon={<IconAccessible />}
                />
                <ProductHeaderMenuItem
                  title="Item 2"
                  subtitle="This is a description"
                  icon={<IconAccessible />}
                />
                <ProductHeaderMenuItem
                  title="Item 3"
                  subtitle="This is a description"
                  icon={<IconAccessible />}
                />
              </ProductHeaderMenu>
              <ProductHeaderMenu label="Open menu">
                <ProductHeaderMenuItem
                  title="Item 1"
                  subtitle="This is a description"
                />
                <ProductHeaderMenuItem
                  title="Item 2"
                  subtitle="This is a description"
                />
                <ProductHeaderMenuItem
                  title="Item 3"
                  subtitle="This is a description"
                />
              </ProductHeaderMenu>
              {indexedProductHeaderLinkItems?.map((link) => {
                return (
                  <ProductHeaderLink
                    promo={link.promo === undefined ? false : true}
                    key={link.id}
                    href={link.href}
                  >
                    {link.label}
                  </ProductHeaderLink>
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
        <div
          className={cx(`${prefix}--header-product__menu-nav--item__container`)}
        >
          <p
            className={cx(
              `${prefix}--header-product__menu-nav--item ${prefix}--header-product__menu-headline`
            )}
          >
            Headline
          </p>
          <a
            className={cx(
              `${prefix}--header-product__menu-nav--item ${prefix}--header-product__menu-link`
            )}
          >
            Blog
          </a>
          <a
            className={cx(
              `${prefix}--header-product__menu-nav--item ${prefix}--header-product__menu-link`
            )}
          >
            About us
          </a>
          <a
            className={cx(
              `${prefix}--header-product__menu-nav--item ${prefix}--header-product__menu-link`
            )}
          >
            Imprint
          </a>
          <p
            className={cx(
              `${prefix}--header-product__menu-nav--item ${prefix}--header-product__menu-headline`
            )}
          >
            Headline
          </p>
          <a
            className={cx(
              `${prefix}--header-product__menu-nav--item ${prefix}--header-product__menu-link`
            )}
          >
            Blog
          </a>
          <a
            className={cx(
              `${prefix}--header-product__menu-nav--item ${prefix}--header-product__menu-link`
            )}
          >
            About us
          </a>
          <a
            className={cx(
              `${prefix}--header-product__menu-nav--item ${prefix}--header-product__menu-link`
            )}
          >
            Imprint
          </a>

          <a
            className={cx(
              `${prefix}--header-product__menu-nav--item ${prefix}--header-product__menu-link--promo ${prefix}--button ${prefix}--button-primary ${prefix}--button-large`
            )}
          >
            Item
          </a>
        </div>
      </div>
    </header>
  );
});
