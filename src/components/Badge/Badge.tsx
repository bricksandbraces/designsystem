import React, { ReactNode } from "react";
import { IconX } from "@tabler/icons";
import cx from "classnames";
import Typography from "../Typography/Typography";

type BadgeProps = {
  /**
   * Message that is shown.
   */
  children?: string | ReactNode;

  /**
   * ClassName
   */
  className?: string;

  /**
   * Title
   */
  title: string;

  /**
   * Type
   */
  type?:
    | "red"
    | "yellow"
    | "purple"
    | "warm-gray"
    | "cold-gray"
    | "cyan"
    | "blue"
    | "orange"
    | "green";

  /**
   * onClose function
   */
  onClose?: (event: any) => void;

  /**
   * onClick Function
   */
  onClick?: (event: any) => void;
};

const Badge = ({
  children,
  className,
  onClose,
  onClick,
  type = "warm-gray",
  title = "clear"
}: BadgeProps) => {
  return (
    <>
      {onClick ? (
        <button
          aria-label={title}
          type="button"
          className={cx(
            "badge",
            {
              "badge--red": type === "red",
              "badge--red-interactive": type === "red" && onClick,
              "badge--green": type === "green",
              "badge--green-interactive": type === "green" && onClick,
              "badge--orange": type === "orange",
              "badge--orange-interactive": type === "orange" && onClick,
              "badge--yellow": type === "yellow",
              "badge--yellow-interactive": type === "yellow" && onClick,
              "badge--purple": type === "purple",
              "badge--purple-interactive": type === "purple" && onClick,
              "badge--cyan": type === "cyan",
              "badge--cyan-interactive": type === "cyan" && onClick,
              "badge--blue": type === "blue",
              "badge--blue-interactive": type === "blue" && onClick,
              "badge--warm-gray": type === "warm-gray",
              "badge--warm-gray-interactive": type === "warm-gray" && onClick,
              "badge--cold-gray": type === "cold-gray",
              "badge--cold-gray-interactive": type === "green" && onClick
            },
            className
          )}
        >
          <div className="badge--content">
            <Typography type="span" token="label">
              {children}
            </Typography>
          </div>
        </button>
      ) : (
        <div
          className={cx(
            "badge badge--red",
            {
              "badge--red": type === "red",
              "badge--green": type === "green",
              "badge--orange": type === "orange",
              "badge--yellow": type === "yellow",
              "badge--purple": type === "purple",
              "badge--cyan": type === "cyan",
              "badge--blue": type === "blue",
              "badge--warm-gray": type === "warm-gray",
              "badge--cold-gray": type === "cold-gray"
            },
            className
          )}
        >
          <div className="badge--content">
            <Typography type="span" token="label">
              {children}
            </Typography>
            {onClose && (
              <button
                type="button"
                tab-index={0}
                className="badge--close"
                aria-label={title}
                onClick={onClose}
              >
                <IconX size={12} stroke={2} strokeLinejoin="miter" />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Badge;
