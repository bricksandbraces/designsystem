import React from "react";

export type HeaderData = {
  title: string;
  key: string;
}[];

type Identifiable = {
  id: string;
};

export type RowData = (Record<string, string | React.ReactNode> &
  Identifiable)[];
