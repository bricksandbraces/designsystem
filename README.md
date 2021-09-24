# @openbricksandbraces/designsystem

[![Build and Deploy to GitHub Pages](https://github.com/bricksandbraces/designsystem/actions/workflows/ghp-deployment.yml/badge.svg)](https://github.com/bricksandbraces/designsystem/actions/workflows/ghp-deployment.yml)

Awesome designsystem for the Bricks & Braces brand.

## How to use

At first, install the dependencies:

```bash
yarn add @openbricksandbraces/designsystem
```

Then, import the styles from your main / application component (App.tsx on create-react-app):

```javascript
import React from 'react';

import "@openbricksandbraces/designsystem/lib/styles/dist/index.css"
import './App.css';
...
```

Instead of importing already processed styles you could also import

```javascript
import "@openbricksandbraces/designsystem/lib/styles/postcss/index.css";
```

for easy customisation reasons. Please note, that you need a postcss-loader for this. Make yourself common with the configuration by looking at [the designsystem repo](https://github.com/bricksandbraces/designsystem).

Last but not least, use a component from the library:

```javascript
...
import { Button, useInitialize } from "@openbricksandbraces/designsystem"

function App() {
  useInitialize();
  return (
   ...
        <Button label="Hello" />
   ...
  );
}
```

Aaaand you are done!

![image](https://user-images.githubusercontent.com/8998518/125286009-934f4500-e31b-11eb-94d7-4238b41b446f.png)

> **Note: use the useInitialize() hook to initialize mandatory listeners (for viewport height correction an such magical stuff 🪄).**

## Tech Stack

- Typescript
- React
- PostCSS

### Dev

- Storybook
- Prettier, ESlint, Stylelint
- Husky
- Jest, Enzyme

## Contribute

At first, install husky using `yarn husky install`.

To start storybook and show all components, simply run:

```bash
yarn storybook
```

### Other commands

```bash
yarn test
yarn format:check
yarn format:fix
yarn build:package
yarn build:storybook
yarn start:storybook
```

## Publishing and dealing with yarn v2

> Disclaimer: Because we are using yarn v2 options from .yarnrc and .npmrc will be IGNORED. Please look into the [offical documentation](https://yarnpkg.com/configuration/yarnrc) for the new file structure.

1. Insert `yarn npm login --publish` and authenticate using the npm account of **openbricksandbraces**.
2. Make sure you've installed the dependencies and built the package `yarn && yarn build:package`.
3. Using `yarn npm publish --tag latest` you will be able to publish a new version of the package! 🎉

## License

Bricks & Braces Internal Property. No License given.
