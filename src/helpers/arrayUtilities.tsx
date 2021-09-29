import hash from "object-hash";
import { useEffect, useRef } from "react";

/**
 * Helper function used for up/down navigation on an array list.
 * Searches for the next item meeting a given condition in a direction of an array.
 * If the direction does not find an item meeting the condition then the half of the array will be searched (from the same direction).
 *
 * @param array The array to search in
 * @param filterPredicate The condition the element
 * @param sliceIndex Defining which half should be searched first
 * @param upwards True if the search should use the direction increasing the index.
 *
 * @returns If no elmeent matches the condition, empty object is returned. Else: `{ item?: T; index?: number }`
 */
const findNextItem = <T,>(
  array: Array<T>,
  filterPredicate: (item: T) => boolean,
  sliceIndex: number,
  upwards: boolean
): { item?: T; index?: number } => {
  // if no element matches the predicate, break in order to avoid an endless loop
  if (array.every((el) => !filterPredicate(el))) {
    return {};
  }
  const enrichedArray = array.map((el: T, i: number) => ({
    ...el,
    originalIndex: i
  }));

  const searchSlice = upwards
    ? enrichedArray.slice(sliceIndex + 1)
    : enrichedArray.slice(0, sliceIndex);
  const filteredSlice = searchSlice.filter(filterPredicate);
  const nextItem = upwards
    ? filteredSlice[0]
    : filteredSlice[filteredSlice.length - 1];
  return nextItem
    ? { index: nextItem.originalIndex, item: array[nextItem.originalIndex] }
    : findNextItem(
        array,
        filterPredicate,
        upwards ? -1 : array.length,
        upwards
      );
};

export type IdentifiableObject<T extends Record<string, any>> = T & {
  id: string;
};

function idfy<T extends number | string | boolean>(
  arr?: T[]
): IdentifiableObject<T>[] {}

/**
 * Prepares an array for react key indexing.
 * Returns a lifecycle-persisted array with id prop that only changes if the array changes.
 *
 * @param arr the array to index
 * @param generateId optional key generation function for even more efficient key inference
 * @returns the original array with id key as additional properties
 */
function idfy<T extends Record<string, any>>(
  arr?: T[],
  generateId?: (el: T) => string
): IdentifiableObject<T>[] {
  const generateDefaultId = (
    el: T,
    lastArr?: IdentifiableObject<T>[]
  ): string => {
    const existingElement = lastArr?.find((el2) => el === el2);
    if (existingElement) {
      return existingElement.id;
    }
    return hash(el ?? null);
  };

  const prepareArray = (
    lastArray?: IdentifiableObject<T>[]
  ): IdentifiableObject<T>[] => {
    // fallback: if all of the elements already have id's, on need to generate new.
    if (arr?.every((el) => el?.id)) {
      return arr as IdentifiableObject<T>[];
    }
    // native id's will be used first, custom generation function second, else default generation function
    return (
      arr?.map((el) => ({
        ...el,
        id: el?.id
          ? el.id
          : generateId?.(el) ?? generateDefaultId(el, lastArray)
      })) ?? []
    );
  };

  const arrRef = useRef<IdentifiableObject<T>[]>(prepareArray());

  useEffect(() => {
    arrRef.current = prepareArray(arrRef.current);
  }, [arr]);

  return arrRef.current;
}

export { findNextItem, idfy };
