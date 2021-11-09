import { object, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import {
  Grid,
  Column,
  Table,
  TableRow,
  TableHead,
  TableHeadCell,
  TableContainer,
  TableBody,
  HeaderData,
  RowData,
  TableCell
} from "../..";
import { prefix } from "../../settings";

export default { title: "Components/DataTable", decorators: [withKnobs] };

const defaultRows: RowData = [
  {
    id: "0",
    name: "Max Nustermann",
    location: "Germany",
    profession: "Fachkraft"
  },
  {
    id: "1",
    name: "Joe Nustermann",
    location: "USA",
    profession: "Fachkraft"
  },
  {
    id: "2",
    name: "Lilsa Nustermann",
    location: "Japan",
    profession: "Fachkraft"
  }
];
const defaultHeaders: HeaderData = [
  { title: "Full Name", key: "name" },
  { title: "Location (Country)", key: "location" },
  { title: "Profession", key: "profession" }
];

export const DefaultPlainTable = () => {
  return (
    <div style={{ marginTop: "16px" }}>
      <Grid narrow>
        <Column sm={4} md={8} lg={16} xlg={16}>
          <div className={`${prefix}--datatable ${prefix}--datatable-default`}>
            <TableContainer>
              <Table>
                <TableHead headers={defaultHeaders}>
                  <TableRow>
                    {(object("Headers", defaultHeaders) as HeaderData).map(
                      (header) => (
                        <TableHeadCell key={header.key} title={header.title} />
                      )
                    )}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {object("Rows", defaultRows).map((row) => (
                    <TableRow key={row.id}>
                      {(object("Headers", defaultHeaders) as HeaderData).map(
                        (header) => (
                          <TableCell key={`${row.id}-${header.key}`}>
                            {row[header.key]}
                          </TableCell>
                        )
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Column>
      </Grid>
    </div>
  );
};
