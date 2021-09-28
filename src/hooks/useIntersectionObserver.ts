import { RefObject, useEffect, useRef, useState } from 'react';
import 'intersection-observer';
interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
  delay?: number;
}

function useIntersectionObserver({
  threshold = 0,
  root = null,
  rootMargin = '0%',
  freezeOnceVisible = false,
  delay = 0,
}: Args): {
  ref: RefObject<Element> | null;
  entry: IntersectionObserverEntry | undefined;
} {
  const ref = useRef<HTMLFormElement | null>(null);
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const frozen = entry?.isIntersecting && freezeOnceVisible;
  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setTimeout(() => {
      setEntry(entry);
    }, delay);
  };

  useEffect(() => {
    const node = ref?.current; // DOM Ref
    const hasIOSupport = !!window.IntersectionObserver;
    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);
    return () => observer.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, threshold, root, rootMargin, frozen]);

  return { ref, entry };
}

export default useIntersectionObserver;
