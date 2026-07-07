import {select , isCancel} from "@clack/prompts";
import chalk from "chalk";

export async function runCliMode() {
  while (true) {
    const mode = await select({
      message: "Choose CLI sub-mode",
      options: [
        { value: "agent", label: "Agent Mode" },
        { value: "plan", label: "Plan Mode" },
        { value: "ask", label: "Ask Mode" },
        { value: "back", label: "← Back to main menu" },
      ],
    });

    if (isCancel(mode) || mode === "back") return;

    if (mode === "agent") {
        console.log(chalk.dim('\n Agent mode is not implemented yet. \n'));
    }
    if (mode === "ask") {
        console.log(chalk.dim('\n Ask mode is not implemented yet. \n'));
    }
    if (mode === "plan") {
        console.log(chalk.dim('\n Plan mode is not implemented yet. \n'));
    }

    if (mode !== "agent" && mode !== "plan" && mode !== "ask") {
      console.log(chalk.yellow("\nThat mode is not implemented yet.\n"));
    }
  }
}