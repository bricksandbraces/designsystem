import { withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";
import Accordion from "./Accordion";
import { Grid, Column } from "../Grid/Grid";
import AccordionItem from "./AccordionItem";

export default { title: "Components/Accordion", decorators: [withKnobs] };

export const Controlled = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);
  return (
    <div style={{ marginTop: "16px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <Accordion
            openIndices={openIndices}
            onChange={(i) => {
              if (openIndices.includes(i)) {
                setOpenIndices(
                  openIndices.filter(
                    (selectedItemIndex) => i !== selectedItemIndex
                  )
                );
              } else {
                setOpenIndices([...openIndices, i]);
              }
            }}
          >
            <AccordionItem title="Title 1">Content 1</AccordionItem>
            <AccordionItem title="Title 2">Content 2</AccordionItem>
            <AccordionItem title="Title 3">Content 3</AccordionItem>
          </Accordion>
        </Column>
      </Grid>
    </div>
  );
};
