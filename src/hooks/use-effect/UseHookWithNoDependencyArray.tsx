import React, { ReactElement, useEffect, useState } from "react";

interface Props {}

export const UseHookWithNoDependencyArray: React.FC<Props> = (
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
  });

  const handleOnClick = (): void => {
    setCount(count + 1);
    console.log("button is clicked count :>> ", count);
  };

  // bu log u buraya yazsam da, ilk olarak bu log ekrana basilacaktir. Cunku, useEffect callback function i mount zamaninda call edilecektir. Su anda render islemi basladi sadece.
  console.log("starting to rendering");

  return <div><h2>UseHookWithNoDependencyArray</h2><button onClick={handleOnClick}>Click me!</button></div>;
};
