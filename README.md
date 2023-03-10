# All Blue

A VS Code theme that's a little too obsessed with a certain primary color.

## Screenshots

Default theme
![All Blue screenshot](img/default-preview.png "All Blue screenshot")

Calm
![All Blue screenshot](img/calm-preview.png "Calm screenshot")

Waves
![All Blue screenshot](img/waves-preview.png "Waves screenshot")

The editor font used is [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
with ligatures turned off.
The file icons are [Material Icons](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme).

I'm also shilling my other projects from the screenshots:

- [NJS React Template](https://github.com/njs-templates/njs-react)
- [Keysmith](https://github.com/njshockey/keysmith-rs), a rust keygen library
- [BST Graph](https://github.com/njshockey/bst-graph),
    create Pokemon Base Stat Total charts.

## Syntax Colors

![Syntax colors](img/all-blue-colors.png)

The font used is [Cabin SemiCondensed](https://fonts.google.com/specimen/Cabin?query=cabin).
The Hex code font is [JetBrains Mono](https://www.jetbrains.com/lp/mono/).

For more details, head to [colors.md](colors.md).

## Demo

For a downloadable demo, check out the [All Blue demo](https://github.com/njshockey/all-blue-demo).
Or just clone it with:

```bash
git clone https://github.com/njshockey/all-blue-demo.git
```

## Building

1. Clone this repo. Usually with `git clone https://github.com/njshockey/all-blue-theme.git`.
2. Run `yarn` to download the necessary NPM packages.
3. Open this repo in [VS Code](https://code.visualstudio.com/).
   - Make changes to the base colors in `./src/colors`.
   - Make changes to the templates in `./src/templates/editorTemplate.ts`
and `./src/templates/syntaxTemplate.ts`.
4. Run `yarn build-themes` to generate the JSON theme files
and press F5 to test changes.
    - Run `yarn build-themes-ugly` to build the themes without Prettier.
This should save you a few seconds.
5. To build the extension file (VSIX), install VSCE with
`npm install -g @vscode/vsce` then run `yarn build-ext`.

## Image credit

[Temporary icon](https://www.pexels.com/photo/white-sailboat-on-water-273886/)
by Pixabay.
