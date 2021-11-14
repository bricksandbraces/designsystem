import { useEffect, useRef, useState } from "react";

const useMountedPassive = () => {
  const mounted = useRef<boolean>(false);

  useEffect(() => {
    mounted.current = true;
  }, []);
  return mounted.current;
};

const useMounted = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
};

export { useMounted, useMountedPassive };
