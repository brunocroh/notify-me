#!/usr/bin/env node
import { execa } from "execa";
import NotifyMe from "./index.js";
import { Command } from "commander";
const program = new Command();

program
  .description("Notify me when my tasks are finished")
  .version("1.0.0", "-v, --version", "display the version number")
  .option("-t, --title <string>")
  .option("-d, --description <string>")
  .option("-c, --command <string>")
  .option("-a, --arguments [arguments...]")
  .option("-s, --sound")
  .action(async (opts) => {
    if (opts.command) {
      const result = await execa(opts.command, opts.arguments);

      console.log(result.stdout);

      opts.title = opts.title || "Your command finished";
      opts.description = opts.description || opts.command;
    }

    console.log({ opts });
    NotifyMe.notify(opts.title, opts.description, { sound: opts.sound });
  })
  .parse(process.argv);
