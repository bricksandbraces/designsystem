import React, { forwardRef, ReactElement, useEffect, useRef } from "react";
import mergeRefs from "react-merge-refs";

export type OutsideClickListenerProps = {
  children: ReactElement<any, string>;
  disabled?: boolean;
  onClickOutside: (event: MouseEvent) => void;
};

const OutsideClickListener = (
  { children, disabled = false, onClickOutside }: OutsideClickListenerProps,
  ref: React.ForwardedRef<any>
) => {
  const elementRef = useRef<HTMLElement>();

  const handleGlobalClick = (event: MouseEvent) => {
    const { current } = elementRef;

    if (
      !disabled &&
      current?.contains &&
      !current?.contains(event.target as Node)
    ) {
      onClickOutside(event);
    }
  };

  useEffect(() => {
    if (disabled) {
      document.removeEventListener("click", handleGlobalClick);
    } else {
      document.addEventListener("click", handleGlobalClick);
    }

    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, [disabled]);

  return React.cloneElement(children, {
    ref: mergeRefs([elementRef, ref])
  });
};

export default forwardRef(OutsideClickListener);
