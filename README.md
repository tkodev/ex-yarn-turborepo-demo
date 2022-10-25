# ex-turborepo-demo

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
  - Update `package.json` with `version`, `private`, `workspace` and namespaced package `name`
  - Add `apps`, `configs` and `packages` folders
  - Run `yarn` to test
2. Add turborepo tooling
  - Add `turbo` to dev deps using `yarn add -D turbo`
  - Add common scripts to root `package.json`
  - Add `turbo.json` to configure script behaviour
