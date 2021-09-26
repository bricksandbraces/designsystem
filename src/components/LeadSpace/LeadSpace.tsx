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
import { prefix } from "../../settings";
import { idfy } from "../../helpers/arrayUtilities";

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
  const video = useRef<HTMLVideoElement>(null);
  const [videoPlay, setVideoPlay] = useState(true);
  const indexedCtaItems = idfy(ctaItems);
  return (
    <section
      id="leadspace"
      className={cx(`${prefix}--leadspace`, {
        [`${prefix}--leadspace--video-player`]: videoUrl
      })}
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
            className={`${prefix}--leadspace--video-controls`}
            type="button"
            aria-label={videoPlay ? "Pause video" : "Play video"}
            onClick={() => {
              if (videoPlay) {
                video.current?.pause();
              } else {
                video.current?.play();
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
        className={cx(`${prefix}--leadspace--grid`, {
          [`${prefix}--leadspace--video`]: videoUrl
        })}
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
          className={`${prefix}--leadspace--column`}
        >
          <div className={`${prefix}--leadspace--container`}>
            <div className={`${prefix}--leadspace--content`}>
              {title && (
                <Typography type="h1" token="heading-06">
                  {title}
                </Typography>
              )}
              {ctaItems && (
                <div className={`${prefix}--leadspace--content-buttongroup`}>
                  {indexedCtaItems?.map((cta, i) => {
                    return (
                      <Button
                        key={cta.id}
                        size="large"
                        kind={i === 0 ? "primary" : "ghost"}
                        href={cta.href}
                        iconPosition="right"
                        icon={cta.showChevron && <IconChevronRight />}
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
