import { useEffect, useState } from 'react';

function Test1() {
  const [count, setCount] = useState(99);

  useEffect(() => {
    // Side effect: Setting a timer
    const timer = setInterval(() => {
      setCount(pv=>pv+1);
    }, 500);

    // Cleanup the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);  // Runs only once, after the initial render

  return <div>Count: {count}</div>;
}

export default Test1;
