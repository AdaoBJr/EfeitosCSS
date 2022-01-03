import { useCallback, useState } from 'react';

export default function useApp() {
  const [showElement, setShowElement] = useState('');

  console.log('ELEMENT', showElement);

  const showCollapse = useCallback(
    ({ target: { name } }) => {
      if (!showElement || name !== showElement) return setShowElement(name);
      if (showElement) return setShowElement('');
    },
    [showElement, setShowElement]
  );

  return { showCollapse, showElement };
}
