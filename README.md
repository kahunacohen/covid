# COVID

A ReactJs app for treating COVID.

## Install

1. [Install](https://github.com/nvm-sh/nvm#installing-and-updating) Node Version Manager (nvm) if it's not already installed.
1. Checkout this repo and `cd` into it.
1. `$ nvm use`.

## Best Practices

ReactJs is different than most MVC frameworks such as Angular Rails etc. because it does not use separate templates and is not particularly opinionated.
Because of this it's important to keep some best practices in mind:

- **Code Formatting**: No discussion here; it's done for you every time you commit or push using [prettier](https://prettier.io/) and [husky](https://github.com/typicode/husky#readme). There's no reason to have crappily formatted code or argue over it. The computer does the monkeywork for you.
- **UI**: Before coding a feature think UI-centered. What components do you need? How does
  each UI section relate to a component?
- **Input/Output**: React is inspired by functional progrmaming. Think of each component as a function
  with inputs and outputs. The inputs are props, the outputs are JSX. This also
  helps you test more easily. Given a set of props, what JSX do you expect the
  componet to return?
- **state**: There are several ways to handle **shared** state between components.
  1. pass data/behavior as props to children
  2. pass up data/behavior to parent components as callbacks in props.
  3. Redux. I recommend not using redux until you realize you need it. You might
     see you need it when your component tree becomes complex enough that you find yourself handling state by passing props through several children just to be used
     by the last child...or you need to share state between silbing components...or you
     need a simple and common way to re-render several different components when state
     changes.

## Links:

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [JSX & Typescript](https://www.typescriptlang.org/docs/handbook/jsx.html)
- [Jest](https://jestjs.io/)
- [Test Utilities](https://ru.react.js.org/docs/test-utils.html)
- [Redux](https://redux.js.org/)
- [mpjs](https://mountainpass.github.io/mpjs/)
- [Bootstrap](https://getbootstrap.com/)
- [React Router](https://reactrouter.com/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
