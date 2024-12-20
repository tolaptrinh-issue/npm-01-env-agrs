#!/usr/bin/env node
const child_process = require("child_process");
const path = require("path");
const fs = require("fs");

const helper = (() => {
  const logError = (error) => {
    console.error(`[ERR] ${error.message}`);
  };
  const getPackageJSONparse = () => {
    try {
      return JSON.parse(fs.readFileSync(path.resolve(__dirname, "package.json"), "utf8"));
    } catch (error) {
      return error.message;
    }
  };
  const logPackageVersion = () => {
    try {
      let packageJSON = getPackageJSONparse();
      console.log(`📦Npm-package: ${packageJSON["name"]}-${packageJSON["version"]}`);
    } catch (error) {
      logError(error);
    }
  };
  const logCommandLine = () => {
    try {
      console.log(`🚀 ${process.argv.join(" ")}`);
    } catch (error) {
      logError(error);
    }
  };
  const logProcessENV = () => {
    try {
      console.log(`🧰 ${JSON.stringify(process.env, null, 2)}`);
    } catch (error) {
      logError(error);
    }
  };
  return {
    logError,
    logPackageVersion,
    logCommandLine,
    logProcessENV,
  };
})();

const executeMain = (async () => {
  try {
    const logInfo = (() => {
      helper.logPackageVersion();
      helper.logCommandLine();
      helper.logProcessENV();
    })();
  } catch (error) {
    helper.logError(error);
  }
})();
