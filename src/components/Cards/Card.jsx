import { faPersonSwimming, faRoute } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classNames from "classnames/bind";

import styles from "./Card.module.scss";

const cx = classNames.bind(styles);

const txtDefault =
  " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis unde repudiandae, officia cumque beatae sit. Excepturi molestiae architecto accusamus consequuntur fuga. Quae non voluptatibus rerum veritatis deserunt ratione ab autem";

function Card({
  cardTitle = "Card Title",
  imgSrc,
  textChild = txtDefault,
  btnName = "Button Default",
}) {
  return (
    <div className={cx("my-card card-wraper text-center")}>
      <div className={cx("overflow")}>
        <img src={imgSrc} alt="image 1" className={cx("card-img-top")} />
      </div>
      <div className={cx("card-body")}>
        <h4 className={cx("card-title")}> {cardTitle} </h4>
        <p className={cx("card-text cars-text-secondary")}>{textChild}</p>
      </div>
      <div className="card-trip">
        <FontAwesomeIcon className={cx("card-icon route")} icon={faRoute} />
      </div>
      <div className={cx("icons-card")}>
        <FontAwesomeIcon className={cx("icons-card")} icon={faPersonSwimming} />
        <FontAwesomeIcon className={cx("icons-card")} icon={faPersonSwimming} />
        <FontAwesomeIcon className={cx("icons-card")} icon={faPersonSwimming} />
        <FontAwesomeIcon className={cx("icons-card")} icon={faPersonSwimming} />
        <FontAwesomeIcon className={cx("icons-card")} icon={faPersonSwimming} />
      </div>
      <div className="btn-card">
        <a href="#" className={cx("btn btn-outline-secondary  bg-transparent")}>
          {" "}
          {btnName}
        </a>
      </div>
    </div>
  );
}

export default Card;
