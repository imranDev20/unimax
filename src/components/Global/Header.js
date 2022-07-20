import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import useScrollListener from "../../hooks/useScrollListener";
import Form from "./Form";
import Logo from "./Logo";

import Modal from "./Modal";
import Nav from "./Nav";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [navClassList, setNavClassList] = useState([]);

  const close = () => {
    setModalOpen(false);
  };
  const open = () => {
    setModalOpen(true);
  };

  const scroll = useScrollListener();

  useEffect(() => {
    const _classList = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0) {
      _classList.push("-translate-y-full");
    }
    if (scroll.y > 100) {
      _classList.push("bg-white shadow-custom");
    }

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  return (
    <>
      <header
        className={`sticky z-50 top-0 transition-all duration-500 py-3 lg:py-0 ${navClassList.join(
          " "
        )}`}
      >
        <div className="container px-10 mx-auto flex items-center justify-between">
          <Logo isHorizontal className="w-36" />

          <div className="hidden lg:flex items-center ">
            <Nav />
            <button
              onClick={() => (modalOpen ? close() : open())}
              className={`rounded bg-secondary text-white transition-colors hover:bg-primary px-3 py-2`}
            >
              Request Services
            </button>
          </div>
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
