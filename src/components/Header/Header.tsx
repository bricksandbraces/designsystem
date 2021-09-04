import React, { useState } from "react";
import cx from "classnames";
import { IconMenu, IconX } from "@tabler/icons";
import { useWindowScroll } from "react-use";
import Logo from "../Logo/Logo";
import { Grid, Column } from "../Grid/Grid";
import Link from "../Link/Link";
import Typography from "../Typography/Typography";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";

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
      <div className={cx("header--mobile", { "header--mobile-visible": open })}>
        <Grid narrow>
          <Column md={7} mdOffset={1} sm={4} className="header--mobile-list">
            {linkItems?.map((link, i) => {
              return (
                <a
                  // eslint-disable-next-line react/no-array-index-key
                  key={`header-${i}-${link.href}`}
                  className="header--mobile-list__item"
                  href={link.href}
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  <Typography type="text" token="heading-06">
                    {link.label}
                  </Typography>
                </a>
              );
            })}
          </Column>
        </Grid>
      </div>
      <header className={cx("header", { "header--small": small })}>
        <Grid narrow className="header--grid">
          <Column
            md={3}
            mdOffset={1}
            lg={3}
            lgOffset={2}
            xlg={3}
            xlgOffset={2}
            className="header--column"
          >
            <a href={baseUrl} className="header--logo">
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
            className="header--column"
          >
            <div className="header--linksection">
              {linkItems?.map((link, i) => {
                return (
                  <Link
                    // eslint-disable-next-line react/no-array-index-key
                    key={`header-linksection-${i}-${link.href}`}
                    href={link.href}
                    className="header--linksection-item"
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
            className="header--column header--menubutton-container"
          >
            <button
              type="button"
              className="header--menubutton"
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
