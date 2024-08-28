import React, { useEffect, useState } from 'react';
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`The count is ${count}`);

    // This function returned by useEffect is a cleanup function.
    return () => {
      console.log('Cleanup for count:', count);
    };
  }, [count]); // Dependency array

  return (
    <div>
      <p>{`You clicked ${count} times`}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App;
