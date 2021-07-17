import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { Grid, Row, Column } from "./Grid";

export default { title: "GridComponent", decorators: [withKnobs] };

export const Auto = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh"
      }}
    >
      <Grid>
        <Row>
          <Column>
            <div className="grid-example">Column 1</div>
          </Column>
          <Column>
            <div className="grid-example">Column 2</div>
          </Column>
          <Column>
            <div className="grid-example">Column 3</div>
          </Column>
          <Column>
            <div className="grid-example">Column 4</div>
          </Column>
        </Row>
      </Grid>
    </div>
  );
};

export const ResponsiveBreakpoints = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh"
      }}
    >
      <Grid>
        <Row>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 1</div>
          </Column>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 2</div>
          </Column>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 3</div>
          </Column>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 4</div>
          </Column>
        </Row>
      </Grid>
    </div>
  );
};

export const GridWithGutter = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh"
      }}
    >
      <Grid withGutter>
        <Row>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 1</div>
          </Column>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 2</div>
          </Column>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 3</div>
          </Column>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 4</div>
          </Column>
        </Row>
      </Grid>
    </div>
  );
};

export const GridWithGutterLeft = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh"
      }}
    >
      <Grid withGutterLeft>
        <Row>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 1</div>
          </Column>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 2</div>
          </Column>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 3</div>
          </Column>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 4</div>
          </Column>
        </Row>
      </Grid>
    </div>
  );
};

export const GridWithGutterRight = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh"
      }}
    >
      <Grid withGutterRight>
        <Row>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 1</div>
          </Column>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 2</div>
          </Column>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 3</div>
          </Column>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 4</div>
          </Column>
        </Row>
      </Grid>
    </div>
  );
};

export const RowWithGutter = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh"
      }}
    >
      <Grid>
        <Row withGutter>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 1</div>
          </Column>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 2</div>
          </Column>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 3</div>
          </Column>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 4</div>
          </Column>
        </Row>
        <Row>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 1</div>
          </Column>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 2</div>
          </Column>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 3</div>
          </Column>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 4</div>
          </Column>
        </Row>
      </Grid>
    </div>
  );
};

export const RowWithGutterLeft = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh"
      }}
    >
      <Grid>
        <Row withGutterLeft>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 1</div>
          </Column>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 2</div>
          </Column>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 3</div>
          </Column>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 4</div>
          </Column>
        </Row>
        <Row>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 1</div>
          </Column>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 2</div>
          </Column>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 3</div>
          </Column>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 4</div>
          </Column>
        </Row>
      </Grid>
    </div>
  );
};

export const RowWithGutterRight = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh"
      }}
    >
      <Grid>
        <Row withGutterRight>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 1</div>
          </Column>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 2</div>
          </Column>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 3</div>
          </Column>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 4</div>
          </Column>
        </Row>
        <Row>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 1</div>
          </Column>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 2</div>
          </Column>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 3</div>
          </Column>
          <Column xs={12} sm={12} md={6} lg={6} xl={3} xxl={3}>
            <div className="grid-example">Column 4</div>
          </Column>
        </Row>
      </Grid>
    </div>
  );
};
