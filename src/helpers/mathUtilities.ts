/* eslint-disable import/prefer-default-export */

/**
 * Math polyfill function to clamp a value between min and max.
 *
 * @param val The value to clamp
 * @param min Lower border
 * @param max Upper border
 * @returns The clamped value
 */
export function clamp(val: number, min: number, max: number) {
  return Math.max(min, Math.min(val, max));
}
