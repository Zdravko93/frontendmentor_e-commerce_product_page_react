export default function Card({ children, classNames, ...props }) {
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
}
