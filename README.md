# Vue ESLint Plugin JSX Bug

Running the app works as expected:

```shell
pnpm dev
```

Output in the browser:

![works](works.png)

But linting the project gives the following error:

```shell
pnpm lint
```

![parsing error](parsing-error.png)

Linting the equivalent code in a JSX file works fine:

```shell
pnpm lint:jsx
```

![parsing works](parsing-works.png)
