# Docusaurus + Stoplight Elements

This repo showcases how to use [Stoplight Elements](https://github.com/stoplightio/elements) with [Docusaurus 2](https://docusaurus.io/).

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Compilation issue with Ubuntu

While it's possible to build (`yarn build`) the website at the commit https://github.com/yhuard/docusaurus-stoplight-elements/commit/f55eebb0db6e462d81dd8ed3e241250c45215a15 with macOS, the same is not true for Ubuntu, as discussed [here](https://github.com/stoplightio/elements/discussions/1777#discussioncomment-2205880). To avoid this problem, we can lazy-load `@stoplight/elements`, as done in https://github.com/yhuard/docusaurus-stoplight-elements/commit/ba545f99aa420c3ba25450b4e5cf4625d9d33ce3.
