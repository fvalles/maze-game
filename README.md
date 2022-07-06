# Mario Bros Maze Game

## General information

This repository holds a **mario bros maze game** app. 🎮 👾

It was developed with **React JS**, **Typescript** and **Styled Components**! 🚀

You can see the final result either cloning the repository files and running `npm start` from the CLI or visiting it on my Netlify account!

To play the game, just click the **Start Game** button and once in the maze screen move across it with the arrow keys.

**[👉🏼 View mario bros maze game on Netlify 👈🏼](https://mario-bros-maze-game-fvalles.netlify.app/)**

## Coding details

- **Reusable components** were created. They are located in `src/components`. Each of them has its own markdown file which shows different usage examples.
- **Path aliases** were created to be able to import components and interfaces more easily. Example: `import { Div } from '@components/div'; `
- **Typographic reusable components** are located in `src/typography`.
- **A color palette and common fonts** were created in `src/core/theme` and shared through a `<ThemeProvider />` to the whole app.
- A **global-style.ts** file was created in `src/core/theme` to hold all CSS common styles.
- **WebP image support** was added to improve SEO/SEM and user experience, as WebP images are lighter compared to PNG, JPG, JPEG and GIF formats.
- To handle **vertical spaces**, a reusable `<Spacer />` component was created.
- **Unit tests** were created under a `__tests__` folder across the entire app for: **components, screens, helpers** and **custom hooks**.
- When the user wins the game **a modal component** tells them the number of moves made and gives the possibility to restart the game and play it again or go to the main screen.
- To create **the maze**, Eller's Algorithm was used installing [generate-maze](https://www.npmjs.com/package/generate-maze) npm package
