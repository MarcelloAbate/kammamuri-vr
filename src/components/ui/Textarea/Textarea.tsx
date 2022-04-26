import s from "./Textarea.module.css";
import cn from "classnames";

interface TextareaProps extends React.ComponentPropsWithoutRef<"textarea"> {
  label?: string;
  labelClassName?: string;
  textareaClassName?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  className,
  labelClassName,
  textareaClassName,
  id,
  required,
  ...props
}) => {
  const labelCn = cn(s.label, labelClassName);
  const textareaCn = cn(
    textareaClassName,
    "block w-full border-0 border-b border-transparent bg-primary-50 focus:border-primary-600 focus:ring-0 sm:text-sm resize-none"
  );

  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className={labelCn}>
          {label} {required ? "*" : ""}
        </label>
      )}

      <div className={s["textarea-wrapper"]}>
        <textarea id={id} className={textareaCn} required={required} {...props} />
      </div>
    </div>
  );
};

export default Textarea;
