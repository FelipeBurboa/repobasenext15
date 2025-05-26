type LogLevel = "info" | "warn" | "error" | "debug";

const appName = "Proyecto Base";

interface LogContext {
  [key: string]: any;
}

function createLogger(source: string) {
  function log(level: LogLevel, message: string, context?: LogContext) {
    const logEntry = JSON.stringify({
      timestamp: new Date().toISOString(),
      level,
      source,
      appName,
      message,
      ...context,
    });

    switch (level) {
      case "error":
        console.error(logEntry);
        break;
      case "warn":
        console.warn(logEntry);
        break;
      case "debug":
        console.debug(logEntry);
        break;
      case "info":
      default:
        console.log(logEntry);
    }
  }

  return {
    info: (message: string, context?: LogContext) =>
      log("info", message, context),
    warn: (message: string, context?: LogContext) =>
      log("warn", message, context),
    error: (message: string, context?: LogContext) =>
      log("error", message, context),
    debug: (message: string, context?: LogContext) =>
      log("debug", message, context),
  };
}

export default createLogger;
