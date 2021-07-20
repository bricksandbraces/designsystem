import React, { ReactNode } from "react";
import cx from "classnames";
import { IconChevronRight } from "@tabler/icons";
import { Grid, Column } from "../Grid/Grid";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";

type LeadSpaceProps = {
  /**
   * Grid Children
   */
  children?: ReactNode;

  /**
   * Kind
   */
  kind?: "small" | "max" | "100vh" | "default";

  /**
   * Overlay
   */
  overlay?: "full" | "gradient";
};

const LeadSpace = ({ kind, overlay }: LeadSpaceProps) => {
  return (
    <section
      id="leadspace"
      className={cx("leadspace")}
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/1910230/pexels-photo-1910230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"
      }}
    >
      <Grid narrow className="leadspace--grid">
        <Column
          sm={4}
          smOffset={0}
          md={6}
          mdOffset={1}
          lg={6}
          lgOffset={2}
          xlg={6}
          xlgOffset={2}
          className="leadspace--column"
        >
          <div className="leadspace--container">
            <div className="leadspace--content">
              <Typography type="h1" token="heading-06">
                Let’s shape tomorrow.
              </Typography>
              <div className="leadspace--content-buttongroup">
                <Button large withIconRight renderIcon={<IconChevronRight />}>
                  What we do
                </Button>
                <Button kind="ghost" large>
                  Learn more about us
                </Button>
              </div>
            </div>
          </div>
        </Column>
      </Grid>
    </section>
  );
};

export default LeadSpace;
