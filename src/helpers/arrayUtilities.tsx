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

// eslint-disable-next-line import/prefer-default-export
export { findNextItem };
