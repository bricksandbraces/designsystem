/* eslint-disable import/prefer-default-export */

/**
 * Filters the keyboard events from the event source for a list of keys. If any key matches the event, the callback is called.
 *
 * @param keys An array of the keys that should trigger the callback
 * @param callback The callback to execute
 * @returns Another callback that can be passed to e.g. onKeyDown
 */
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
