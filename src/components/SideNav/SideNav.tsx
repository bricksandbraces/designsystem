import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import { useControlledValue } from "../../hooks/useControlled";
import { filterForKeys } from "../../helpers/keyboardUtilities";

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

const SideNav = (
  {
    open,
    defaultOpen,
    onOpenChange,
    onLogoClick,
    action,
    logo,
    children,
    basePath,
    logoAlt = "Logo"
  }: SideNavProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
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
          [`${prefix}--sidenav-open`]: currentlyOpen
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
};

export default React.forwardRef(SideNav);
