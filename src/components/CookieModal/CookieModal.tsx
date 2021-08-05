import React from "react";
import Typography from "../Typography/Typography";
import Modal from "../Modal/Modal";
import Checkbox from "../Checkbox/Checkbox";
import ModalBody from "../Modal/ModalBody";
import ModalHeader from "../Modal/ModalHeader";
import ModalFooter from "../Modal/ModalFooter";

type CookieModalProps = {
  /**
   * Open
   */
  open: boolean;

  /**
   * OnClose
   */
  onClose?: (event: any) => void;
};

const CookieModal = ({ open, onClose }: CookieModalProps) => {
  return (
    <Modal size="md" open={open} onClose={onClose} withDivider>
      <ModalHeader headline="Cookies anpassen" />
      <ModalBody>
        <Typography type="text" token="body-small" className="">
          Über unser Tool können Sie sich einen Überblick zu den verwendeten
          Cookies schaffen, sowie einzelne Kategorien aktivieren bzw.
          deaktivieren. Mehr Informationen finden Sie in unserer
          Datenschutzerklärung.
        </Typography>
        <div className="cookiemodal--check">
          <Checkbox label="Essentielle Cookies" id="1" />
          <Typography
            type="text"
            token="body-small"
            className="cookiemodal--check-description"
          >
            Wir verwenden einige Cookies auf der Website, die von wesentlicher
            Bedeutung sind, um bestimmte Funktionen für Sie zur Verfügung zu
            stellen (z.B. Zugang zu geschützten Bereichen). Wenn Sie diese
            Cookies deaktivieren, stehen erweiterte Funktionen der Website nicht
            zur Verfügung. Sie können diese Cookies über Ihre
            Browsereinstellungen blockieren oder löschen. Hierzu teilen wir
            Daten mit Cloudflare.
          </Typography>
        </div>
        <div className="cookiemodal--check">
          <Checkbox label="Analyse Cookies" id="2" />
          <Typography
            type="text"
            token="body-small"
            className="cookiemodal--check-description"
          >
            Diese Cookies sammeln Informationen, die uns dabei helfen zu
            verstehen, wie Besucher unsere Website nutzen oder wie effektiv
            unsere Marketingkampagnen sind. Sie helfen uns die Website optimal
            anzupassen und Ihre Erfahrung zu verbessern. Hierzu teilen wir Daten
            mit Google Analytics, Mixpanel, Hotjar &amp; Google Optimize.
          </Typography>
        </div>
        <div className="cookiemodal--check">
          <Checkbox label="Marketing Cookies" id="3" />
          <Typography
            type="text"
            token="body-small"
            className="cookiemodal--check-description"
          >
            Diese Cookies werden verwendet, um unsere Marketingaktionen für Sie
            relevanter und interessanter zu machen. Auf diese Weise stellen wir
            sicher, dass Sie nur die für Sie relevante Anzeigen angezeigt
            bekommen. Hierzu teilen wir Daten mit LinkedIn, Taboola, Outbrain,
            Awin, Bing Ads, Google, Outfunnel, Snapchat, Tiktok &amp; Facebook.
          </Typography>
        </div>
      </ModalBody>
      <ModalFooter
        primaryLabel="Alle Cookies akzeptieren"
        secondaryLabel="Alle ablehnen"
        onClose={onClose}
        onPrimary={() => {}}
      />
    </Modal>
  );
};

export default CookieModal;
