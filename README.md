# React: Crash Course
A (semi-)interactive presentation on React, Redux, and Sagas.

## Presentation
_Expected duration: 1 hour_

The goal of the presentation is to give you a mental framework to work with when
developing a React application. It leaves out many of the specifics of the
technology to focus on why you might choose to go one direction over another.

## Try it Yourself
_Expected duration: 30 minutes_

### Install

```
cd path/to/repo/example
npm install
npm start
```

### **Option 1**: Create a Blog Post
1. Replace `<HelloWorld />` with an `<App />` that will contain all of your
   following components.
1. Create a generic `<Header />`.
1. Create a generic `<Paragraph />`.
1. Create a specialized `<Lead Paragraph />`.

### **Option 2**: Interact with JSONPlaceholder
1. Create a component to render the response from [JSONPlaceholder](https://jsonplaceholder.typicode.com/).
1. Setup actions and reducers to request the response and store the response in the store.
1. Handle success and errors by using Sagas.

## Resources/Citations
- [Pete Hunt: React: Rethinking best practices](https://www.youtube.com/watch?v=x7cQ3mrcKaY)
- [Max Stoiber - Scaling React.js Applications](https://www.youtube.com/watch?v=52Vt8Fg3ZPY)
- [React Documentation](https://reactjs.org/docs/)
- [Redux Documentation](https://redux.js.org/basics)
- [Reducing Our Redux Code with React Apollo](https://blog.apollographql.com/reducing-our-redux-code-with-react-apollo-5091b9de9c2a)
