import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        key="question"
        className=""
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div className="text-xl font-medium mb-4 pb-2 border-b border-secondary/20 cursor-pointer">
          Do you like animations?
        </motion.div>
      </motion.div>

      {isOpen && (
        <motion.div
          key="answer"
          initial={{ opacity: 0, height: 0, marginBottom: 0 }}
          animate={{
            opacity: 1,
            height: "auto",
            marginBottom: 20,
          }}
          exit={{ opacity: 0, height: 0, marginBottom: 0 }}
        >
          I am item content. Click edit button to change this text. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
          nec ullamcorper mattis, pulvinar.
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Accordion;
