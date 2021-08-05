import React, { ReactElement, useEffect, useRef } from "react";

type OutsideClickListenerProps = {
  children: ReactElement<any, string>;
  disabled?: boolean;
  onClickOutside: (event: any) => void;
};

const OutsideClickListener = ({
  children,
  disabled = false,
  onClickOutside
}: OutsideClickListenerProps) => {
  const elementRef = useRef<any>();

  const handleGlobalClick = (event: Event) => {
    const { current } = elementRef;
    event.stopImmediatePropagation();

    if (!disabled && current?.contains && !current?.contains(event.target)) {
      onClickOutside(event);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleGlobalClick);

    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, [disabled]);

  return React.cloneElement(children, {
    ref: elementRef
  });
};

export default OutsideClickListener;
