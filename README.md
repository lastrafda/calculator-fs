# A Simple Calculator

This is a calculator build with ReactJS. I dediced to use `useReducer` to manage the state because I wanted to try something that Steve Kinney mentions on Frontend Masters. He states that using `useReducer` allows you to write unit tests more easily, since you don't need to care about mounting components, you just care about the state.

## Try it live!

[DEMO](https://calculator-fs.vercel.app/)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

### `yarn format`

Formats all .js and .jsx files in the `src` folder.

### `yarn lint`

Checks eslint rules on .js and .jsx files in the `src` folder.
