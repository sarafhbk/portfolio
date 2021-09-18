import React, { useEffect, useRef } from "react";
import gsap, { Back, Power4 } from "gsap";

function Cursor() {
  const cursor_ref = useRef<HTMLDivElement>(null);
  const cursor_follower_ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("mousemove", (event: MouseEvent) => {
      gsap.to(cursor_ref?.current, {
        duration: 0.3,
        x: event?.clientX,
        y: event?.clientY,
        ease: Power4.easeOut,
      });
      gsap.to(cursor_follower_ref?.current, {
        duration: 0.7,
        x: event?.clientX,
        y: event?.clientY,
        ease: Back.easeOut.config(1.7),
      });
    });
    return () => {
      window.removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    <div>
      <div
        className="fixed bg-white rounded-full w-4 h-4 -left-4 -top-4 scale-100 z-10000"
        ref={cursor_ref}
      />
      <div
        className="fixed border border-white h-12 w-12 -left-8 -top-8 rounded-full select-none pointer-events-none scale-100 z-10000"
        ref={cursor_follower_ref}
      />
    </div>
  );
}

export default Cursor;
