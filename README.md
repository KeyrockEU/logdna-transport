# `winston-logdna-transport`

Unofficial `winston` transport for LogDNA

## Usage

First, you'll need to install the package with `yarn` or `npm`:

```
yarn add @keyrock/winston-logdna-transport
```

or

```
npm install --save @keyrock/winston-logdna-transport
```

Then, when instantiating `winston`:

```js
const winston = require("winston");
const LogDNATransport = require("@keyrock/winston-logdna-transport");

// ...

const logger = winston.createLogger({
  level: "debug",
  transports: [
    new LogDNATransport({
      key: "your LogDNA ingestion key",
      app: "your app name",
      env: process.env.NODE_ENV || "development" || "whatever you want"
    })
    // ... your other transports
  ]
});
```

## License

MIT
