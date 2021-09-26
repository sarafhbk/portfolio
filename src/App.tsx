import React, { MutableRefObject, useRef } from "react";
import Cursor from "./components/Cursor";
import Header from "./components/Header";
import Landing from "./screens/home/sections/Landing";

const App = () => {
  const cursor_ref = useRef<HTMLDivElement>(
    null
  ) as MutableRefObject<HTMLDivElement>;
  const cursor_follower_ref = useRef<HTMLDivElement>(
    null
  ) as MutableRefObject<HTMLDivElement>;

  const menu_container_ref = useRef<HTMLDivElement>(
    null
  ) as MutableRefObject<HTMLDivElement>;

  const menu_button_ref = useRef<HTMLButtonElement>(
    null
  ) as MutableRefObject<HTMLButtonElement>;

  const logo_container_ref = useRef<HTMLDivElement>(
    null
  ) as MutableRefObject<HTMLDivElement>;

  const logo_ref = useRef<HTMLHeadingElement>(
    null
  ) as MutableRefObject<HTMLHeadingElement>;

  return (
    <div className="wrapper h-full">
      <Header
        menu_container_ref={menu_container_ref}
        menu_button_ref={menu_button_ref}
        logo_container_ref={logo_container_ref}
        logo_ref={logo_ref}
        cursor_ref={cursor_ref}
        cursor_follower_ref={cursor_follower_ref}
      />
      <Cursor
        cursor_ref={cursor_ref}
        cursor_follower_ref={cursor_follower_ref}
      />
      <Landing />
    </div>
  );
};

export default App;
