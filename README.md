# React Native E2E Demo App

This is a simple React Native app that demonstrates how to set up and run end-to-end tests using Detox. The app is built using Expo, and includes a splash screen and a status bar.

## Installation
To run this app, you'll need to have Node.js and Expo CLI installed on your machine. Once you have those installed, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run npm install to install the app's dependencies.

## Running the App
To run the app, you can use the following commands:

- npm start: This will start the app in development mode using Expo. You can then run the app on an iOS or Android simulator, or on your own device using the Expo Go app.
- npm run android: This will run the app on an Android simulator.
- npm run ios: This will run the app on an iOS simulator.
- npm run web: This will start the app in development mode on your computer's web browser.

# Running End-to-End Tests
To run the end-to-end tests, you'll need to have Detox set up on your machine. Once you have Detox installed, follow these steps:

1. Navigate to the project directory in your terminal.
2. Run detox build -c ios.sim.debug to build the Detox app.
3. Run detox test -c ios.sim.debug to run the tests on an iOS simulator.

You can also run the tests on an Android simulator by replacing ios.sim.debug with android.emu.debug in the above commands.

## Dependencies
This app has the following dependencies:

- expo
- expo-status-bar
- react
- react-native
- expo-splash-screen
- @babel/core
- @types/jest
- @types/react
- detox
- jest
- ts-jest
- typescript

# License
This app is licensed under the MIT license.