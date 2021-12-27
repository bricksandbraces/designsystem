import React from "react";
import { prefix } from "../../../settings";
import Checkbox from "../../Checkbox/Checkbox";
import Modal from "../../Modal/Modal";
import ModalBody from "../../Modal/ModalBody";
import ModalFooter from "../../Modal/ModalFooter";
import ModalHeader from "../../Modal/ModalHeader";
import { Body } from "../../Typography/Typography";

export enum OptType {
  OPT_IN,
  OPT_OUT,
  ESSENTIAL
}

export type CookieSetting = {
  /**
   * CookieSetting ID mandatory
   */
  id: string;

  /**
   * CookieSetting OptType
   */
  type: OptType;

  /**
   * CookieSetting Label
   */
  label: string;

  /**
   * CookieSetting Description
   */
  description: string;
};

export type CookieSettingWithState = CookieSetting & { checked: boolean };

/**
 * UI component representing a controlled cookie setting checkbox
 */
export const CookieSettingControl = React.forwardRef(
  function CookieSettingsControlFn(
    {
      id,
      type,
      label,
      description,
      checked,
      onChange
    }: CookieSettingWithState & {
      onChange?: React.ChangeEventHandler<HTMLInputElement>;
    },
    ref: React.ForwardedRef<HTMLDivElement>
  ) {
    return (
      <div className={`${prefix}--cookiemodal-check`} ref={ref}>
        <Checkbox
          label={label}
          value={label.toLowerCase()}
          id={id}
          checked={
            checked ?? (type === OptType.OPT_OUT || type === OptType.ESSENTIAL)
          }
          disabled={type === OptType.ESSENTIAL}
          onChange={onChange}
        >
          {description}
        </Checkbox>
      </div>
    );
  }
);

export type CookieModalProps = {
  /**
   * CookieModal Open
   */
  open?: boolean;

  /**
   * CookieModal Intro
   */
  intro: string;

  /**
   * CookieModal Headline
   */
  headline: string;

  /**
   * CookieModal Primary Label
   */
  primaryLabel: string;

  /**
   * CookieModal onPrimaryClick
   */
  onPrimaryClick: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * CookieModal Secondary Label
   */
  secondaryLabel: string;

  /**
   * CookieModal onSecondarClick
   */
  onSecondaryClick?: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * CookieModal Settings
   */
  settings: CookieSettingWithState[];

  /**
   * CookieModal OnSettingChanged
   */
  onSettingChanged?: (
    event: React.ChangeEvent<HTMLInputElement>,
    settingIndex: number
  ) => void;

  /**
   * CookieModal OnClose
   */
  onClose?: (
    event:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | KeyboardEvent
      | MouseEvent
  ) => void;
};

/**
 * UI component building a list of controlled cookie settings and a default layout.
 */
const CookieModal = (
  {
    open,
    headline,
    intro,
    settings,
    onSettingChanged,
    onClose,
    primaryLabel,
    onPrimaryClick,
    secondaryLabel,
    onSecondaryClick
  }: CookieModalProps,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  return (
    <Modal
      ref={ref}
      size="md"
      open={open ?? false}
      onClose={onClose}
      withDivider
    >
      <ModalHeader headline={headline} />
      <ModalBody>
        <Body type="body-02">{intro}</Body>
        {settings.map((setting, i) => {
          return (
            <CookieSettingControl
              key={setting.id}
              {...setting}
              onChange={(event) => onSettingChanged?.(event, i)}
            />
          );
        })}
      </ModalBody>
      <ModalFooter
        primaryLabel={primaryLabel}
        secondaryLabel={secondaryLabel}
        onSecondaryClick={onSecondaryClick}
        onPrimaryClick={onPrimaryClick}
      />
    </Modal>
  );
};

export default React.forwardRef<HTMLDivElement, CookieModalProps>(CookieModal);
