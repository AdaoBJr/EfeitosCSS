import { useCallback, useEffect, useState } from 'react';

export default function useApp() {
  const [showElement, setShowElement] = useState(undefined);
  const [isDesktop, setIsDesktop] = useState(undefined);

  console.log('ELEMENT', showElement);

  const showCollapse = useCallback(
    ({ target: { name } }) => {
      const elementName = Number(name);
      if (!showElement || elementName !== showElement) return setShowElement(elementName);
      if (showElement) return setShowElement(undefined);
    },
    [showElement, setShowElement]
  );

  const checkWindowsSize = useCallback(() => {
    const MIN_WIDTH = 641;
    const screenWidth = window.innerWidth;

    if (screenWidth >= MIN_WIDTH) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, [isDesktop, setIsDesktop]);

  // ---------------------------------------------------------------------------------------------
  useEffect(checkWindowsSize, []);
  window.addEventListener('resize', () => checkWindowsSize());

  // ---------------------------------------------------------------------------------------------

  return { showCollapse, showElement, isDesktop };
}
