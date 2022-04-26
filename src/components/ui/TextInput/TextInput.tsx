import s from "./TextInput.module.css";
import cn from "classnames";

interface TextInputProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
  labelClassName?: string;
  inputClassName?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  className,
  labelClassName,
  inputClassName,
  id,
  required,
  ...props
}) => {
  const labelCn = cn(s.label, labelClassName);
  const inputCn = cn(
    inputClassName,
    "block w-full border-0 border-b border-transparent bg-primary-50 focus:border-primary-600 focus:ring-0 sm:text-sm"
  );

  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className={labelCn}>
          {label} {required ? "*" : ""}
        </label>
      )}

      <div className={s["input-wrapper"]}>
        <input type="text" id={id} className={inputCn} required={required} {...props} />
      </div>
    </div>
  );
};

export default TextInput;
