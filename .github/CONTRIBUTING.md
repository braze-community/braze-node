# Contributing

<details><summary>Table of Contents</summary><p>

- [Fork](#fork)
- [Test](#test)
- [Lint](#lint)
- [Docs](#docs)
- [Release](#release)

</p></details>

All pull requests are welcome! By participating in this project, you
agree to abide by our **[code of conduct]**.

[code of conduct]: https://github.com/braze-community/.github/blob/master/CODE_OF_CONDUCT.md

## Fork

[Fork], then clone the repository:

[fork]: https://github.com/braze-community/braze-node/fork

```sh
# replace <USER> with your username
git clone git@github.com:<USER>/braze-node.git
cd braze-node
```

Use [nvm](https://github.com/nvm-sh/nvm#intro) to set the Node.js version:

```sh
nvm use
```

Install the package dependencies:

```sh
npm install
```

Make your changes, add tests/documentation, and ensure tests and lint pass:

```sh
npm test
npm run lint
npm run lint:tsc
```

Write a commit message that follows the [Conventional Commits][commit] specification:

- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **test**: Add missing tests or correct existing tests
- **docs**: Documentation only changes

The commit message will be linted during the pre-commit Git hook.
To manually lint the most recent commit message:

```sh
git log -1 --pretty=format:"%s" | npx commitlint
```

Push to your fork and [create a pull request][pr].

[pr]: https://github.com/braze-community/braze-node/compare/

At this point, wait for us to review your pull request. We'll try to review pull requests within
1-3 business days. We may suggest changes, improvements, and/or alternatives.

Here are some things that will improve the chance that your pull request will be accepted:

- [ ] Write tests that pass [CI].
- [ ] Write good documentation.
- [ ] Write a [good commit message][commit].

[ci]: https://github.com/braze-community/braze-node/actions/workflows/build.yml
[commit]: https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit

## Test

Run tests with coverage:

```sh
npm test
```

Run tests in watch mode:

```sh
npm run test:watch
```

Run tests in CI mode:

```sh
npm run test:ci
```

View the coverage report in your browser:

```sh
open coverage/lcov-report/index.html
```

## Lint

Run ESLint:

```sh
npm run lint
```

Fix lint errors:

```sh
npm run lint:fix
```

Check types:

```sh
npm run lint:tsc
```

## Docs

Generate TypeDoc:

```sh
npm run docs
```

Generate docs in watch mode:

```sh
npm run docs:watch
```

View docs in your browser:

```sh
open docs/index.html
```

## Release

Release and publish are automated with [Release Please].

[release please]: https://github.com/googleapis/release-please#readme
