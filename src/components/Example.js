import React, {useState} from "react";

const Example = () => {

    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You click {count} time </p>
            <button onClick={()=> setCount( count + 1 )}> CLick me </button>
        </div>
    );
}

export default Example;