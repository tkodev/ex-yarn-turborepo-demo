# ex-turborepo-demo

## Getting started
- `yarn` to install deps

## Steps to replicate this repo
1. Add yarn tooling
  - Init repo using `yarn init -2`
  - Remove `./yarn/caches` from `.gitignore`, add basic node ignored files
  - Add `.yarnrc.yaml` values with hoisting limits
  - Update `package.json` with `version`, `private`, `workspace` and namespaced package `name`
  - Add `apps`, `configs` and `packages` folders
  - Run `yarn` to test
