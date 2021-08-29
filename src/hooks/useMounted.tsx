import { useEffect, useRef } from "react";

export default function useMounted(): boolean {
  const mounted = useRef<boolean>(false);

  useEffect(() => {
    mounted.current = true;
  }, []);

  return mounted.current;
}
