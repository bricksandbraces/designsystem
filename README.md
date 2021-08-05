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

## Contribute

At first, install husky using `yarn husky install`.

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

## Publishing and Dealing with yarn v2

> Disclaimer: Because we are using yarn v2 options from .yarnrc and .npmrc will be IGNORED. Please look into the [offical documentation](https://yarnpkg.com/configuration/yarnrc) for the new file structure.

1. Authenticate using a personal access token. You find it under Settings->Developer Settings->Personal access token and generate one with `repo, read:packages, write:packages, delete:packages`.
2. Go into your users home folder and create `.yarnrc.yml`. There you add

```
npmScopes:
  brickandbraces:
    npmAuthToken: "<your-personal-access-token>"
```

All packages starting with @bricksandbraces on your computers user will use this authentication to publish or consume packages.
Never commit this file

3. Go back to the repository and login with `yarn npm login --scope bricksandbraces --publish`. When asked for a username, enter your personal (not the organizations!) github username and as password the personal access token you just generated.
4. Finally using `yarn npm publish` you will be able to publish a new version of the package!! 🎉🎉🎉

## License

Bricks & Braces Internal Property. No License given.
