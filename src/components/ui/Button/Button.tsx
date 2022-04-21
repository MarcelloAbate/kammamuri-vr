import s from "./Button.module.css";
import cn from "classnames";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  const buttonCn = cn(s.button, className);
  return (
    <button className={buttonCn} {...props}>
      {children}
    </button>
  );
};

export default Button;
