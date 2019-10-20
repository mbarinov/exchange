import { useCallback, useEffect } from 'react';

export const useClickOutside = ({ containerRefs, handler, when = true }) => {
  const listener = useCallback(
    e => {
      let node = e.target;

      if (!document.querySelector('body').contains(node)) {
        return;
      }

      const matchNodes = containerRefs.map(r => r.current);

      while (node) {
        if (matchNodes.includes(node)) {
          return;
        }

        node = node.parentNode;
      }

      handler();
    },
    [containerRefs, handler],
  );

  useEffect(() => {
    if (when) {
      document.addEventListener('click', listener, true);
    }

    return () => {
      document.removeEventListener('click', listener, true);
    };
  }, [listener, when]);
};
