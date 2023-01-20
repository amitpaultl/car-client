import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-area'>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="single-blog">
                            <img src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/02/how-to-manage-state-react.png" className='w-100' alt="" />
                            <h2>What are the different ways to manage a state in a React application</h2>
                            <p>Managing state in your React apps isn’t as simple as using useState or useReducer.

                                Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose?

                                In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way. <br />
                                When we talk about state in our applications, it’s important to be clear about what types of state actually matter.

                                There are four main types of state you need to properly manage in your React apps:
                                <br />

                                1.Local state<br />
                                2.Global state<br />
                                3.Server <br />
                                4.URL state
                            </p>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="single-blog">
                            <img src="https://www.inqbyte.io/blog/wp-content/uploads/2019/03/Programing-2019.jpg" className='w-100' alt="" />
                            <h2>How does prototypical inheritance work</h2>
                            <p>Every object with its methods and properties contains an internal and hidden property known as Prototyp. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using</p>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="single-blog">
                            <img src="https://coruzant.com/wp-content/uploads/2021/04/low-code.jpg" className='w-100' alt="" />
                            <h2>What is a unit test? Why should we write unit tests?</h2>
                            <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended. <br />

                                Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages. <br />

                                Unit testing is a component of test-driven development (TDD), a pragmatic methodology that takes a meticulous approach to building a product by means of continual testing and revision. This testing method is also the first level of software testing, which is performed before other testing methods such as integration testing. Unit tests are typically isolated to ensure a unit does not rely on any external code or functions. Testing can be done manually but is often automated.</p>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="single-blog">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqT_ljqoNgnB_MjEYIT-v7HeZfYTUHcOsTQA&usqp=CAU" className='w-100' alt="" />
                            <h2>React vs. Angular vs. Vue?</h2>
                            <p>One of the useful and powerful things about using any of these three library options is taking advantage of the many component libraries and frameworks available. Based on history and popularity, naturally there are more React component libraries vs. libraries for Vue. And since Angular is a much more complete set of tools, it’s possible you may not need an Angular library as often as one for React or Vue. <br />

                                With that in mind, below are a few options you can consider. This is just a small sampling to give you an idea of what these three libraries are capable of.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;