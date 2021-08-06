/* eslint-disable import/prefer-default-export */
import { KeyboardEvent } from "react";

function filterForKeys(
  keys: string[],
  callback?: (event: KeyboardEvent) => void
): (event: KeyboardEvent) => void {
  return (event: KeyboardEvent) => {
    if (keys.includes(event.key)) {
      callback?.(event);
    }
  };
}

export { filterForKeys };
