import React from 'react'

const Text1 = () => {
    return (
        <>
            <h1>que1  :What is an event in react?</h1>
            <p>Ans:-- An event is an action that triggers as a result of the user action or system-generated event like a mouse click, loading of a web page, pressing a key, window resizes, etc. In React, the event handling system is very similar to handling events in DOM elements.</p>

            The React event handling system is known as Synthetic Event, which is a cross-browser wrapper of the browser's native event.

            Handling events with React have some syntactical differences, which are:

            React events are named as camelCase instead of      lowercase.
            With JSX, a function is passed as the event handler instead of a string.


            <h1>que2:What is memory leak and how to overcome?</h1>
            <p>ans:-  Memory leak occurs when programmers create a memory in heap and forget to delete it. The consequences of memory leak is that it reduces the performance of the computer by reducing the amount of available memory.</p>


            <h1> que3:Do you prefer function-based or class component and why ?</h1>
            <p>ans:-----functional components are much preferred over class components. A functional component is more uncomplicated and easy to develop, test, and understand. On the other hand, class components can be a little confusing as there are multiple usages of ‘this’ required. </p>


            <h1>que4:Explain reducer as pure function in redux?</h1>
            <p>ans---- Reducers are a pure function in Redux. Pure functions are predictable. Reducers are the only way to change states in Redux. It is the only place where you can write logic and calculations. Reducer function will accept the previous state of app and action being dispatched, calculate the next state and returns the new object.</p>


            <h1>que5: Why do we use redux thunk?</h1>
            <p>ans:--- Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux. This allows for delayed actions, including working with promises. One of the main use cases for this middleware is for handling actions that might not be synchronous, for example, using axios to send a GET request.</p>



            <h1>que6:What do you know about NPM?</h1>
            <p>ans-----NPM stands for "Node Package Manager".
                npm is the world's largest Software Library (Registry)npm is also a software Package Manager and InstallerThe name npm (Node Package Manager) stems from when npm first was created as a package manager for Node.js. All npm packages are defined in files called package.json.</p>
        </>
    )
}

export default Text1