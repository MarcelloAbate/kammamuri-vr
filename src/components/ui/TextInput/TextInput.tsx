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
  const labelCn = cn(s.label, labelClassName, { [s.required]: required });

  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className={labelCn}>
          {label} {required ? "*" : ""}
        </label>
      )}

      <div className={s["input-wrapper"]}>
        <input type="text" id={id} className={inputClassName} required={required} {...props} />
      </div>
    </div>
  );
};

export default TextInput;
