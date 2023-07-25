/* eslint-disable react/prop-types */
import Button from '@/components/UI/Button';

const ConfirmModal = ({ title, message, onCloseConfirm, onHandleDelete }) => {
  return (
    <>
      <div className="backdrop" onClick={onCloseConfirm}></div>
      <div className="modal card">
        <header className="header">
          <h2>{title}</h2>
        </header>
        <div className="content">
          <p>{message}</p>
        </div>
        <footer className="w-full flex justify-end p-5 space-x-5 flex-row">
          <div>
            <Button
              className="text-center h-14	bg-transparent w-full rounded-xl text-gray-300 font-montserrat font-semibold px-5"
              onClick={onCloseConfirm}
            >
              Cancel
            </Button>
          </div>
          <div>
            <Button
              className="text-center h-14	bg-red w-full rounded-xl text-white font-montserrat font-semibold px-5"
              onClick={onHandleDelete}
            >
              Confirm
            </Button>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ConfirmModal;
