#!/usr/bin/env node

const { program } = require("commander");
const { execFile, execFileSync } = require("child_process");
let appname = "";

program
  .command("create-app")
  .arguments("<appname>")
  .description("Create an app from a template")
  // .command('node lib/getConf.js')
  .action(async (arg1) => {
    // appname = arg1;
    // console.log("appname:", appname, "arg1", arg1);
    // console.log(arg1);
    const output = await execFileSync(
      "node",
      ["--experimental-modules", "./lib/getConf.mjs"],
      { stdio: "inherit" }
    );
    console.log(output);
  });

program.parse(process.argv);
