import { select, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import Accordion from "./Accordion";
import { Grid, Column } from "../Grid/Grid";
import AccordionItem from "./AccordionItem";

export default { title: "Components/Accordion", decorators: [withKnobs] };

export const Default = () => {
  return (
    <div style={{ marginTop: "16px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <Accordion>
            <AccordionItem title="Title 1">Content 1</AccordionItem>
            <AccordionItem title="Title 2">Content 2</AccordionItem>
            <AccordionItem title="Title 3">Content 3</AccordionItem>
          </Accordion>
        </Column>
      </Grid>
    </div>
  );
};
