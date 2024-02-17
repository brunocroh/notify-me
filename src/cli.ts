#!/usr/bin/env node
import { execa } from "execa";
import NotifyMe from "./index.js";
import { Command } from "commander";
const PackageJson = require("../package.json");
const program = new Command();

program
  .description("Notify me when my tasks are finished")
  .option("-v, --version", "display the version number")
  .option("-t, --title <string>", "Notification title")
  .option("-d, --description <string>", "Notification description")
  .option("-c, --command <string>", "A command to be run")
  .option("-a, --arguments [arguments...]", "Arguments of command")
  .option("-s, --sound", "Play a sound when notify")
  .action(async (opts) => {
    if (opts.version) {
      console.log(PackageJson.version);
      return;
    }

    if (opts.command) {
      const result = await execa(opts.command, opts.arguments);

      console.log(result.stdout);

      opts.title = opts.title || "Your command finished";
      opts.description = opts.description || opts.command;
    }

    NotifyMe.notify(opts.title, opts.description, { sound: opts.sound });
  })
  .parse(process.argv);
