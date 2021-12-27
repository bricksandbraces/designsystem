import React, { useRef, useState } from "react";
import cx from "classnames";
import Link from "../Link/Link";
import Button from "../Button/Button";
import { prefix } from "../../settings";
import { idfy } from "../../helpers/arrayUtilities";
import OutsideClickListener from "../util/OutsideClickListener/OutsideClickListener";
import FloatingPanel from "../FloatingPanel/FloatingPanel";
import Avatar from "../Avatar/Avatar";
import Divider from "../Divider/Divider";
import { Body } from "../Typography/Typography";

export type LinkItem = {
  /**
   * UserProfile LinkItem Href
   */
  href: string;

  /**
   * UserProfile LinkItem Label
   */
  label: string;
};

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

const UserProfile = (
  {
    name,
    subName,
    links,
    positionBottom,
    positionLeft,
    positionRight,
    positionTop,
    imgUrl,
    profilesToShow,
    primaryLabel = "Sign Out",
    onPrimaryAction
  }: UserProfileProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) => {
  const [open, setOpen] = useState(false);

  const panelRef = useRef<HTMLDivElement>(null);
  const indexedLinks = idfy(links);
  return (
    <>
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
      <OutsideClickListener
        onClickOutside={() => {
          setOpen(false);
        }}
        disabled={!open}
        ref={panelRef}
      >
        <FloatingPanel
          className={cx(`${prefix}--userprofile-menu`, {
            [`${prefix}--userprofile-menu__open`]: open
          })}
          style={{
            top: `${positionTop}px`,
            bottom: `${positionBottom}px`,
            left: `${positionLeft}px`,
            right: `${positionRight}px`
          }}
        >
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
              <Body type="body-02" className={`${prefix}--userprofile-subname`}>
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
        </FloatingPanel>
      </OutsideClickListener>
    </>
  );
};

export default React.forwardRef(UserProfile);
