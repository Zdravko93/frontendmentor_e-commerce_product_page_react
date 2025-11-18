import deleteImg from "../../assets/icon-delete.svg";

export default function CartDeleteButton({ className, resetCartItems }) {
  return (
    <button className={className} onClick={resetCartItems}>
      <img src={deleteImg} alt="Delete" />
    </button>
  );
}
