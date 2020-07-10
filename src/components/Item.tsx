import React, { useContext } from "react";
import ItemsContext from "../context/ItemsContext";
import cx from "classnames";
import TrianglesBox from "./TrianglesBox";
import Modal from "./Modal";

type Props = {
  name: string;
  icon: string;
  value: string;
  itemIndex: number;
};

const Item: React.FC<Props> = ({ name, icon, value, itemIndex }) => {
  const {
    itemSelected,
    setItemSelected,
    isModalOpened,
    setIsModalOpened,
  } = useContext(ItemsContext);

  const handleClick = () => {
    setItemSelected && setItemSelected(itemIndex);
    setIsModalOpened && setIsModalOpened(!isModalOpened);
  };

  const isSelected = itemSelected === itemIndex;

  return (
    <div
      onClick={handleClick}
      className={cx(
        {
          "shadow-yellow border-zelda-softYellow border-2": isSelected,
        },
        "relative w-20 h-20 bg-black border border-zelda-darkGray cursor-pointer"
      )}
    >
      {isSelected && !isModalOpened && <TrianglesBox />}
      <img alt={name} src={icon} />
      {value && (
        <div className="z-0 bg-black -mx-1 -my-1 text-sm text-white absolute bottom-0 right-0 border border-zelda-darkGray px-2">
          {value}
        </div>
      )}
      {isModalOpened && isSelected && <Modal />}
    </div>
  );
};

export default Item;
