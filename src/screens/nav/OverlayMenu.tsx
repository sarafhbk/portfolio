import React, { useEffect, useRef } from "react";
import useMenuState from "../../hooks/useMenuState";
import gsap from "gsap";

function OverlayMenu() {
  const overlay_ref = useRef(null);
  const { openMenu } = useMenuState();

  useEffect(() => {
    if (openMenu) {
      gsap.to(overlay_ref?.current, {
        duration: 0.3,
        height: "100%",
      });
    } else {
      gsap.to(overlay_ref?.current, {
        duration: 0.3,
        height: 0,
      });
    }
  }, [openMenu]);

  return (
    <div
      ref={overlay_ref}
      className="fixed top-0 left-0 w-full h-0 bg-black origin-top"
    ></div>
  );
}

export default OverlayMenu;
