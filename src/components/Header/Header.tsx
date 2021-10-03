import React, { useState } from "react";
import cx from "classnames";
import { IconMenu, IconX } from "@tabler/icons";
import { useWindowScroll } from "react-use";
import Logo from "../Logo/Logo";
import { Grid, Column } from "../Grid/Grid";
import Link from "../Link/Link";
import { prefix } from "../../settings";
import Headline from "../Typography/Headline";

type LinkItem = {
  /**
   * Link to location
   */
  href: string;

  /**
   * Label that is shown
   */
  label: string;
};

type HeaderProps = {
  /**
   * Link section / Buttons
   */
  linkItems?: LinkItem[];

  /**
   * Base Url for header
   */
  baseUrl?: string;
};

const Header = ({ linkItems, baseUrl }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const { x, y } = useWindowScroll();
  const small = y > 64 && x === 0;

  return (
    <>
      <div
        className={cx(`${prefix}--header--mobile`, {
          [`${prefix}--header--mobile-visible`]: open
        })}
      >
        <Grid narrow>
          <Column
            md={7}
            mdOffset={1}
            sm={4}
            className={`${prefix}--header--mobile-list`}
          >
            {linkItems?.map((link, i) => {
              return (
                <a
                  // eslint-disable-next-line react/no-array-index-key
                  key={`header-${i}-${link.href}`}
                  className={`${prefix}--header--mobile-list__item`}
                  href={link.href}
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  <Headline type="h1">{link.label}</Headline>
                </a>
              );
            })}
          </Column>
        </Grid>
      </div>
      <header
        className={cx(`${prefix}--header`, {
          [`${prefix}--header--small`]: small
        })}
      >
        <Grid narrow className={`${prefix}--header--grid`}>
          <Column
            md={3}
            mdOffset={1}
            lg={3}
            lgOffset={2}
            xlg={3}
            xlgOffset={2}
            className={`${prefix}--header--column`}
          >
            <a href={baseUrl} className={`${prefix}--header--logo`}>
              <Logo
                variant="white"
                size="xsmall"
                kind={small ? "logomark" : "logotype"}
              />
            </a>
          </Column>
          <Column
            md={3}
            mdOffset={4}
            lg={6}
            lgOffset={8}
            xlg={6}
            xlgOffset={8}
            className={`${prefix}--header--column`}
          >
            <div className={`${prefix}--header--linksection`}>
              {linkItems?.map((link, i) => {
                return (
                  <Link
                    // eslint-disable-next-line react/no-array-index-key
                    key={`header-linksection-${i}-${link.href}`}
                    href={link.href}
                    className={`${prefix}--header--linksection-item`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </Column>
          <Column
            md={1}
            mdOffset={7}
            sm={1}
            smOffset={3}
            className={`${prefix}--header--column ${prefix}--header--menubutton-container`}
          >
            <button
              type="button"
              className={`${prefix}--header--menubutton`}
              onClick={() => {
                setOpen(!open);
              }}
            >
              {open ? <IconX /> : <IconMenu />}
            </button>
          </Column>
        </Grid>
      </header>
    </>
  );
};

export default Header;
