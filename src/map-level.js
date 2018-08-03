const map = {
  debug: "debug",
  silly: "debug",
  verbose: "debug",
  info: "info",
  error: "error",
  warn: "warn"
};

module.exports = function mapLevel(level) {
  return map[level] || "debug";
};
