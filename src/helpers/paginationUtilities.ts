/**
 *
 * @param totalPages
 * @param pagesToShow
 * @param currentIndex
 * @returns the position of the currentIndex within the pagesToShow array.
 * Together with the currentIndex it can be used to generate the pages offset
 */
const calcVisibleCurrentPageIndex = (
  totalPages: number,
  pagesToShow: number,
  currentIndex: number
): number => {
  // break-out condition: invalid function usage
  if (pagesToShow > totalPages) {
    throw new Error("pagesToShow must be smaller or equal to totalPages");
  } else if (totalPages === 0 || pagesToShow === 0) {
    throw new Error("pagesToShow and totalPages must be higher than 0");
  } else if (currentIndex < 0 || currentIndex > totalPages - 1) {
    throw new Error(
      "currentIndex must lay within the totalPages range. Was " + currentIndex
    );
  }

  let pagesRemaining = pagesToShow - 1;

  // trivial case: show single page
  if (pagesRemaining === 0) {
    return 0;
  }

  // trivial case: show all pages
  if (pagesToShow === totalPages) {
    return currentIndex;
  }

  const idealValue = Math.abs(
    Math.floor(pagesToShow / 2) - (pagesToShow % 2 === 0 ? 1 : 0)
  ); // subtract the currentPage

  // check left space up to ideal
  const idealLeftCount = Math.min(currentIndex, idealValue);
  pagesRemaining -= idealLeftCount;
  let returnIndex = idealLeftCount;
  if (pagesRemaining > 0) {
    // check right space up to ideal
    const idealRightCount = Math.min(totalPages - currentIndex - 1, idealValue);
    pagesRemaining -= idealRightCount;

    if (pagesToShow % 2 === 0 && pagesRemaining === 1) {
      // if right has another slot free
      if (currentIndex + idealRightCount + 1 <= totalPages - 1) {
        pagesRemaining -= 1;
      } else {
        // else take the spot from the left
        returnIndex -= 1;
      }
      pagesRemaining -= 1;
    }

    if (pagesRemaining > 0) {
      // check left space up to maximum. All left or nothing
      const maxLeftAddition = Math.max(
        0,
        currentIndex - idealLeftCount - pagesRemaining
      );
      pagesRemaining -= maxLeftAddition;
      returnIndex = idealLeftCount + maxLeftAddition;

      if (pagesRemaining > 0) {
        const maxRightAddition =
          Math.min(totalPages - 1, currentIndex + pagesRemaining) -
          idealRightCount;
        pagesRemaining -= maxRightAddition;

        // 0 pages remaining here when pagesToShow was odd
        if (
          pagesRemaining &&
          maxRightAddition + idealRightCount <= totalPages - 1
        ) {
          // this check reduces remaining to one if the single addition for the even pagesToShow fits into the right side.
          pagesRemaining -= 1;
        }
      }
    }
  }

  return returnIndex;
};

/**
 *
 * @param totalPages
 * @param pagesToShow
 * @param currentIndex
 * @returns An array of the visible Pages
 */
const generateVisiblePagesArray = (
  totalPages: number,
  pagesToShow: number,
  currentIndex: number
) => {
  const j = calcVisibleCurrentPageIndex(totalPages, pagesToShow, currentIndex);
  const pageOffset = currentIndex - j;
  return new Array(pagesToShow).fill("").map((_, index) => {
    return pageOffset + index;
  });
};

export { generateVisiblePagesArray, calcVisibleCurrentPageIndex };
