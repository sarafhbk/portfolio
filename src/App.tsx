import React, { MutableRefObject, useRef } from "react";
import Cursor from "./components/Cursor";
import Header from "./components/Header";

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

  return (
    <div>
      <Header
        menu_container_ref={menu_container_ref}
        menu_button_ref={menu_button_ref}
        cursor_ref={cursor_ref}
        cursor_follower_ref={cursor_follower_ref}
      />
      <Cursor
        cursor_ref={cursor_ref}
        cursor_follower_ref={cursor_follower_ref}
      />
    </div>
  );
};

export default App;
