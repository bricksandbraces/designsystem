import React, { useState } from "react";
import cx from "classnames";
import { IconMenu, IconX } from "@tabler/icons";
import Logo from "../../Logo/Logo";
import { Grid, Column } from "../../Grid/Grid";
import { prefix } from "../../../settings";
import { idfy } from "../../../helpers/arrayUtilities";
import WebHeaderLink from "./WebHeaderLink";

type LinkItem = {
  /**
   * LinkItem Href
   */
  href: string;

  /**
   * LinkItem Label
   */
  label: string;
};

type WebHeaderProps = {
  /**
   * WebHeader LinkItems
   */
  linkItems?: LinkItem[];

  /**
   * WebHeader BaseUrl
   */
  baseUrl?: string;
};

const WebHeader = ({ linkItems, baseUrl }: WebHeaderProps) => {
  const [open, setOpen] = useState(false);
  const indexedLinkItems = idfy(linkItems);
  return (
    <>
      <header className={cx(`${prefix}--webheader`)}>
        <div>
          <Grid narrow fullWidth>
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
          [`${prefix}--webheader-toggle__open`]: open
        })}
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? <IconX /> : <IconMenu />}
      </button>
      <div
        className={cx(`${prefix}--webheader-menu`, {
          [`${prefix}--webheader-menu__open`]: open
        })}
      >
        <div>
          {indexedLinkItems?.map((link) => {
            return (
              <WebHeaderLink
                key={link.id}
                href={link.href}
                onClick={() => {
                  setOpen(!open);
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
            <Logo type="logotype" color="white" size="xsmall" />
          </a>
        </div>
      </div>
      <div className={cx(`${prefix}--webheader-overlay`)} />
    </>
  );
};

export default WebHeader;
