import React, { useEffect, useState } from "react";

interface Props {}

export const WindowResizeEventHandler = (props: Props) => {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  const handeWindowResize = () => setWindowSize(window.innerWidth);

  useEffect(() => {
    // state degisince return method undan sonra bu method yine call edilecek
    // window un resize event ine bind olunacak. yoksa tekrar tekrar event a bind olunur, ve browser i yorariz.
    window.addEventListener("resize", handeWindowResize);

    // state degisince ilk olarak bu method call edilecek, remove islemi yapilacak.
    return () => {
      window.removeEventListener("resize", handeWindowResize);
    };
  }, [windowSize]);

  return (
    <div>
      <h2>WindowResizeEventHandler</h2>
      <h3>{windowSize}</h3>
    </div>
  );
};
