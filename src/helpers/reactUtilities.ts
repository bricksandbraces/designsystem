import React from "react";

/**
 * A function to easily wrap React.Children.map function.
 * Every valid child will be passed to the given map function.
 * Every child with invalid props will remain unchanged and returned while keeping its original index.
 *
 * @param children The children property of the parent element
 * @param fn The map function
 * @returns an array of mapped children
 */
const mapReactChildren = <P>(
  children: React.ReactNode,
  fn: (params: {
    props: P;
    key: React.Key | null;
    index: number;
    child: React.ReactElement<P, string | React.JSXElementConstructor<any>>;
  }) => React.ReactNode
) => {
  return React.Children.map(children, (child, index) => {
    if (!React.isValidElement<P>(child)) {
      return child;
    }
    const elementChild: React.ReactElement<P> = child;
    const { props, key } = elementChild;

    return fn({ props, key, index, child });
  });
};

export { mapReactChildren };
