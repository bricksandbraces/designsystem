import React, { useRef, useState } from "react";
import cx from "classnames";
import {
  IconChevronRight,
  IconPlayerPause,
  IconPlayerPlay
} from "@tabler/icons";
import { Grid, Column } from "../../Grid/Grid";
import Button from "../../Button/Button";
import { prefix } from "../../../settings";
import { idfy } from "../../../helpers/arrayUtilities";
import IconOnlyButton from "../../Button/IconOnlyButton";

export type CtaItem = {
  /**
   * CtaItem Link to location
   */
  href: string;

  /**
   * CtaItem Label
   */
  label: string;

  /**
   * CtaItem Chevron
   */
  showChevron: boolean;
};

export type LeadSpaceProps = {
  /**
   * LeadSpace BackgroundImage
   */
  backgroundImage?: string;

  /**
   * LeadSpace VideoUrl
   */
  videoUrl?: string;

  /**
   * LeadSpace VideoPlayLabel
   */
  videoPlayLabel?: string;

  /**
   * LeadSpace VideoPauseLabel
   */
  videoPauseLabel?: string;

  /**
   * LeadSpace Title
   */
  title?: string;

  /**
   * LeadSpace CtaItems
   */
  ctaItems?: CtaItem[];
};

const LeadSpace = (
  {
    backgroundImage,
    videoUrl,
    videoPauseLabel,
    videoPlayLabel,
    title,
    ctaItems
  }: LeadSpaceProps,
  ref: React.ForwardedRef<HTMLElement>
) => {
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
        backgroundImage: backgroundImage?.startsWith("url(")
          ? backgroundImage
          : `url(${backgroundImage})`
      }}
      ref={ref}
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
            aria-label={videoPlay ? videoPauseLabel : videoPlayLabel}
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
          lg={12}
          lgOffset={2}
          xlg={12}
          xlgOffset={2}
          className={`${prefix}--leadspace-column`}
        >
          <div className={`${prefix}--leadspace-container`}>
            <div className={`${prefix}--leadspace-content`}>
              {title && (
                <h1 className={`${prefix}--leadspace-headline`}>{title}</h1>
              )}
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
                        icon={
                          cta.showChevron ? <IconChevronRight /> : undefined
                        }
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

export default React.forwardRef(LeadSpace);
