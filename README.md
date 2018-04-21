**create-nio-app** was ejected from [create react app](https://github.com/facebookincubator/create-react-app) and **niolabs-ified** by adding the following features:
- yarn
- css modules
- scss
- eslint linting extending airbnb
- stylelint extending stylint standard
- jest and enzyme tests
- Lato
- nio icons
- nio-css-themes
- nuik

Learn more about the setup [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## how to use

Clone or fork the repo

```bash
$ git clone <paste-link-to-repo> <name-of-new-directory>
```

and cd into new directory.

Install node modules with yarn

```bash
$ yarn
```

Run

```bash
$ yarn start
```
### customize

Remove remote and verify it is gone
```bash
$ git remote rm origin
$ git remote -v
```
Add new remote
```bash
$ git remote add origin <link-to-new-project-repo>
```

You will want to edit

- the title tag in `public/index.html`
- `"name"` in `package.json`

and probably add your own `favicon.ico`.

Push to new project repo

```bash
$ git push -u origin master
```
