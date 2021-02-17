import React, { useState } from 'react';

const Practice2 = () => {

    const [toggle, toggleControl] = useState("OFF")

    return (
        <div>
            <button onClick={()=> toggleControl(toggle  === "OFF" ? 'ON' : 'OFF')}>{toggle}</button>
        </div>
    );
};

export default Practice2;