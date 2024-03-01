import React from "react";
import { prefix } from "../../settings";
import { Column, Grid } from "./Grid";

export default { title: "Layout/Grid", component: Grid };

export const Auto = {
  render: () => {
    return (
      <Grid>
        <Column defaultColumn>
          <div className={`${prefix}--grid-example`}>Column 1</div>
        </Column>
        <Column defaultColumn>
          <div className={`${prefix}--grid-example`}>Column 2</div>
        </Column>
        <Column defaultColumn>
          <div className={`${prefix}--grid-example`}>Column 3</div>
        </Column>
        <Column defaultColumn>
          <div className={`${prefix}--grid-example`}>Column 4</div>
        </Column>
      </Grid>
    );
  }
};

export const FullWidth = {
  render: () => {
    return (
      <Grid fullWidth>
        <Column defaultColumn>
          <div className={`${prefix}--grid-example`}>Column 1</div>
        </Column>
        <Column defaultColumn>
          <div className={`${prefix}--grid-example`}>Column 2</div>
        </Column>
        <Column defaultColumn>
          <div className={`${prefix}--grid-example`}>Column 3</div>
        </Column>
        <Column defaultColumn>
          <div className={`${prefix}--grid-example`}>Column 4</div>
        </Column>
      </Grid>
    );
  }
};

export const ResponsiveBreakpoints = {
  render: () => {
    return (
      <Grid>
        <Column sm={4} md={8} lg={4} xlg={4}>
          <div className={`${prefix}--grid-example`}>Column 1</div>
        </Column>
        <Column sm={4} md={8} lg={4} xlg={4}>
          <div className={`${prefix}--grid-example`}>Column 2</div>
        </Column>
        <Column sm={4} md={8} lg={4} xlg={4}>
          <div className={`${prefix}--grid-example`}>Column 3</div>
        </Column>
        <Column sm={4} md={8} lg={4} xlg={4}>
          <div className={`${prefix}--grid-example`}>Column 4</div>
        </Column>
      </Grid>
    );
  }
};

export const Narrow = {
  render: () => {
    return (
      <Grid narrow>
        <Column sm={4} md={8} lg={4} xlg={4}>
          <div className={`${prefix}--grid-example`}>Column 1</div>
        </Column>
        <Column sm={4} md={8} lg={4} xlg={4}>
          <div className={`${prefix}--grid-example`}>Column 2</div>
        </Column>
        <Column sm={4} md={8} lg={4} xlg={4}>
          <div className={`${prefix}--grid-example`}>Column 3</div>
        </Column>
        <Column sm={4} md={8} lg={4} xlg={4}>
          <div className={`${prefix}--grid-example`}>Column 4</div>
        </Column>
      </Grid>
    );
  }
};

export const Condensed = {
  render: () => {
    return (
      <Grid condensed>
        <Column sm={4} md={8} lg={4} xlg={4}>
          <div className={`${prefix}--grid-example`}>Column 1</div>
        </Column>
        <Column sm={4} md={8} lg={4} xlg={4}>
          <div className={`${prefix}--grid-example`}>Column 2</div>
        </Column>
        <Column sm={4} md={8} lg={4} xlg={4}>
          <div className={`${prefix}--grid-example`}>Column 3</div>
        </Column>
        <Column sm={4} md={8} lg={4} xlg={4}>
          <div className={`${prefix}--grid-example`}>Column 4</div>
        </Column>
      </Grid>
    );
  }
};

export const Example = {
  args: {
    fullWidth: false
  },
  render: (args: any) => {
    return (
      <>
        <Grid narrow fullWidth={args.fullWidth}>
          <Column
            sm={4}
            md={8}
            lg={16}
            xlg={16}
            style={{
              backgroundImage:
                "url(https://images.musement.com/cover/0002/37/hamburg-landungsbrucken-less-jpg_header-136590.jpeg)",
              backgroundSize: "cover",
              height: "420px",
              backgroundPosition: "center"
            }}
          />
        </Grid>
        <Grid fullWidth={args.fullWidth}>
          <Column sm={4} md={4} lg={4} xlg={4}>
            <div style={{ color: "#fff", marginTop: "24px" }}>
              <p style={{ fontSize: "64px", fontWeight: 200 }}>
                Hello,{" "}
                <span
                  style={{
                    color: "#651aff"
                  }}
                >
                  Bark.
                </span>
              </p>
            </div>
          </Column>
          <Column sm={4} md={8} lg={8} xlg={12}>
            <div style={{ color: "#e0e0e0", marginTop: "40px" }}>
              <p style={{ fontSize: "24px", fontWeight: 300 }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </Column>
        </Grid>
      </>
    );
  }
};
