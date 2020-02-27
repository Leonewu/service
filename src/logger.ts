import winston from "winston"
const { format } = winston
const { combine, timestamp, label, printf } = format

/* 日志输出 */
const formatLog = printf(({ level, message, label, timestamp }) => {
  if (typeof message === "object") {
    message = JSON.stringify(message)
  }
  return `${timestamp} ${level.toUpperCase()}: ${message}`
})
winston.add(new winston.transports.File({
  filename: "./logs/error.log",
  level: "error",
  format: combine(timestamp({format: "YYYY-MM-DD HH:mm:ss"}), formatLog, format.colorize())
}))
winston.add(new winston.transports.File({
  filename: "./logs/info.log",
  level: "info",
  format: combine(timestamp({format: "YYYY-MM-DD HH:mm:ss"}), formatLog, format.colorize())
}))
winston.exceptions.handle(new winston.transports.File({
  filename: "logs/exceptions.log",
  format: combine(timestamp({format: "YYYY-MM-DD HH:mm:ss"}), formatLog, format.colorize())
}))
if (process.env.NODE_ENV === "production") {
  winston.add(new winston.transports.Console({
    format: combine(winston.format.simple(), format.json())
  }))
}
