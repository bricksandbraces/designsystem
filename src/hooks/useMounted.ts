import { useEffect, useRef, useState } from "react";

/**
 * Provides a ref value passively to the calling component.
 *
 * @returns false before the component is mounted, true while mounted and false after unmounted
 */
const useMountedPassive = () => {
  const mounted = useRef<boolean>(false);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  return mounted.current;
};

/**
 * Provides an active value defining if the component is mounted or not.
 * The initial mount will trigger a rerendering of the component.
 *
 * @returns false before the component is mounted, true while mounted. Ignores unmounts.
 */
const useMounted = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    // no unmount listener as we should not update the state of a component while unmounting.
  }, []);

  return mounted;
};

export { useMounted, useMountedPassive };
