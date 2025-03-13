import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import React from "react";

const FormField: React.FC<FORM_FIELD_PROPS> = ({
  label,
  id,
  type,
  formik,
  showToggle,
  onToggle,
  placeholder,
}) => {
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="text-sm text-gray-500">
        {label}
      </label>
      <div className="relative mt-1">
        <Input
          id={id}
          name={id}
          type={type}
          value={formik.values[id]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder={placeholder}
          className={
            formik.errors[id] && formik.touched[id]
              ? "border-red-500 pr-10"
              : "pr-10 h-11"
          }
          autoComplete="off"
        />
        {showToggle && (
          <button
            type="button"
            onClick={onToggle}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
          >
            {type === "password" ? (
              <EyeOffIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </button>
        )}
      </div>
      {formik.errors[id] && formik.touched[id] && (
        <p className="text-xs text-red-500">{formik.errors[id]}</p>
      )}
    </div>
  );
};

export default FormField;
