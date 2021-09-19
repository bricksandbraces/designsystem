import React, { useState } from "react";
import cx from "classnames";
import Link from "../Link/Link";
import Button from "../Button/Button";
import { prefix } from "../../settings";

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

type UserProfileProps = {
  /**
   * Name that is shown.
   */
  name: string;

  /**
   * Subname that is shown.
   */
  subName: string;

  /**
   * Link array
   */
  links?: LinkItem[];

  /**
   * Image URL
   */
  imgUrl?: string;

  /**
   * onLogout function
   */
  onLogout: (event: any) => void;
};

const UserProfile = ({
  name,
  subName,
  links,
  imgUrl,
  onLogout
}: UserProfileProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className={cx(`${prefix}--userprofile`, {
          [`${prefix}--userprofile--open`]: open
        })}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div
          className={`${prefix}--userprofile--avatar`}
          style={{
            backgroundImage: `url(${imgUrl})`
          }}
        >
          {!imgUrl && name.charAt(0).toUpperCase()}
        </div>
      </button>
      <div
        className={cx(`${prefix}--userprofile--menu`, {
          [`${prefix}--userprofile--menu-open`]: open
        })}
      >
        <div className={`${prefix}--userprofile--menu-user`}>
          <div
            className={`${prefix}--userprofile--menu-avatar`}
            style={{
              backgroundImage: `url(${imgUrl})`
            }}
          >
            {!imgUrl && name.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className={`${prefix}--userprofile--name`}>{name}</p>
            <p className={`${prefix}--userprofile--subname`}>{subName}</p>
            {links && (
              <div className={`${prefix}--userprofile--linklist`}>
                {links
                  .map((link, i) => {
                    return (
                      <div
                        // eslint-disable-next-line react/no-array-index-key
                        key={`profile-links-${i}-${link.href}`}
                        className={`${prefix}--userprofile--link`}
                      >
                        <Link href={link.href}>{link.label}</Link>
                      </div>
                    );
                  })
                  .slice(0, 3)}
              </div>
            )}
          </div>
        </div>
        <hr className={`${prefix}--userprofile--divider`} />
        <Button onClick={onLogout} fluid size="small">
          Sign out
        </Button>
      </div>
    </>
  );
};

export default UserProfile;
