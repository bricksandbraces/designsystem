import React, { ReactElement, useEffect, useRef } from "react";

type OutsideClickListenerProps = {
  children: ReactElement<any, string>;
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
  onClickOutside
}: OutsideClickListenerProps) => {
  const elementRef = useRef<any>();

  const handleGlobalClick = (event: any) => {
    const { current } = elementRef;
    if (current?.contains && !current?.contains(normalizeEventTarget(event))) {
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
