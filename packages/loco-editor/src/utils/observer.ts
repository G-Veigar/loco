type ElementPlus = Element & {
  __currentObserver?: IntersectionObserver;
};

export const bindObserver = (element: ElementPlus, inCallback: () => void, outCallback?: () => void) => {
  const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
    if (entries.length) {
      const entry = entries[entries.length - 1]
      if (entry) {
        const isInElement = entry.isIntersecting
        if (isInElement) {
          inCallback()
        } else {
          outCallback && outCallback()
        }
      }
    }
  })

  unbindObserver(element)

  observer.observe(element)
  element.__currentObserver = observer
}

export const unbindObserver = (element: ElementPlus) => {
  if (element.__currentObserver) {
    element.__currentObserver.unobserve(element)
  }
}
