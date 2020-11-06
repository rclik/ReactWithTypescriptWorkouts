import React, { ReactElement, useEffect } from "react";

interface Props {}

export const UseHookWithNoDependencyArrayForOtherProps: React.FC<Props> = (
  props: Props
): ReactElement => {
  let count = 0;

  useEffect(() => {
    console.log("[UseHookWithNoDependencyArrayForOtherProps] useEffect void function is called with state count: " + count);
    return () => {
      console.log(
        "[UseHookWithNoDependencyArrayForOtherProps] useEffect return function is called with state count: " + count
      );
    };
  });

  const handleOnClick = (): void => {
    count = count + 1;
    console.log("[UseHookWithNoDependencyArrayForOtherProps] button is clicked count :>> ", count);
  };

  // bu log u buraya yazsam da, ilk olarak bu log ekrana basilacaktir. Cunku, useEffect callback function i mount zamaninda call edilecektir. Su anda render islemi basladi sadece.
  console.log("[UseHookWithNoDependencyArrayForOtherProps] starting to rendering");

  return <div><h2>UseHookWithNoDependencyArrayForOtherProps</h2><button onClick={handleOnClick}>Click me!</button></div>;
};
