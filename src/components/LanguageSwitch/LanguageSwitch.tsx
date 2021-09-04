import React from "react";

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
  return (
    <form>
      <fieldset>
        <label className="language-switch">
          <input
            className="language-switch--input"
            tabIndex={0}
            type="checkbox"
            value={value}
            id={id}
            checked={checked}
            defaultChecked={defaultChecked}
            onChange={onChange}
            {...rest}
          />
          <div className="language-switch--slider">
            <div className="language-switch--lang">
              <span className="language-switch--lang-item">DE</span>
              <span className="language-switch--lang-item__divider" />
              <span className="language-switch--lang-item">EN</span>
            </div>
          </div>
        </label>
      </fieldset>
    </form>
  );
};

export default LanguageSwitch;
