# ex-turborepo-demo

## Requirements
- IOS Development
  - [XCode](https://apps.apple.com/us/app/xcode/id497799835?mt=12)
  - [XCode Command Line Tools](https://www.freecodecamp.org/news/install-xcode-command-line-tools/)
  - [Homebrew](https://brew.sh/)
  - [Cocoapods](https://formulae.brew.sh/formula/cocoapods) - `brew install cocoapods`

## Getting started
- `yarn` to install deps
- Use turbo to run scripts in all packages:
  - `yarn dev` to start all dev envs
  - `yarn build` to build all packages
  - `yarn start` to start built bundles
  - `yarn test` to run all tests
  - `yarn lint` to lint all packages

## Steps to replicate this repo
1. Add yarn tooling
  - Init repo using `yarn init -2`
  - Remove `./yarn/caches` from `.gitignore`, add basic node ignored files
  - Add `.yarnrc.yaml` values with hoisting limits
  - Update `package.json` with `"version": "0.0.0"`, `"private": true`, `"workspace: [...]"` and namespaced package `name: "@ex-turborepo-demo/..."`
  - Add `apps`, `configs` and `packages` folders
  - Run `yarn` to test
2. Add turborepo tooling
  - Add `turbo` to dev deps using `yarn add -D turbo`
  - Add common scripts to root `package.json`
  - Add `turbo.json` to configure script behaviour
3. Add apps
  - Add a typescript next.js app `(cd apps && npx create-next-app@latest --ts web-next)`
  - Add a typescript react native app `(cd apps && npx react-native init mobile-rn --template react-native-template-typescript)`
  - Configure each app's `package.json` with `"version": "0.0.0"`, `"private": true`, and namespaced package `name: "@ex-turborepo-demo/..."`
  - Add common scripts to each app's `package.json`
  - Add cocoapods install steps to `mobile-rn`'s `postinstall` script
  - Remove each app's `.git` folders using `rm -rf ./apps/*/.git` in root directory
  - Run `yarn` in root directory to install deps
4. Add shared module
  - Init a new yarn package in `packages/utils`
  - Add `typescript@4.8.4` dev dep and a `tsconfig.json` for ts support, `web-next`'s is a good base
  - Add your code
  - Run `yarn` in root directory to install deps
  - Add your new package to apps that need it using `yarn workspace @ex-turborepo-demo/<target> add @ex-turborepo-demo/utils`
5. Add transpilation support for modules outside of app directories
  - Despite workspace hoisting limits, local packages are stored as `symlinks` in `node_modules`.
    - `next` and `react-native` doesn't transpile packages outside of their app dirs.
  - Configure `web-next`'s `next.config.js` to watch and transpile specific modules in monorepo
  - Configure `mobile-rn`'s `metro.config.js` to watch and transpile modules in monorepo
