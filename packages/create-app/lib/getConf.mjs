#!/usr/bin/env node
import inquirer from "inquirer";
import download from "./download.mjs";
console.log("1111");

inquirer
  .prompt([
    {
      type: "list",
      name: "framework",
      choices: ["react", "vue"],
      default: "react",
    },
    { type: "input", name: "projectName" },
    {
      type: "list",
      name: "engineerTool",
      choices: ["webpack", "vite"],
      default: "vite",
    },
  ])
  .then(download);
