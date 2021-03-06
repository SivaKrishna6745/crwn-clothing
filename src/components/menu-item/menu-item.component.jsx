import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageURL, size, history, linkURL }) => {
    return (
        <div
            className={`${size} menu-item`}
            onClick={() => {
                history.push(`${linkURL}`);
            }}
        >
            <div
                className="background-image"
                style={{ backgroundImage: `url(${imageURL})` }}
            ></div>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    );
};

export default MenuItem;
