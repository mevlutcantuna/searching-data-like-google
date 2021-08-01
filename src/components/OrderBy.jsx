import "../styles/OrderBy.scss";
import OrderByIcon from "../assets/icons/orderBy.svg";
import { useState } from "react";

const OrderBy = ({ changeOrder }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const changeModal = () => {
    setIsOpenModal((prevState) => !prevState);
  };

  return (
    <div className="order-by">
      <div className="order-by__title" onClick={changeModal}>
        <span>
          <img src={OrderByIcon} alt="order-logo" />
        </span>
        <span>Order By</span>
      </div>
      {isOpenModal && (
        <div className="order-by__modal">
          <ul>
            <li onClick={() => changeOrder("Name-Asc")}>Name ascending</li>
            <li onClick={() => changeOrder("Name-Desc")}>Name descending</li>
            <li onClick={() => changeOrder("Year-Asc")}>Year ascending</li>
            <li onClick={() => changeOrder("Year-Desc")}>Year descending</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default OrderBy;
