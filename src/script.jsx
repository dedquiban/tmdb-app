import { useEffect } from 'react';

function InlineStyleComponent(props) {
  useEffect(() => {
    const scriptTag = document.createElement('script');

    scriptTag.src = 'https://kit.fontawesome.com/3b2b045606.js';
    scriptTag.async = true;

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  return;
}

export default InlineStyleComponent;
