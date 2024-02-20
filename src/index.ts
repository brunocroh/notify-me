import { execa } from "execa";

const PLATFORM = process.platform;
const DEFAULT_DESCRIPTION = "Your task finished";
const DEFAULT_TITLE = "Done";

type NotifyOptions = {
  sound: boolean;
};

const notify = async (
  title: string = DEFAULT_TITLE,
  description: string = DEFAULT_DESCRIPTION,
  options: NotifyOptions
) => {
  if (PLATFORM === "linux") {
    return await execa(`notify-send`, [
      `-a`,
      `NOTIFY-ME`,
      `${title} ${description}`,
    ]);
  }
  await execa(`osascript`, [
    `-e display notification "${description}" with title "${title}" ${
      options.sound ? 'sound name "Tink"' : ""
    }`,
  ]);
};

export default {
  notify,
};
