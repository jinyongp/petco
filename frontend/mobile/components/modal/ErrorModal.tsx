import React from "react";
import ConfirmModal from "./ConfirmModal";
import PropTypes from "prop-types";

interface ErrorModalProps {
  error: boolean;
  content: string;
  onClose: () => void;
}

export default function ErrorModal({
  error,
  content,
  onClose,
}: ErrorModalProps): JSX.Element {
  return (
    <ConfirmModal
      isVisible={error}
      content={content}
      onClose={onClose}
      containerSize={{ width: 330, height: "auto" }}
      buttonSize={{ width: 160 }}
      buttonTitle="확인"
    />
  );
}

ErrorModal.propTypes = {
  error: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
