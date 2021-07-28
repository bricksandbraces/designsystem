import React from "react";
import Typography from "../Typography/Typography";
import Modal from "../Modal/Modal";

// type CookieModalProps = {
//   /**
//    * Size
//    */
//   // size?: "sm" | "md" | "lg" | "xlg";
// };

const CookieModal = () => {
  return (
    <Modal open size="sm" headline="Cookies anpassen">
      <Typography type="paragraph" token="body-small">
        Über unser Tool können Sie sich einen Überblick zu den verwendeten
        Cookies schaffen, sowie einzelne Kategorien aktivieren bzw.
        deaktivieren. Mehr Informationen finden Sie in unserer
        Datenschutzerklärung.
      </Typography>
    </Modal>
  );
};

export default CookieModal;
