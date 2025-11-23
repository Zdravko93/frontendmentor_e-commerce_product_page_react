import React from "react";

import userImg from "../../assets/image-avatar.png";

import classes from "./UserProfileButton.module.css";

export default React.memo(function UserProfileButton() {
  // Here I previously had <button> as a wrapper element
  // but currently there is no need for that since avatar doesn't have any interactivity yet (Log In/Log Out, Register, Action Menu etc)

  // static image, has no props - good for memo
  return (
    <img
      className={classes["user-profile-img"]}
      src={userImg}
      alt="User profile"
    />
  );
});
