import Image from "next/image";
import { css } from "@root/styled-system/css";
import { stack, circle } from "@root/styled-system/patterns";
import avatar from "@root/public/sample-3-avatar.jpg";

import { applyStyle } from "../utils";

// NOTE: classのプロパティの順番、linterで統一したいな。
// NOTE: copilotの提案とVSCodeの提案が被るので、ちょっと工夫が必要。 vscode > copilot の優先度にしたい。
const classes = {
  root: stack({
    display: "flex",
    alignItems: "start",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: "4",
    columnGap: "4",
    borderRadius: "xl",
    backgroundColor: "white",
  }),
  avatar: circle({ size: "12", aspectRatio: "square" }),
  main: css({ display: "flex", flexDirection: "column", gap: "2" }),
  header: css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textStyle: "body-sm",
    "& > time": { textStyle: "body-xs" },
  }),
  body: css({ "& > strong": { textStyle: "body-xs" } }),
};

export function Sample14() {
  return (
    <article className={classes.root} style={{ ...applyStyle("bg"), ...applyStyle("color") }}>
      <Image alt="avatar" className={classes.avatar} src={avatar} />

      <div className={classes.main}>
        <div className={classes.header}>
          <span>Updated Price</span>
          <time>02/09</time>
        </div>

        <div className={classes.body}>
          <strong>Two price updates</strong> have been made to <strong>the saved properties</strong>
        </div>
      </div>
    </article>
  );
}
