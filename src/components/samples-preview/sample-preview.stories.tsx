import type { StoryObj, Meta } from "@storybook/react";

import { css } from "@root/styled-system/css";

import { Sample1 } from "./sample-1";
import { Sample2 } from "./sample-2";
import { bgVar, fgVar } from "./utils";

export default {
  title: "Samples Previews",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        className={css({ maxW: "96" })}
        style={{
          [bgVar as string]: "80 48 229",
          [fgVar as string]: "255 255 255",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta;

type Story = StoryObj;

export const Sample_1: Story = {
  name: "Sample 1",
  render: () => <Sample1 />,
};

export const Sample_2: Story = {
  name: "Sample 2",
  render: () => <Sample2 />,
};
