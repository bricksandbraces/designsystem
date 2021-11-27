/* eslint-disable import/prefer-default-export */

function filterForKeys<T>(
  keys: string[],
  callback?: (event: React.KeyboardEvent<T>) => void
): (event: React.KeyboardEvent<T>) => void {
  return (event: React.KeyboardEvent<T>) => {
    if (keys.includes(event.key)) {
      callback?.(event);
    }
  };
}

export { filterForKeys };
