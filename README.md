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



    "useContext" and "Context API" 

        - Generally used to pass Data from Parent to superChild or more 
        - Also we can pass data in negihbour also    
        - Redux is also doing same thing but redux is another library which we need to import
        - ContextAPI/useContext inbuilt in react as hooks


        Steps to use

            Step 1 : Import contextAPI in App component     
            Step 2 : createContext hook always initalise in outside the app function                    NOTE : IMPORTANT 
            Step 3 : Wrapper banana padega jaha jaha use karna hai 
                        as we want to use in child and superchild so App comonent me <GlobalInfo.Provider> wrapper ke andar wrap karenge

            Step 4 : Data pass karenge           

            Step 5: Lets access in Child  and for this we use "useContext" Hook

                    Step 5.1 : Import karenge global variable ko child component me and use Karenge