import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { NormalButton } from "./Button";
import Form from "./Form";
import Logo from "./Logo";
import Modal from "./Modal";
import Nav from "./Nav";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => {
    setModalOpen(false);
  };
  const open = () => {
    setModalOpen(true);
  };

  return (
    <>
      <header className="container px-10 mx-auto flex items-center justify-between">
        <Logo />
        <div className="flex items-center">
          <Nav />
          <NormalButton
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            open={open}
            close={close}
            className="px-3 py-2"
          >
            Request Service
          </NormalButton>
        </div>
      </header>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            handleClose={close}
            title="Request service"
          >
            <Form />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
