import { css } from "@root/styled-system/css";

const classes = {
  root: css({ mt: "5" }),
  heading: css({ color: "text-secondary", fontWeight: "500", mb: "2" }),
  container: css({ bgColor: "bg-primary", p: "5", rounded: "xl", shadow: "xs" }),
};

export function SamplesPreview() {
  return (
    <section className={classes.root}>
      <p className={classes.heading}>SAMPLES PREVIEW</p>
      <div className={classes.container}>samples here!</div>
    </section>
  );
}