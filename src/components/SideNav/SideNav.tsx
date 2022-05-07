import cx from "classnames";
import React from "react";
import { filterForKeys } from "../../helpers/keyboardUtilities";
import { useControlledValue } from "../../hooks/useControlled";
import { prefix } from "../../settings";

export type SideNavProps = {
  /**
   * SideNav Children
   */
  children: React.ReactNode;

  /**
   * SideNav Action
   */
  action?: React.ReactNode;

  /**
   * SideNav Open
   */
  open?: boolean;

  /**
   * SideNav Collapsed
   */
  collapsed?: boolean;

  /**
   * SideNav DefaultOpen
   */
  defaultOpen?: boolean;

  /**
   * SideNav OnOpenChange
   */
  onOpenChange?: (newOpen: boolean) => void;

  /**
   * SideNav Logo
   */
  logo: React.ReactNode | SVGElement;

  onLogoClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;

  /**
   * SideNav LogoAlt
   */
  logoAlt?: string;

  /**
   * SideNav Basepath
   */
  basePath?: string;
};

export const SideNav = React.forwardRef(function SideNav(
  {
    open,
    defaultOpen,
    onOpenChange,
    onLogoClick,
    action,
    logo,
    collapsed,
    children,
    basePath,
    logoAlt = "Logo"
  }: SideNavProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const [currentlyOpen, setSideNavOpen] = useControlledValue(
    open,
    defaultOpen,
    onOpenChange,
    false
  );
  const logoContent =
    typeof logo === "string" ? <img alt={logoAlt} src={`${logo}`} /> : logo;

  return (
    <>
      <nav
        ref={ref}
        className={cx(`${prefix}--sidenav`, {
          [`${prefix}--sidenav-open`]: currentlyOpen,
          [`${prefix}--sidenav-collapsed`]: collapsed
        })}
      >
        <div className={cx(`${prefix}--sidenav-head`)}>
          {basePath ? (
            <a href={basePath} className={cx(`${prefix}--sidenav-logo`)}>
              {logoContent}
            </a>
          ) : (
            <button
              onClick={onLogoClick}
              className={cx(`${prefix}--sidenav-logo`)}
            >
              {logoContent}
            </button>
          )}
          {action}
        </div>
        {children}
      </nav>
      <div
        role="button"
        className={cx(`${prefix}--sidenav-overlay`)}
        tabIndex={0}
        onKeyDown={filterForKeys(["Enter", " "], () => {
          setSideNavOpen(false);
        })}
        onClick={() => {
          setSideNavOpen(false);
        }}
      />
    </>
  );
});
