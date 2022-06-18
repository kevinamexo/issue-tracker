import { useEffect, RefObject } from "react";

type Event = MouseEvent | TouchEvent;

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  ref2: RefObject<T>,
  handler: (event: Event) => void
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;
      const el2 = ref2?.current;
      if (
        !el ||
        el.contains((event?.target as Node) || null) ||
        !el2 ||
        el2.contains((event?.target as Node) || null)
      ) {
        return;
      }

      handler(event); // Call the handler only if the click is outside of the element passed.
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, ref2, handler]); // Reload only if ref or handler changes
};

export default useOnClickOutside;
