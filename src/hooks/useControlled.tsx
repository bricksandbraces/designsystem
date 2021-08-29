import { useRef } from "react";

const useControlled = (value: any) => {
  const ref = useRef(value != null);
  return ref.current;
};

export default useControlled;
