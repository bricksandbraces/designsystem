import { RefObject, useEffect, useRef } from "react";

export default function useMounted(): RefObject<boolean> {
  const mounted = useRef<boolean>(false);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  return mounted;
}
