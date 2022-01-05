import Tippy from "@tippyjs/react";
import cx from "classnames";
import React, { useState } from "react";
import { Divider, LinkItem } from "../..";
import { idfy } from "../../helpers/arrayUtilities";
import { prefix } from "../../settings";
import { Avatar } from "../Avatar/Avatar";
import { Button } from "../Button/Button";
import { Link } from "../Link/Link";
import { Body } from "../Typography/Typography";

export type UserProfileProps = {
  /**
   * UserProfile Name
   */
  name: string;

  /**
   * UserProfile SubName
   */
  subName: string;

  /**
   * UserProfile Link Array
   */
  links?: LinkItem[];

  /**
   * UserProfile Image URL
   */
  imgUrl?: string;

  /**
   * UserProfile Position
   */
  positionTop?: number;
  positionBottom?: number;
  positionLeft?: number;
  positionRight?: number;

  /**
   * UserProfile Number of profiles to show
   */
  profilesToShow?: number;

  primaryLabel?: string;

  /**
   * UserProfile onPrimaryAction Function for e.g. Sign Out
   */
  onPrimaryAction: React.MouseEventHandler<HTMLButtonElement>;
};

export const UserProfile = React.forwardRef(function UserProfile(
  {
    name,
    subName,
    links,
    imgUrl,
    profilesToShow,
    primaryLabel = "Sign Out",
    onPrimaryAction
  }: UserProfileProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const [open, setOpen] = useState(false);

  const indexedLinks = idfy(links);
  return (
    <>
      <Tippy
        ref={ref}
        interactive
        arrow={false}
        className={cx(`${prefix}--userprofile-menu`)}
        animation="bbds-animation"
        trigger="click"
        placement="bottom-start"
        theme="dark"
        offset={[0, 8]}
        allowHTML
        content={
          <>
            <div className={`${prefix}--userprofile-menu__user`}>
              <Avatar
                size="large"
                name={name}
                imgUrl={imgUrl}
                className={`${prefix}--userprofile-menu__avatar`}
              />
              <div>
                <Body type="body-01" className={`${prefix}--userprofile-name`}>
                  {name}
                </Body>
                <Body
                  type="body-02"
                  className={`${prefix}--userprofile-subname`}
                >
                  {subName}
                </Body>
                {indexedLinks && (
                  <div className={`${prefix}--userprofile-linklist`}>
                    {indexedLinks
                      .map((link) => {
                        return (
                          <div
                            key={link.id}
                            className={`${prefix}--userprofile-link`}
                          >
                            <Link href={link.href}>{link.label}</Link>
                          </div>
                        );
                      })
                      .slice(0, profilesToShow)}
                  </div>
                )}
              </div>
            </div>
            <Divider
              className={`${prefix}--userprofile-divider`}
              type="default"
            />
            <Button onClick={onPrimaryAction} fluid size="small">
              {primaryLabel}
            </Button>
          </>
        }
      >
        <button
          ref={ref}
          onClick={() => {
            setOpen(!open);
          }}
          type="button"
          className={cx(`${prefix}--userprofile-trigger`, {
            [`${prefix}--userprofile-open`]: open
          })}
        >
          <Avatar
            size="small"
            name={name}
            imgUrl={imgUrl}
            className={cx(`${prefix}--userprofile`)}
          />
        </button>
      </Tippy>
    </>
  );
});
