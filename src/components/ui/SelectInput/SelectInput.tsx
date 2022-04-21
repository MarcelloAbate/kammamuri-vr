import s from "./SelectInput.module.css";
import cn from "classnames";

interface SelectOption {
  label: string;
  value: string | number;
}

interface SelectInputProps extends React.ComponentPropsWithoutRef<"select"> {
  selectOptions: Array<SelectOption>;
  label?: string;
  labelClassName?: string;
  selectClassName?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  selectOptions,
  label,
  className,
  labelClassName,
  selectClassName,
  id,
  required,
  value,
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
        <select id={id} className={selectClassName} required={required} {...props}>
          {selectOptions.map((selectOption, i) => (
            <option key={i} value={selectOption.value} selected={value === selectOption.value}>
              {selectOption.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectInput;
