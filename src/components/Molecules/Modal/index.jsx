import React, { useEffect, useRef, useState } from "react";

function Modal({ isActive, idModal, children }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(isActive);
  }, [isActive]);
  return (
    <>
      <div
        id={idModal}
        className={`modal ${
          active ? "active" : ""
        } fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
        tabIndex="-1"
        aria-hidden="true"
      >
        {children}
      </div>
    </>
  );
}

export const ModalContent = (onClose, children) => {
  const contentRef = useRef(null);

  const closeModal = () => {
    contentRef.current.parentNode.classList.remove("active");
    if (onClose) onClose();
  };

  return (
    <div ref={contentRef} className="modal__content">
      {children}
      <div className="modal__content__close" onClick={closeModal}>
        <i className="bx bx-x"></i>
      </div>
    </div>
  );
};

export default Modal;
