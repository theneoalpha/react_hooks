# React Hooks Concepts

    "useState" Hooks 

        - used for data updates
        - Called at componentWillUpdate LCM

        syntax
            const [count, setCount] = useState(0);

    "useEffect" Hooks

        - Generally  used for API calls
        - Called at componentWillMount, componentWillUpdate and also in componentWillUnmount
        - automatically called once

        syntax

            useEffect(() => {
                setNumber(number + 1);
            },
            [count, digit]);      