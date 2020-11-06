import React, { ReactElement, useEffect, useState } from "react";

interface Props {}

export const UseHookWithEmptyDependencyArray: React.FC<Props> = (
  props: Props
): ReactElement => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("[UseHookWithEmptyDependencyArray] useEffect void function is called");
    return () => {
      console.log(
        "[UseHookWithEmptyDependencyArray] useEffect return function is called");
    };
  }, []);

  const handleOnClick = (): void => {
    setCount(count + 1);
    console.log("[UseHookWithEmptyDependencyArray] button is clicked count :>> ", count);
  };

  // bu log u buraya yazsam da, ilk olarak bu log ekrana basilacaktir. Cunku, useEffect callback function i mount zamaninda call edilecektir. Su anda render islemi basladi sadece.
  console.log("[UseHookWithEmptyDependencyArray] starting to rendering");

  return <div><h2>UseHookWithEmptyDependencyArray</h2><button onClick={handleOnClick}>Click me!</button></div>;
};
