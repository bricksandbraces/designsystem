import React, { useState } from "react";
import cx from "classnames";
import Link from "../Link/Link";
import Button from "../Button/Button";

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
        className={cx("userprofile", { "userprofile--open": open })}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div
          className="userprofile--avatar"
          style={{
            backgroundImage: `url(${imgUrl})`
          }}
        >
          {!imgUrl && name.charAt(0).toUpperCase()}
        </div>
      </button>
      <div
        className={cx("userprofile--menu", { "userprofile--menu-open": open })}
      >
        <div className="userprofile--menu-user">
          <div
            className="userprofile--menu-avatar"
            style={{
              backgroundImage: `url(${imgUrl})`
            }}
          >
            {!imgUrl && name.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="userprofile--name">{name}</p>
            <p className="userprofile--subname">{subName}</p>
            {links && (
              <div className="userprofile--linklist">
                {links
                  .map((link, i) => {
                    return (
                      <div
                        // eslint-disable-next-line react/no-array-index-key
                        key={`profile-links-${i}-${link.href}`}
                        className="userprofile--link"
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
        <hr className="userprofile--divider" />
        <Button onClick={onLogout} fluid>
          Sign out
        </Button>
      </div>
    </>
  );
};

export default UserProfile;
