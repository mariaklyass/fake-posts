import React from "react";
import classNames from "classnames";
import cl from "./MyModal.module.css";

const cx = classNames.bind(cl);

const MyModal = ({ children, visible, setVisible }) => {
  const rootClasses = [cl.myModal];
  if (visible) {
    rootClasses.push(cl.active);
  }
  const activeModal = cx(rootClasses);
  return (
    <div className={activeModal} onClick={() => setVisible(false)}>
      <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
