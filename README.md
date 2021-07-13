# @bricksandbraces/designsystem

Awesome designsystem for the Bricks & Braces brand.

## Tech Stack

- Typescript
- React
- PostCSS

### Dev

- Storybook
- Prettier, ESlint, Stylelint
- Husky
- Jest, Enzyme

## How to use

At first, install the dependencies:

```bash
yarn add bootstrap @bricksandbraces/designsystem
```

Then, import the styles from your main / application component (App.tsx on create-react-app):

```javascript
import React from 'react';
// Look, first import bootstrap, then bricksandbraces styles
import "bootstrap/dist/css/bootstrap.min.css"
import "@bricksandbraces/designsystem/lib/styles/dist/index.css"

import './App.css';
...
```

Instead of importing already processed styles you could also import

```javascript
import "@bricksandbraces/designsystem/lib/styles/postcss/index.css";
```

for easy customisation reasons. Please note, that you need a postcss-loader for this. Make yourself common with the configuration by looking at [the designsystem repo](https://github.com/bricksandbraces/designsystem).

Last but not least, use a component from the library:

```javascript
...
import { Button, useInitialize } from "@bricksandbraces/designsystem"

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

### Develop with storybook

To start storybook and show all components, simply run:

```
yarn storybook
```

### Other commands

```
yarn test
yarn format:check
yarn format:fix
yarn build:package
yarn build:storybook
yarn start:storybook
```

## License

Bricks & Braces Internal Property. No License given.
