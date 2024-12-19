#!/usr/bin/env node

// index.js

// Log all environment variables as a JSON string
console.log("Environment Variables:");
console.log(JSON.stringify(process.env, null, 2));

// Log all arguments passed during runtime
console.log("Command Line Arguments:");
console.log(process.argv);
