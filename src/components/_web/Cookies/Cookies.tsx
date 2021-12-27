import React, { useEffect, useRef, useState } from "react";
import { useCookie } from "react-use";
import { useConstant } from "../../../hooks/useConstant";
import CookieBanner from "../CookieBanner/CookieBanner";
import CookieModal, {
  CookieSetting,
  CookieSettingWithState,
  OptType
} from "../CookieModal/CookieModal";

export type CookiesComponentProps = {
  /**
   * Cookies BannerOpen - Override the banner open state.
   */
  bannerOpen?: boolean;
  /**
   * Cookies BannerLabel
   */
  bannerLabel: string;

  /**
   * Cookies BannerButtonLabel
   */
  bannerButtonLabel?: string;

  /**
   * Cookies BannerLinkLabel
   */
  bannerLinkLabel?: string;

  /**
   * Cookies BannerLinkHref
   */
  bannerLinkHref?: string;

  /**
   * Cookies ModalHeadline
   */
  modalHeadline: string;

  /**
   * Cookies ModalIntro
   */
  modalIntro: string;

  /**
   * Cookies Modal Open - Override the modal open state.
   */
  modalOpen?: boolean;

  /**
   * Cookies AcceptAllLabel
   */
  acceptAllLabel: string;

  /**
   * Cookies AcceptSelectedLabel
   */
  acceptSelectedLabel: string;

  /**
   * Cookies Settings - The settings to render in the UI. Should not change after initial render.
   */
  settings: CookieSetting[];

  /**
   * Cookies Revision - Version of the settings datastructure. Should not be changed after initial render. Default is 1. Floats are not supported.
   */
  revision?: number;

  /**
   * Cookies onSettingsSubmit - When changed settings are submitted, this listener is called with a settingsMap where keys are the ids of the settings and the values are the checked values. The listener is NOT called when the modal is being closed. See onClose for this.
   */
  onSettingsSubmit?: (settingsMap: Record<string, boolean>) => void;

  /**
   * Cookies OnClose - When the modal receives a close request, this listener is being called. It is also being called when the new settings are being submitted additionally to onSettingsSubmit.
   */
  onClose?: () => void;
};

/**
 * Full feature component for cookies.
 */
export const CookiesComponent = ({
  modalOpen,
  modalIntro,
  modalHeadline,
  bannerOpen,
  bannerLabel,
  bannerButtonLabel = "OK",
  bannerLinkLabel,
  bannerLinkHref,
  acceptAllLabel,
  acceptSelectedLabel,
  revision = 1,
  settings,
  onClose,
  onSettingsSubmit
}: CookiesComponentProps) => {
  const [cachedSettings, setCookieSettings, removeCookieSettings] =
    useCookie("cookieSettings");
  const [cachedRevision, setCookieRevision, removeCookieRevision] =
    useCookie("cookieRevision");
  const [cookieConsent, setCookieConsent, removeCookieConsent] =
    useCookie("cookieConsent");
  const [cookieBannerOpen, setCookieBannerOpen] = useState<boolean>(
    cookieConsent !== "true"
  );
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
    setCookieSettings(JSON.stringify(settingsToPersist));
    setCookieRevision(`${initialRevision}`);
  };

  useEffect(() => {
    // if there has been a new revision of settings released, all former settings are being dropped.
    if (initialRevision > parseInt(cachedRevision ?? "1")) {
      removeCookieRevision();
      removeCookieSettings();
      removeCookieConsent();
    }

    // if the revision matches cookies will be loaded into the settings state
    if (cachedSettings) {
      setEditingSettings(JSON.parse(cachedSettings ?? "[]") || []);
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
    if (cachedSettings == null) {
      persistSettings(initialSettings);
    }
    setCookieModalOpen(false);

    setCookieConsent("true");
    setCookieBannerOpen(false);

    onClose?.();
  };

  const applySettings = (settingsToApply: CookieSettingWithState[]) => {
    persistSettings(settingsToApply);

    const settingsMapToApply: Record<string, boolean> = {};
    settingsToApply.forEach((s) => {
      settingsMapToApply[s.id] = s.checked;
    });
    onSettingsSubmit?.(settingsMapToApply);

    close();
  };

  return (
    <>
      <CookieBanner
        label={bannerLabel}
        linkHref={bannerLinkHref}
        linkLabel={bannerLinkLabel}
        buttonLabel={bannerButtonLabel}
        onButtonClick={close}
        onLinkClick={(event) => {
          event.stopPropagation();
          setCookieModalOpen(true);
        }}
        open={bannerOpen || cookieBannerOpen}
      />
      <CookieModal
        intro={modalIntro}
        headline={modalHeadline}
        open={cookieModalOpen || modalOpen}
        ref={modalRef}
        settings={editingSettings}
        onSettingChanged={(
          event: React.ChangeEvent<HTMLInputElement>,
          settingIndex: number
        ) => {
          setEditingSettings(
            editingSettings.map((s, i) => ({
              ...s,
              checked: settingIndex === i ? event.target.checked : s.checked
            }))
          );
        }}
        secondaryLabel={acceptSelectedLabel}
        onSecondaryClick={() => {
          // Use ui settings
          applySettings(editingSettings);
        }}
        primaryLabel={acceptAllLabel}
        onPrimaryClick={() => {
          // Do not use ui and rather use all as true
          const settingsToApply = editingSettings.map((s) => ({
            ...s,
            checked: true
          }));

          applySettings(settingsToApply);
        }}
        onClose={close}
      />
    </>
  );
};
