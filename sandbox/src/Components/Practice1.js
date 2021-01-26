import React, { useState }from 'react';

const Practice1 = () => {

    const [count, setCount] = useState(0)

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click Me
            </button>
        </div>
    );
};

export default Practice1;