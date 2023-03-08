# ex-yarn-turborepo-demo

This is an demo repo showing integration between Yarn Workspaces (monorepo management) + Turborepo (build tools) + React Native & Next JS (client apps) + shared utils (packages)

## Guide & Requirements
- Follow the steps in this blog post: https://www.notion.so/qmo/Creating-a-Monorepo-with-Turborepo-for-React-Native-and-Next-JS-5c7bacce36c3491faadc09e15866dd39?pvs=4

## Getting started
- `yarn install` to install deps
- Use turbo to run scripts in all packages:
  - `yarn dev` to start all dev envs
  - `yarn build` to build all packages
  - `yarn start` to start built bundles
  - `yarn test` to run all tests
  - `yarn lint` to lint all packages
