# Vue ESLint Plugin JSX Bug

Install dependencies:
```shell
npm install
```

Running the app works as expected:

```shell
npm dev
```

Output in the browser:

![works](works.png)

But linting the project gives the following error:

```shell
npm lint
```

![parsing error](parsing-error.png)

Linting the equivalent code in a JSX file works fine:

```shell
npm lint:jsx
```

![parsing works](parsing-works.png)
