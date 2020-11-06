import React, { ReactElement, useEffect, useState } from "react";

interface Props {}

export const UseHookWithOneDependecy: React.FC<Props> = (
  props: Props
): ReactElement => {
  const [count, setCount] = useState<number>(0);
  const [another, setAnother] = useState<number>(0);

  useEffect(() => {
    console.log("[UseHookWithOneDependecy] useEffect void function is called with state of count: " + count);
    return () => {
      console.log(
        "[UseHookWithOneDependecy] useEffect return function is called with state of count: " + count);
    };
  }, [count]);

  const handleOnClick = (): void => {
    setCount(count + 1);
    console.log("[UseHookWithOneDependecy] button is clicked count :>> ", count);
  };

  const handleAnotherOnClick = (): void => {
    setAnother(another + 1);
    console.log("[UseHookWithOneDependecy] button is clicked another :>> ", another);
  };

  // bu log u buraya yazsam da, ilk olarak bu log ekrana basilacaktir. Cunku, useEffect callback function i mount zamaninda call edilecektir. Su anda render islemi basladi sadece.
  console.log("[UseHookWithOneDependecy] starting to rendering");

  return <div><h2>UseHookWithOneDependecy</h2><button onClick={handleOnClick}>Click me!</button><button onClick={handleAnotherOnClick}>Another Click me!</button></div>;
};
