import CustomModal, { ModalBody, ModalFooter, ModalHeader } from "./CustomModal";
import SubmitButton from "./SubmitButton";

const ConfirmModal = ({ isOpen, onClose, onSubmit, text, isLoading }) => {
  return (
    <CustomModal isOpen={isOpen} onClose={onClose} modalSize="lg">
      <ModalHeader>
        <h3 id="staticBackdropLabel" className="text-danger">
          Warning
        </h3>
        <button type="button" className="close" onClick={onClose}>
          <span aria-hidden="true">&times;</span>
        </button>
      </ModalHeader>
      <ModalBody>
        <label htmlFor="selek">{text ?? "Apakah anda yakin?"}</label>
      </ModalBody>
      <ModalFooter>
        <SubmitButton className="btn btn-danger btn-sm" onClick={onSubmit} isLoading={isLoading} />
      </ModalFooter>
    </CustomModal>
  );
};

export default ConfirmModal;
