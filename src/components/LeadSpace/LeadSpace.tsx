import React, { useRef, useState } from "react";
import cx from "classnames";
import {
  IconChevronRight,
  IconPlayerPause,
  IconPlayerPlay
} from "@tabler/icons";
import { Grid, Column } from "../Grid/Grid";
import Button from "../Button/Button";
import { prefix } from "../../settings";
import { idfy } from "../../helpers/arrayUtilities";
import Headline from "../Typography/Headline";
import Marketing from "../Typography/Marketing";
import IconOnlyButton from "../Button/IconOnlyButton";

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
        [`${prefix}--leadspace-video__player`]: videoUrl
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
          <IconOnlyButton
            className={`${prefix}--leadspace-video__controls`}
            aria-label={videoPlay ? "Pause video" : "Play video"}
            kind="ghost"
            size="large"
            hideTooltip
            onClick={() => {
              if (videoPlay) {
                video.current?.pause();
              } else {
                video.current?.play();
              }

              setVideoPlay(!videoPlay);
            }}
            icon={videoPlay ? <IconPlayerPause /> : <IconPlayerPlay />}
          />
        </>
      )}
      <Grid
        narrow
        className={cx(`${prefix}--leadspace-grid`, {
          [`${prefix}--leadspace-video`]: videoUrl
        })}
      >
        <Column
          sm={4}
          smOffset={0}
          md={6}
          mdOffset={1}
          lg={14}
          lgOffset={2}
          xlg={14}
          xlgOffset={2}
          className={`${prefix}--leadspace-column`}
        >
          <div className={`${prefix}--leadspace-container`}>
            <div className={`${prefix}--leadspace-content`}>
              {title && <Marketing type="marketing-01">{title}</Marketing>}
              {ctaItems && (
                <div className={`${prefix}--leadspace-content__buttongroup`}>
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
