"use client"

import { ModalContext } from "@/contexts/ModalContext";
import { FC, useContext, useEffect } from "react";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import FocusLock from "react-focus-lock";

const Modal: FC = () => {
  const { modalOpened, closeModal, options } = useContext(ModalContext);
  const { size, modalContent, clickPosition } = options;

  useEffect(() => {
    if (modalOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpened]);

  const modalWidth = size === 1 ? "sm:w-[360px]" : size === 2 ? "sm:w-[640px]" : size === 3 ? "sm:w-[360px]" : "sm:w-screen";
  const modalHeight = size === 1 ? "sm:h-[180px]" : size === 2 ? "sm:h-[480px]" : size === 3 ? "sm:h-[260px]" : "sm:h-dvh";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };
  const childVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
      x: clickPosition.x - window.innerWidth / 2,
      y: clickPosition.y - window.innerHeight / 2,
    },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type: "spring" },
    },
    exit: {
      scale: 0,
      opacity: 0,
      x: clickPosition.x - window.innerWidth / 2,
      y: clickPosition.y - window.innerHeight / 2,
    },
  };

  const handleClick = () => {
    closeModal();
  };

  return (
    <FocusLock>
      <AnimatePresence>
        {modalOpened && (
          <motion.section
            key="bgModal"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 left-0 h-screen w-screen bg-black/70 z-[51] font-rancho flex"
          >
            <AnimatePresence>
              {modalOpened && (
                <motion.section
                  key="modalWindow"
                  variants={childVariants}
                  className={`flex bg-fuchsia-800/70 backdrop-blur-sm h-dvh w-screen ${modalWidth} ${modalHeight} sm:rounded-lg relative sm:mx-auto sm:my-auto overflow-hidden`}
                >
                  <FontAwesomeIcon
                    icon={faX}
                    tabIndex={0}
                    onClick={handleClick}
                    className="absolute top-2 right-2 z-10 cursor-pointer opacity-80 hover:opacity-100 focus:ring-2 rounded-md p-2 focus:ring-fuchsia-500 focus:outline-none text-white"
                  />

                  {modalContent}
                </motion.section>
              )}
            </AnimatePresence>
          </motion.section>
        )}
      </AnimatePresence>
    </FocusLock>
  );
}

export default Modal;