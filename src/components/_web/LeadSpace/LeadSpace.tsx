import { IconPlayerPause, IconPlayerPlay } from "@tabler/icons";
import cx from "classnames";
import React, { useRef, useState } from "react";
import { idfy } from "../../../helpers/arrayUtilities";
import { prefix } from "../../../settings";
import { Button } from "../../Button/Button";
import { IconOnlyButton } from "../../Button/IconOnlyButton";
import { Column, Grid } from "../../Grid/Grid";

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
   * LeadSpace Text
   */
  text?: string;

  /**
   * LeadSpace CtaItems
   */
  ctaItems?: CtaItem[];
};

export const LeadSpace = React.forwardRef(function LeadSpace(
  {
    backgroundImage,
    videoUrl,
    videoPauseLabel,
    videoPlayLabel,
    title,
    text,
    ctaItems
  }: LeadSpaceProps,
  ref: React.ForwardedRef<HTMLElement>
) {
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
          lg={14}
          lgOffset={1}
          xlg={14}
          xlgOffset={1}
          className={`${prefix}--leadspace-column`}
        >
          <div className={`${prefix}--leadspace-container`}>
            <div className={`${prefix}--leadspace-content`}>
              {title && (
                <h1 className={`${prefix}--leadspace-headline`}>{title}</h1>
              )}
              {text && (
                <div className={`${prefix}--leadspace-text`}>{text}</div>
              )}
              {ctaItems && (
                <div className={`${prefix}--leadspace-content__buttongroup`}>
                  {indexedCtaItems?.map((cta, i) => {
                    return (
                      <Button
                        key={cta.id}
                        size="large"
                        kind={i === 0 ? "primary" : "tertiary"}
                        href={cta.href}
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
});
