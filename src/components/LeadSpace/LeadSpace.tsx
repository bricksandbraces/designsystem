import React, { useRef, useState } from "react";
import cx from "classnames";
import {
  IconChevronRight,
  IconPlayerPause,
  IconPlayerPlay
} from "@tabler/icons";
import { Grid, Column } from "../Grid/Grid";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";

type CtaItem = {
  /**
   * Link to location
   */
  href: string;

  /**
   * Label that is shown
   */
  label: string;

  /**
   * Chevron
   */
  showChevron: boolean;
};

type LeadSpaceProps = {
  /**
   * Bg image
   */
  backgroundImage?: string;

  /**
   * Bg image
   */
  videoUrl?: string;

  /**
   * Leadspace title
   */
  title?: string;

  /**
   * CTA section / Buttons
   */
  ctaItems?: CtaItem[];
};

const LeadSpace = ({
  backgroundImage,
  videoUrl,
  title,
  ctaItems
}: LeadSpaceProps) => {
  const video = useRef(null);
  const [videoPlay, setVideoPlay] = useState(true);
  return (
    <section
      id="leadspace"
      className={cx("leadspace", { "leadspace--video-player": videoUrl })}
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      {videoUrl && (
        <>
          <video
            ref={video}
            autoPlay
            muted
            loop
            disablePictureInPicture
            playsInline
            id="leadspace--video"
            poster={backgroundImage}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
          <button
            className="leadspace--video-controls"
            type="button"
            aria-label={videoPlay ? "Pause video" : "Play video"}
            onClick={() => {
              if (videoPlay) {
                video.current.pause();
              } else {
                video.current.play();
              }

              setVideoPlay(!videoPlay);
            }}
          >
            {videoPlay ? <IconPlayerPause /> : <IconPlayerPlay />}
          </button>
        </>
      )}
      <Grid
        narrow
        className={cx("leadspace--grid", { "leadspace--video": videoUrl })}
      >
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
              {title && (
                <Typography type="h1" token="heading-06">
                  {title}
                </Typography>
              )}
              {ctaItems && (
                <div className="leadspace--content-buttongroup">
                  {ctaItems?.map((cta, i) => {
                    return (
                      <Button
                        key={cta.href}
                        large
                        kind={i === 0 ? "primary" : "ghost"}
                        href={cta.href}
                        withIconRight
                        renderIcon={cta.showChevron && <IconChevronRight />}
                      >
                        {cta.label}
                      </Button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </Column>
      </Grid>
    </section>
  );
};

export default LeadSpace;
