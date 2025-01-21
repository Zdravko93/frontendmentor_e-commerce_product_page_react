import React from "react";

import userImg from "../../assets/image-avatar.png";

import classes from "./UserProfileButton.module.css";

export default function UserProfileButton() {
  return (
    <button className={classes["user-profile-button"]}>
      <img
        className={classes["user-profile-img"]}
        src={userImg}
        alt="User profile"
      />
    </button>
  );
}
