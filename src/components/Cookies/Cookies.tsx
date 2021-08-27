import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import Typography from "../Typography/Typography";
import Modal from "../Modal/Modal";
import Checkbox from "../Checkbox/Checkbox";
import ModalBody from "../Modal/ModalBody";
import ModalHeader from "../Modal/ModalHeader";
import ModalFooter from "../Modal/ModalFooter";
import CookieBanner from "../CookieBanner/CookieBanner";
import useConstant from "../../hooks/useConstant";

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
};

type CookieSettingWithState = CookieSetting & { checked: boolean };

const CookieSettingControl = ({
  id,
  type,
  label,
  description,
  checked,
  onChange
}: CookieSettingWithState & {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}) => {
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
  acceptSelectedLabel?: string;

  /**
   * The settings to render in the UI. Should not change after initial render.
   */
  settings: CookieSetting[];

  /** Version of the settings datastructure. Should not be changed after initial render. Default is 1. Floats are not supported. */
  revision?: number;

  /**
   * When changed settings are submitted, this listener is called with a settingsMap where keys are the ids of the settings and the values are the checked values. The listener is NOT called when the modal is being closed. See onClose for this.
   */
  onSettingsSubmit?: (settingsMap: Record<string, boolean>) => void;

  /**
   * When the modal receives a close request, this listener is being called. It is also being called when the new settings are being submitted additionally to onSettingsSubmit.
   */
  onClose?: () => void;
};

const CookiesComponent = ({
  modalOpen,
  modalIntro = "Hier können Sie Ihre Cookies anpassen.",
  modalHeadline = "Cookies anpassen",
  bannerOpen,
  bannerLabel = "Diese Website verwendet Cookies 🍪 .",
  bannerButtonLabel = "OK",
  bannerLinkLabel = "Einstellungen anpassen",
  bannerLinkHref,
  acceptAllLabel = "Alle Cookies akzeptieren",
  acceptSelectedLabel = "Einstellungen übernehmen",
  revision = 1,
  settings,
  onClose,
  onSettingsSubmit
}: CookieModalProps) => {
  const [cookieBannerOpen, setCookieBannerOpen] = useState<boolean>(false);
  const [cookieModalOpen, setCookieModalOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  // cached version of the ref to that the user can't change it after init
  const initialRevision = useConstant<number>(revision);
  // cached version of the initial settings
  const initialSettings = useConstant<CookieSettingWithState[]>(
    settings.map((definition) => {
      return {
        ...definition,
        checked:
          definition.type === OptType.ESSENTIAL ||
          definition.type === OptType.OPT_OUT
      };
    })
  );

  // the settings that are currently set on the UI
  const [editingSettings, setEditingSettings] = useState<
    CookieSettingWithState[]
  >([]);

  const persistSettings = (settingsToPersist: CookieSettingWithState[]) => {
    Cookies.set("cookieSettings", settingsToPersist);
    Cookies.set("cookieRevision", `${initialRevision}`);
  };

  useEffect(() => {
    const cachedRevision = Cookies.getJSON("cookieRevision");

    // if there has been a new revision of settings released, all former settings are being dropped.
    if (initialRevision > parseInt(cachedRevision ?? "1")) {
      Cookies.remove("cookieRevision");
      Cookies.remove("cookieSettings");
      Cookies.remove("cookieConsent");
    }

    // if the revision matches cookies will be loaded into the settings state
    const cachedSettings = Cookies.getJSON("cookieSettings");
    if (cachedSettings) {
      setEditingSettings(cachedSettings);
      setCookieBannerOpen(false);
    } else {
      // else the defaults should be persisted
      setCookieBannerOpen(true);
      setEditingSettings(initialSettings);
      persistSettings(initialSettings);
    }
  }, [modalOpen]);

  const close = () => {
    // when closed, keep persisted cookies.
    // if no cookies were persisted, save the initialSettings

    if (Cookies.getJSON("cookieSettings") == null) {
      persistSettings(initialSettings);
    }
    setCookieModalOpen(false);

    Cookies.set("cookieConsent", "true");
    setCookieBannerOpen(false);

    onClose?.();
  };

  return (
    <>
      <CookieBanner
        label={bannerLabel}
        linkHref={bannerLinkHref}
        linkLabel={bannerLinkLabel}
        buttonLabel={bannerButtonLabel}
        onButtonClick={close}
        onLinkClick={(event: Event) => {
          event.stopPropagation();
          setCookieModalOpen(true);
        }}
        open={bannerOpen || cookieBannerOpen}
      />
      <Modal
        ref={modalRef}
        size="md"
        open={modalOpen || cookieModalOpen}
        onClose={close}
        withDivider
      >
        <ModalHeader headline={modalHeadline} />
        <ModalBody>
          <Typography type="text" token="body-small" className="">
            {modalIntro}
          </Typography>
          {editingSettings.map((setting, i) => {
            return (
              <CookieSettingControl
                key={setting.id}
                {...setting}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setEditingSettings(
                    editingSettings.map((s, j) => ({
                      ...s,
                      checked: i === j ? event.target.checked : s.checked
                    }))
                  );
                }}
              />
            );
          })}
        </ModalBody>
        <ModalFooter
          primaryLabel={acceptAllLabel}
          secondaryLabel={acceptSelectedLabel}
          onSecondaryClick={() => {
            // Use ui settings
            persistSettings(editingSettings);

            const settingsMapToApply: Record<string, boolean> = {};
            editingSettings.forEach((s) => {
              settingsMapToApply[s.id] = s.checked;
            });
            onSettingsSubmit?.(settingsMapToApply);

            setCookieModalOpen(false);

            Cookies.set("cookieConsent", "true");
            setCookieBannerOpen(false);

            onClose?.();
          }}
          onPrimaryClick={() => {
            // Do not use ui and rather use all as true
            const settingsToApply = editingSettings.map((s) => ({
              ...s,
              checked: true
            }));
            persistSettings(settingsToApply);

            const settingsMapToApply: Record<string, boolean> = {};
            settingsToApply.forEach((s) => {
              settingsMapToApply[s.id] = true;
            });
            onSettingsSubmit?.(settingsMapToApply);

            setCookieModalOpen(false);

            Cookies.set("cookieConsent", "true");
            setCookieBannerOpen(false);

            onClose?.();
          }}
        />
      </Modal>
    </>
  );
};

export default CookiesComponent;
