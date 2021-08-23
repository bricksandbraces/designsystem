import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import Typography from "../Typography/Typography";
import Modal from "../Modal/Modal";
import Checkbox from "../Checkbox/Checkbox";
import ModalBody from "../Modal/ModalBody";
import ModalHeader from "../Modal/ModalHeader";
import ModalFooter from "../Modal/ModalFooter";
import CookieBanner from "../CookieBanner/CookieBanner";

export enum OptType {
  OPT_IN,
  OPT_OUT,
  ESSENTIAL
}

type CookieSetting = {
  id: string;
  type: OptType;
  label: string;
  description: string;

  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const CookieSettingControl = ({
  id,
  type,
  label,
  description,
  checked,
  onChange
}: CookieSetting) => {
  return (
    <div className="cookiemodal--check">
      <Checkbox
        label={label}
        id={id}
        checked={
          checked ?? (type === OptType.OPT_OUT || type === OptType.ESSENTIAL)
        }
        disabled={type === OptType.ESSENTIAL}
        onChange={onChange}
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
  /** Override the banner open state. */
  bannerOpen?: boolean;
  bannerLabel: string;
  bannerButtonLabel?: string;
  bannerLinkLabel?: string;
  bannerLinkHref?: string;

  modalHeadline?: string;
  modalIntro?: string;
  /** Override the modal open state. */
  modalOpen?: boolean;
  acceptAllLabel?: string;
  denyAllLabel?: string;

  /**
   * The settings to render. Should not change after initial render.
   */
  initialSettings: CookieSetting[];

  /** Version of the settings datastructure. Should not be changed after initial render. Default is 1. Floats are not supported. */
  revision?: number;

  /**
   * When the changed settings are submitted, this listener is called with a settingsMap where keys are the ids of the settings and the values are the checked values.
   */
  onSettingsSubmit?: (settingsMap: Record<string, boolean>) => void;
};

const CookiesComponent = ({
  modalOpen,
  modalIntro = "Hier können Sie Ihre Cookies anpassen.",
  modalHeadline = "Cookies anpassen",
  bannerOpen,
  bannerLabel = "Diese Website verwendet Cookies 🍪 .",
  bannerButtonLabel = "Standardeinstellungen akzeptieren",
  bannerLinkLabel = "Einstellungen anpassen",
  bannerLinkHref,
  acceptAllLabel = "Alle Cookies akzeptieren",
  denyAllLabel = "Alle ablehnen",
  revision = 1,
  initialSettings,
  onSettingsSubmit
}: CookieModalProps) => {
  const [cookieModalOpen, setCookieModalOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const revisionRef = useRef(revision);
  const [settings, setSettings] = useState<CookieSetting[]>(initialSettings);
  useEffect(() => {
    let cachedRevision = Cookies.getJSON("cookieRevision");

    // if there has been a new revision of settings released, all former settings are being dropped.
    if (revisionRef > cachedRevision) {
      cachedRevision = revision;
      Cookies.remove("cookieRevision");
      Cookies.remove("cookieSettings");
    }

    // if the revision matches cookies will be loaded into the settings state
    const cachedSettings = Cookies.getJSON("cookieSettings");
    if (cachedSettings) {
      setSettings(cachedSettings);
    }
  }, []);

  const persistSettings = (persistedSettings: CookieSetting[]) => {
    Cookies.set("cookieSettings", persistedSettings);
    Cookies.set("cookieRevision", `${revisionRef.current}`);
  };

  useEffect(() => {
    console.log(
      `Persisting cookieSettings: ${JSON.stringify(settings)}`,
      ` with revision ${revisionRef.current}`
    );
    persistSettings(settings);
  }, [settings]);

  return (
    <>
      <CookieBanner
        label={bannerLabel}
        linkHref={bannerLinkHref}
        linkLabel={bannerLinkLabel}
        buttonLabel={bannerButtonLabel}
        onButtonClick={() => {
          persistSettings(settings);
        }}
        onLinkClick={(event: Event) => {
          event.stopPropagation();
          setCookieModalOpen(true);
        }}
        open={
          bannerOpen ||
          (!!Cookies.get("cookieSettings") &&
            parseInt(Cookies.get("cookieRevision") ?? "1") <= revision)
        }
      />
      <Modal
        ref={modalRef}
        size="md"
        open={modalOpen || cookieModalOpen}
        onClose={() => {
          persistSettings(settings);
          setCookieModalOpen(false);
        }}
        withDivider
      >
        <ModalHeader headline={modalHeadline} />
        <ModalBody>
          <Typography type="text" token="body-small" className="">
            {modalIntro}
          </Typography>
          {settings.map((setting) => {
            return (
              <CookieSettingControl
                key={setting.id}
                {...setting}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setSettings(
                    settings.map((s) => ({
                      ...s,
                      checked: event.target.checked
                    }))
                  );
                }}
              />
            );
          })}
        </ModalBody>
        <ModalFooter
          primaryLabel={acceptAllLabel}
          secondaryLabel={denyAllLabel}
          onClose={() => {
            persistSettings(settings);
            setCookieModalOpen(false);
          }}
          onPrimary={() => {
            // todo: persist new settings only here

            const newSettings: Record<string, boolean> = {};
            modalRef.current?.querySelectorAll("input").forEach((inputEl) => {
              newSettings[inputEl.id] = inputEl.checked;
            });
            onSettingsSubmit?.(newSettings);
          }}
        />
      </Modal>
    </>
  );
};

export default CookiesComponent;
