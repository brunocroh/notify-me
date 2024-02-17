import { execa } from "execa";

type RunProps = {
  title: string;
  description: string;
};

const DEFAULT_DESCRIPTION = "Your task finished";
const DEFAULT_TITLE = "Done";

const run = async (
  title: string = DEFAULT_TITLE,
  description: string = DEFAULT_DESCRIPTION,
) => {
  await execa(`osascript`, [
    `-e display notification "${description}" with title "${title}"`,
  ]);
};

run();
