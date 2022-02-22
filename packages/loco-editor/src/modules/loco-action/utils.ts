type ElementPlus = Element & {
  __currentObserver?: IntersectionObserver;
};

export const bindObserver = (
  element: ElementPlus,
  inCallback: () => void,
  outCallback?: () => void,
  options?: IntersectionObserverInit
) => {
  const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      if (entries.length) {
        const entry = entries[entries.length - 1];
        if (entry) {
          const isInElement = entry.isIntersecting;
          isInElement ? inCallback() : outCallback?.();
        }
      }
    },
    options
  );

  unbindObserver(element);

  observer.observe(element);
  element.__currentObserver = observer;
};

export const unbindObserver = (element: ElementPlus) => {
  element.__currentObserver?.unobserve(element);
};
