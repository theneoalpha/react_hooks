# React Hooks Concepts

    Common React Hooks

            Here are some of the most commonly used React Hooks:
            useState: Allows you to use state in a functional component.
            useEffect: Allows you to perform side effects in a functional component, such as fetching data from an API or updating the document title.
            useContext: Allows you to use context in a functional component.
            useReducer: Allows you to use a reducer to manage state in a functional component.
            useCallback: Allows you to memoize a function so that it only changes when its dependencies change.
            useMemo: Allows you to memoize a value so that it only changes when its dependencies change.
            useRef: Allows you to create a mutable ref object that persists for the lifetime of the component.

    Best practices for using React Hooks

            Here are some best practices for using React Hooks:
            Only use React Hooks at the top level of a functional component or custom hook.
            Use the useEffect hook to manage side effects, such as fetching data from an API or updating the document title.
            Use the useCallback hook to memoize functions that are passed as props to child components.
            Use the useMemo hook to memoize values that are expensive to compute.
            Use the useContext hook to pass data down the component tree without having to pass props through every level.
            Use the useReducer hook to manage complex state that can't be managed with the useState hook.






# React Hooks Working

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



    "useContext" and "Context API" 

        - Generally used to pass Data from Parent to superChild or more 
        - Also we can pass data in negihbour also    
        - Redux is also doing same thing but redux is another library which we need to import
        - ContextAPI/useContext inbuilt in react as hooks


        Steps to use

            Step 1 : Import createContext hook in App component     
            Step 2 : createContext hook always initalise in outside the app function                    NOTE : IMPORTANT 
            Step 3 : Wrapper banana padega jaha jaha use karna hai 
                        as we want to use in child and superchild so App comonent me <GlobalInfo.Provider> wrapper ke andar wrap karenge

            Step 4 : Data pass karenge           

            Step 5: Lets access in Child  and for this we use "useContext" Hook

                    Step 5.1 : Import karenge global variable ko child component me and use Karenge

           SUCCESSFULLY COMPLETED             


        Steps to use Reverse - Data passing from child to component

            Step 6 : Parent component me function banayenge jo child se data lake dega       

            Step 7 : uss Function ko "getDay" import karenge SuperChild me      

            Step 8 : Day variable data ko button ke through getDay function ko pass karenge

            Step 9 : Now uss day ko use Karenge App comonent me 

            SUCCESSFULLY COMPLETED


    "useReducer Hooks"

        - Advance version of useState
        - isme baar baar multiple useState nahi banane padhte
        - useReducer hook 2 argument leta hai ek function eg. reducer and another is initalState
            const [state, dispatch] = useReducer(reducer, initalState)     

        - Jo function hota hai usse outSide App() ke banate hai just like useContext hook   



        Steps to use 

            Step 1 : useReducer hook import karenge App component me     

            Step 2 : useReducer banayenge just like useState , yaha setState ki place pe dispatch use karte hai

            Step 3 : dispatch(setState) use karenge button me

                Step 3.1 : Dispatch object ke form me data leta hai 

                            dispatch({type: "Increment"})


            Step 4 : reducer function banayenge outside the app component

                Step 4.1 : ye function bhi 2 aurgument leta hai - state and action

                            State - it store the inital state value
                            Action - it store the action which we are going to pass

                Step 4.2 : Actions define karege            




            SUCCESSFULLY COMPLETED        
                            