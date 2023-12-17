# Parallex Effect

A react-native parallex effect application build using react-native cli.

## How it works

![](https://github.com/SAURABH0504/ParallexEffect/blob/main/src/assets/gif/ParralexEffectApp.gif)

## Installation

- git clone https://github.com/SAURABH0504/ParallexEffect.git
- cd ParallexEffect
- yarn
- npx run start

## Steps To Run Expo App

### Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm

npx react-native run-android

# OR using Yarn
yarn run android
```

### Step 2: Start your Application

Once the development server is running, the easiest way to launch the app is on a physical device. For more information, see https://docs.expo.dev/get-started/create-a-project/#open-the-app-on-your-device.


## Summary

- Created application using React Native cli.
- Implemented functional components and hooks as per the requirement.
- Created reusable components.
- Integrated Redux Toolkit for state management.
- Used React Navigation library for transition between screens.

## Structure

```
 ./src/
├── assets
│   ├── Arrow.png
│   ├── Circle.tsx
│   ├── Drawer.tsx
│   ├── Games.png
│   ├── PlayStation.tsx
│   ├── gif
│   │   └── ParralexEffectApp.gif
│   ├── index.ts
│   └── ring.png
├── color
│   └── index.ts
├── components
│   └── modules
│       ├── GameDetail
│       │   └── GameDetailsScreen.tsx
│       └── Home
│           ├── HomeScreen.tsx
│           ├── components
│           │   ├── Header.tsx
│           │   └── SearchBar.tsx
│           └── index.ts
├── hooks
├── navigation
│   ├── RootNavigator.tsx
│   ├── actions.ts
│   ├── constants.ts
│   └── stacks.tsx
├── service
└── utils
    └── index.ts

```

- `assets`: It contains all types of raw assets like svgs, png images.
- `color`: It contains theme color codes which is required in project.
- `components`: It contains global level components like custom Text, Button, UI which are used throughout the application.
- `modules`: It contains module which are required in code.
- `hooks` : It contains custom hooks to seprate business logic.
- `navigation` : It contains stack of screens.
- `service` : It contains api services to send and fetch data from server.
- `store` : It contains redux store to update state and update as per requirements.
- `utils` : It contains common methods and constants.

## Development

- `Project Structure`: Used module wise directory structure as this makes code more readable.
- `Navigation flow`: Used react-navigation to create a single navigator for the app.
- `Functional component`: It uses a functional component as it has better readability and performance than Class components.
- `Styling`: Used stylesheet to avoid the inline styles as those are getting created in every re-render.
- `Orientation`: Used portrait orientation.