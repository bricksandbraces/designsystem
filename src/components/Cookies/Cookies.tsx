import React, { useState } from "react";
import Typography from "../Typography/Typography";
import Modal from "../Modal/Modal";
import Checkbox from "../Checkbox/Checkbox";
import ModalBody from "../Modal/ModalBody";
import ModalHeader from "../Modal/ModalHeader";
import ModalFooter from "../Modal/ModalFooter";
import CookieBanner from "../CookieBanner/CookieBanner";

enum OptType {
  OPT_IN,
  OPT_OUT,
  ESSENTIAL
}

type CookieSetting = {
  id: string;
  type: OptType;
  label: string;
  description: string;
};

const CookieSettingControl = ({
  id,
  type,
  label,
  description
}: CookieSetting) => {
  return (
    <div className="cookiemodal--check">
      <Checkbox
        label={label}
        id={id}
        defaultChecked={type === OptType.OPT_OUT}
        disabled={type === OptType.ESSENTIAL}
      />
      <Typography
        type="text"
        token="body-small"
        className="cookiemodal--check-description"
      >
        {description}
      </Typography>
    </div>
  );
};

type CookieModalProps = {
  modalHeadline?: string;
  modalIntro: string;

  bannerLabel: string;
  bannerButtonLabel?: string;
  bannerLinkLabel: string;
  bannerLinkHref: string;

  /**  */
  acceptAllLabel?: string;
  denyAllLabel?: string;

  /**
   * The settings to render
   */
  settings: CookieSetting[];

  /**
   * When the changed settings are submitted, this listener is called with a settingsMap where keys are the ids of the settings and the values are the checked values.
   */
  onSettingsSubmit?: (settingsMap: Record<string, boolean>) => void;
};

const Cookies = ({
  modalIntro,
  modalHeadline = "Cookies anpassen",
  bannerLabel,
  bannerButtonLabel,
  bannerLinkLabel,
  bannerLinkHref,
  acceptAllLabel = "Alle Cookies akzeptieren",
  denyAllLabel = "Alle ablehnen",
  settings,
  onSettingsSubmit
}: CookieModalProps) => {
  const [open] = useState<boolean>(false);

  return (
    <>
      <CookieBanner
        label={bannerLabel}
        linkHref={bannerLinkHref}
        linkLabel={bannerLinkLabel}
        buttonLabel={bannerButtonLabel}
        onButtonClick={() => {
          // todo: implement
        }}
        onLinkClick={() => {
          // todo: implement
        }}
        open
      />
      <Modal
        size="md"
        open={open}
        onClose={() => {
          // todo: on submit settings
        }}
        withDivider
      >
        <ModalHeader headline={modalHeadline} />
        <ModalBody>
          <Typography type="text" token="body-small" className="">
            {modalIntro}
          </Typography>
          {settings.map((setting) => {
            return <CookieSettingControl key={setting.id} {...setting} />;
          })}
        </ModalBody>
        <ModalFooter
          primaryLabel={acceptAllLabel}
          secondaryLabel={denyAllLabel}
          onClose={() => {
            // todo: on submit settings
          }}
          onPrimary={() => {
            // todo: on submit settings
            onSettingsSubmit?.(
              settings.reduce((settingsMap, setting) => {
                // todo: fetch from DOM (?)
                settingsMap[setting.id] = false;
                return settingsMap;
              }, {} as Record<string, boolean>)
            );
          }}
        />
      </Modal>
    </>
  );
};

export default Cookies;
