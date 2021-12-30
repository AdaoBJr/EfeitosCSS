import { useCallback, useState } from 'react';

export default function useApp() {
  const [showElement, setShowElement] = useState('');

  console.log('ELEMENT', showElement);

  const showCollapse = useCallback(
    ({ target: { name } }) => {
      setShowElement(name);
    },
    [showElement]
  );

  return { showCollapse, showElement };
}
