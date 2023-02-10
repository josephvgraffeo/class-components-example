import { useState, useEffect } from "react";

export default function CountHooks() {
    const [count, setCount] = useState(0);
    const [title, setTitle] = useState('Welcome2');
    useEffect(() => {
        setTitle('Our New Title2')
    }, [])

    return (
        <section>
            <h2>{title}</h2>
            <h3>You clicked {count} times</h3>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
        </section>
    )
}