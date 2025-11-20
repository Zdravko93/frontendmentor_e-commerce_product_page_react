import userImg from "../../assets/image-avatar.png";

import classes from "./UserProfileButton.module.css";

export default function UserProfileButton() {
  // Here I previously had <button> as a wrapper element
  // but currently there is no need for that since avatar doesn't have any functionality yet (Log In/Log Out, Register, Action Menu etc)
  return (
    <img
      className={classes["user-profile-img"]}
      src={userImg}
      alt="User profile"
    />
  );
}
