import React, { ReactElement, useEffect, useState } from "react";

interface Props {}

export const UseHookWithOneDependency: React.FC<Props> = (
  props: Props
): ReactElement => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("useEffect void function is called with state count: " + count);
    return () => {
      console.log(
        "useEffect return function is called with state count: " + count
      );
    };
  }, [count]);

  const handleOnClick = (): void => {
    setCount(count + 1);
    console.log("button is clicked count :>> ", count);
  };

  console.log("starting to rendering");

  return <button onClick={handleOnClick}>Click me!</button>;
};
