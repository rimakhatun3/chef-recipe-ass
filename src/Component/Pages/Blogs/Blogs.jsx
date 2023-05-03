import React from 'react';

const Blogs = () => {
    return (
        <div className='lg:mx-12 mt-10'>
          <h2 className='text-lg font-semibold'>1.Tell us the differences between uncontrolled and controlled components?</h2>  
          <p><span className='text-lg font-semibold'>Answer:</span>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
          <h2 className='text-lg font-semibold'>2. How to validate React props using PropTypes?</h2>  
          <p><span className='text-lg font-semibold'>Answer:</span>PropTypes.any : The prop can be of any data type.
PropTypes.bool : The prop should be a Boolean.
PropTypes.number : The prop should be a number.
PropTypes.string : The prop should be a string.
PropTypes.func : The prop should be a function.
PropTypes.array : The prop should be an array.</p>
          <h2 className='text-lg font-semibold'>    3. Tell us the difference between nodejs and express js.?</h2>  
          <p><span className='text-lg font-semibold'>Answer</span>NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile applications.</p>
          <h2 className='text-lg font-semibold'>4.What is a custom hook, and why will you create a custom hook?</h2>  
          <p><span className='text-lg font-semibold'>Answer</span>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code</p>
        </div>
    );
};

export default Blogs;