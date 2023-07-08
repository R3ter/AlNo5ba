import { useContext } from "react";
import { PopupContext } from "../../Context/PopUpContext";

export default () => {
  const { isOpen, content } = useContext(PopupContext);

  if (!isOpen) {
    return null;
  }

  return <div>{content}</div>;
};
