import { withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";
import Accordion from "./Accordion";
import { Grid, Column } from "../Grid/Grid";
import AccordionItem from "./AccordionItem";
import { idfy } from "../../helpers/arrayUtilities";

export default { title: "Components/Accordion", decorators: [withKnobs] };

export const MyComponent = () => {
  const arr = [0, 1, 2, 2, 3];
  return (
    <ul>
      {arr.map((el) => {
        return <p key={el}>{el}</p>;
      })}
    </ul>
  );
};

export const PrimitiveIdfy = () => {
  const arr = [0, 1, 2, 2, 3];
  const indexedArr = idfy(
    arr.map((el, i) => ({
      el,
      i: arr.filter((el2) => el2 === el).length > 1 ? i : undefined
    }))
  );
  return (
    <ul>
      {indexedArr.map((el) => {
        return <p key={el.id}>{el.el}</p>;
      })}
    </ul>
  );
};

export const Uncontrolled = () => {
  return (
    <div style={{ marginTop: "16px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <Accordion>
            <AccordionItem title="Title 1" disabled>
              Content 1
            </AccordionItem>
            <AccordionItem title="Title 2">Content 2</AccordionItem>
            <AccordionItem title="Title 3">Content 3</AccordionItem>
          </Accordion>
        </Column>
      </Grid>
    </div>
  );
};

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
