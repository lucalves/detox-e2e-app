# React Native E2E with Detox

![Version](https://img.shields.io/badge/version-v.1.0.0-red.svg) ![Created On](https://img.shields.io/badge/created%20on-may%202022-red)

## About

This project is the development of a simple E2E workflow with Jest and Detox. Based on [this article](https://learntdd.in/react-native/#setup).

## Technologies used:

- Detox
- @testing-library/jest-native
- @testing-library/react-native
- react-test-renderer

## How to Install

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) 
(which comes with [npm](http://npmjs.com)) or [Yarn](https://yarnpkg.com/) package manager installed on your computer.

From your command line:

```bash
# Clone this repository
git clone git@github.com:lucalves/detox-e2e-app.git

# Go into the repository
cd detox-e2e-app

# Install dependencies
yarn or npm install

# Go into ios directory (MAC only)
cd ios

# Install cocoapods dependencies
pod install

# Build the Detox version of the binary:
detox build -c ios

# The build will take a little while, but you should only have to do it once for this tutorial.
# When it finishes, run the tests:
detox test -c ios

# Run the app on iOS (or android)
yarn ios (yarn android)
```

## License

MIT
