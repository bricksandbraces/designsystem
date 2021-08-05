import React, { ReactElement, useEffect, useRef } from "react";

type OutsideClickListenerProps = {
  children: ReactElement<any, string>;
  disabled?: boolean;
  onClickOutside: (event: any) => void;
};

function normalizeEventTarget(evt: any) {
  // shadow dom
  if (evt.composed && typeof evt.composedPath === "function") {
    return evt.composedPath()[0];
  }
  return evt.target;
}

const OutsideClickListener = ({
  children,
  disabled = false,
  onClickOutside
}: OutsideClickListenerProps) => {
  const elementRef = useRef<any>();

  const handleGlobalClick = (event: any) => {
    const { current } = elementRef;
    if (
      !disabled &&
      current?.contains &&
      !current?.contains(normalizeEventTarget(event))
    ) {
      onClickOutside(event);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleGlobalClick);

    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  return React.cloneElement(children, {
    ref: elementRef
  });
};

export default OutsideClickListener;
