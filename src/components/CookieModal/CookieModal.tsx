import React, { ChangeEvent, forwardRef } from "react";
import { prefix } from "../../settings";
import Checkbox from "../Checkbox/Checkbox";
import Modal from "../Modal/Modal";
import ModalBody from "../Modal/ModalBody";
import ModalFooter from "../Modal/ModalFooter";
import ModalHeader from "../Modal/ModalHeader";
import Typography from "../Typography/Typography";

export enum OptType {
  OPT_IN,
  OPT_OUT,
  ESSENTIAL
}

export type CookieSetting = {
  id: string;
  type: OptType;
  label: string;
  description: string;
};

export type CookieSettingWithState = CookieSetting & { checked: boolean };

/**
 * UI component representing a controlled cookie setting checkbox
 */
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
    <div className={`${prefix}--cookiemodal--check`}>
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
        <Typography
          type="text"
          token="body-small"
          className={`${prefix}--cookiemodal--check-description`}
        >
          {description}
        </Typography>
      </Checkbox>
    </div>
  );
};

type CookieModalProps = {
  open?: boolean;
  intro: string;
  headline: string;
  primaryLabel: string;
  onPrimaryClick: () => void;
  secondaryLabel: string;
  onSecondaryClick?: () => void;
  settings: CookieSettingWithState[];
  onSettingChanged?: (
    event: ChangeEvent<HTMLInputElement>,
    settingIndex: number
  ) => void;
  onClose?: () => void;
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
  ref: ForwardedRef<HTMLDivElement>
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
        <Typography type="text" token="body-small">
          {intro}
        </Typography>
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

export default forwardRef<HTMLDivElement, CookieModalProps>(CookieModal);
