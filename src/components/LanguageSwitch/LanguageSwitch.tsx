import React, { ReactNode, useState } from "react";
import cx from "classnames";

type LanguageSwitchItems = {
  /**
   * LanguageSwitch ID
   */
  id: string;

  /**
   * LanguageSwitch Label
   */
  label: string;

  /**
   * LanguageSwitch Label Name
   */
  langName: string;

  /**
   * Default language
   */
  defaultLang?: boolean;
};

type LanguageSwitchProps = {
  /**
   * React className
   */
  className?: string;

  /**
   * LanguageSwitch ID
   */
  id?: string;

  /**
   * LanguageSwitch Value
   */
  value?: string;

  /**
   * Checked values
   */
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;

  /**
   * LanguageSwitch Items
   */
  items: LanguageSwitchItems[];
};

const LanguageSwitch = ({
  id,
  value,
  checked,
  defaultChecked,
  className,
  items,
  onChange,
  ...rest
}: LanguageSwitchProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState(items[0].label);
  return (
    <form>
      <fieldset>
        <input
          key={items[0].id}
          type="radio"
          name="langswitch"
          value={value}
          id={items[0].id}
          checked
          defaultChecked={items[0].defaultLang}
          onChange={() => {
            setSelectedLanguage(items[0].label);
          }}
          {...rest}
        />
        <input
          key={items[1].id}
          type="radio"
          name="langswitch"
          value={value}
          id={items[1].id}
          checked={checked}
          defaultChecked={items[1].defaultLang}
          onChange={() => {
            setSelectedLanguage(items[1].label);
          }}
          {...rest}
        />

        <span>{selectedLanguage}</span>
      </fieldset>
    </form>
  );
};

export default LanguageSwitch;
