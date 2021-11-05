import { useRef } from "react";

const useConstant = <T,>(value: T) => {
  const ref = useRef(value);
  return ref.current;
};

export default useConstant;
