const Transport = require("winston-transport");
const { Logger } = require("logdna");

const mapLevel = require("./map-level");
const omit = require("./omit");

/**
 * This transport will send every log to LogDNA. It replaces the `logdna-winston` package, which
 * is not compatible with `winston >= 3`.
 */
module.exports = class LogDnaTransport extends Transport {
  constructor(opts = {}) {
    super(opts);
    this.name = opts.name || "LogDNA";
    this.level = opts.level || "";
    this.logger = new Logger(opts.key, opts);
  }

  log(info, callback) {
    const { message, level } = info;
    const normalizedMessage =
      message instanceof Error ? message.stack || message.toString() : message;

    this.logger[mapLevel(level)](normalizedMessage, {
      meta: omit(info, ["level", "message"])
    });

    callback();
  }
};
