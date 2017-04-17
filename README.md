This is a sample project which demonstrates how to build react components
with typescript and publish them exposing component's typings.

### Usage

`npm run build` produces the following structure:

```
|-- lib
    |-- index.js
    |-- index.d.ts // these are the ts typings
```

`npm run build:dist` produces the following structure:

```
|-- dist
    |-- index.js // minified file built for UMD
```
