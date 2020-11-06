import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { UseHookWithEmptyDependencyArray } from "./UseHookWithEmptyDependencyArray";
import { UseHookWithNoDependencyArray } from "./UseHookWithNoDependencyArray";
import { UseHookWithNoDependencyArrayForOtherProps } from "./UseHookWithNoDependencyArrayForOtherProps";
import { UseHookWithOneDependecy } from "./UseHookWithOneDependecy";
import { WindowResizeEventHandler } from "./WindowResizeEventHandler";

interface Props {}

/**
 * useEffect state veya prop degistiginde call edilir. Bunlari, component life-cycle i gibi dusunebilirsin.
 * Component life-cycle method lari daha fazladir. Use effect hook u ile component load olurken, ve unload olurken calistirilacak function lari yazabilirsin.
 * Bazi durumlara gore ise, componentUnMount componentMount life-cycle larini elde edebilirizin.
 *
 * useEffect, dependent oldugu property lerin degisikliklerine bind olur, bir degisim olunca kendisi icindeki iki adet function i call eder.
 *
 * useEffect in icinde bir void kisim vardir, bir de return kisimi vardir.
 *
 * void kisimi, sayfa render edilmeden hemen once call edilir. return kismi ise, tekrar render edilmeden once call edilir, Return function i clear function i olarak kullanilir.
 *
 * Ilk durumumuz; useEffect e depdency vermeden calistiralim, ve sonuclara bakalim;
 *  - UseHookWithNoDependencyArray
 *      Bu durumda, ortamdaki herhangi bir state ya da prop object i guncellenirse, useEffect method lari call edilir.
 *      return method u, re-render edilirken, bir onceki render isleminin temizligi icin call edilir. Yani ilk olarak component un-mount edilir. Sonra mount edilir. bir onceki state ile calisir. baska component a gecilse de, render method u call edildikten sonra cagirilir. Yine temizlik islemlerini burada halledebiliriz.
 *      void method u ise, tum render ve re-render islemlerinde olurken call edilir. Re-render isleminde return method undan once call edilir.
 *
 * Ikinci durum; useEffect state disinda normal property icin de ayni sekilde calisiyor mu?
 *      calismamasi lazim, cunku render a neden olacak bir durum ortada yok. Ayni o sekilde call ediliyor. -- calismiyor.
 *
 * Ucuncu durum; useEffect dependency array i bos olsun;
 *      Bu durumda,
 *          - return method, component re-render oldugunda calismayacak ama baska bir component e giderken calisacak.
 *          - void kisim ise, ilk component mount edilirken call edilecek sonraki re-render islemlerinde call edilmeyecek.
 *          state degistiginden, render method u her zaman call edilir ama useEffect method lari call edilmez.
 *
 * * Ucuncu durum; useEffect dependency array i icinde bir tane state olsun;
 *      Diger state lerin durumuna bagli olmadan, dependency degisince, tum function lar call edilir.
 *
 *
 * Sonuc olarak, ilk olarak render mehtodu call ediliyor, sonra, render method i icindeki return method u call edilmeye baslayinca, eger re-render veya baska component a gecis yapiliyorsa useEffect in return method u cagiriliyor sonrasinda eger render ediliyorsa veya re-render ediliyorsa useEffect in void kismi cagiriliyor.
 *
 */

export const UseEffectHookSamples = (props: Props) => {
  return (
    // <div>
    //   <h1>useEffect Hook examples</h1>

    //   <button onClick={handleClick}>Click me {count}</button>
    // </div>

    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/windowWithDemno">
                Handling Window resize event with useEffect
              </Link>
            </li>
            <li>
              <Link to="/withNoDependency">
                useEffect with no dependency array
              </Link>
            </li>
            <li>
              <Link to="/withNoDependencyForNormalProps">
                useEffect with no dependency array but normal property
              </Link>
            </li>
            <li>
              <Link to="/withEmptyDependencyArray">
                useEffect with empty dependecy array
              </Link>
            </li>
            <li>
              <Link to="/withOneDependency">
                useEffect with one dependecy
              </Link>
            </li>
          </ul>
        </nav>

        <Route
          path="/windowWithDemno"
          exact
          component={WindowResizeEventHandler}
        ></Route>
        <Route
          path="/withNoDependency"
          component={() => <UseHookWithNoDependencyArray />}
        />
        <Route
          path="/withNoDependencyForNormalProps"
          component={() => <UseHookWithNoDependencyArrayForOtherProps />}
        />
        <Route
          path="/withEmptyDependencyArray"
          component={() => <UseHookWithEmptyDependencyArray />}
        />
        <Route
          path="/withOneDependency"
          component={() => <UseHookWithOneDependecy />}
        />
      </div>
    </Router>
  );
};
