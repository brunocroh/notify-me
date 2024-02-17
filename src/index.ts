import { execa } from "execa";

const DEFAULT_DESCRIPTION = "Your task finished";
const DEFAULT_TITLE = "Done";

type NotifyOptions = {
  sound: boolean;
};

const notify = async (
  title: string = DEFAULT_TITLE,
  description: string = DEFAULT_DESCRIPTION,
  options: NotifyOptions,
) => {
  console.log({ options });
  await execa(`osascript`, [
    `-e display notification "${description}" with title "${title}" ${options.sound ? 'sound name "Tink"' : ""}`,
  ]);
};

export default {
  notify,
};
