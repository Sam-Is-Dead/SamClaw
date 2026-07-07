#!/usr/bin/env bun

import {Command} from "commander";
import {runWakeUp} from "./tui/wakeup.ts";

const program = new Command();

program
  .name("SamClaw")
  .description("A simple CLI tool")
  .version("1.0.0");

program
    .command("wakeup")
    .description("Wake up the system")
    .action(
        async() => {
        console.log("Waking up the system...");
        await runWakeUp();
      });

    await program.parseAsync(process.argv);