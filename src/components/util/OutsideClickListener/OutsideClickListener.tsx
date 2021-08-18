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
  const elementRef = useRef<HTMLElement>();

  const handleGlobalClick = (event: Event) => {
    const { current } = elementRef;

    if (
      !disabled &&
      current?.contains &&
      !current?.contains(event.target as Node)
    ) {
      onClickOutside(event);
    }
  };

  // todo: shouldn't document.addEventListener only be called once OR if disabled is false?
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
