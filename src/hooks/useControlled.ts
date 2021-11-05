import { useRef } from "react";

const useControlled = (value: any) => {
  const ref = useRef(value !== undefined);
  return ref.current;
};

export default useControlled;
