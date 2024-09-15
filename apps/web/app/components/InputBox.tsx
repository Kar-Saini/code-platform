import { FieldValues, UseFormRegister } from "react-hook-form";

const InputBox = ({
  label,
  register,
  type,
}: {
  label: string;
  type: string;
  register: UseFormRegister<FieldValues>;
}) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={label}
        className=" text-sm
          font-medium
          leading-6
"
      >
        {label.charAt(0).toLocaleUpperCase() + label.slice(1)}
      </label>
      <input
        type={type}
        id={label}
        {...register(label)}
        className="outline-none bg-neutral-100  rounded-xl ring-1 ring-inset ring-gray-500 py-1.5 px-3 focus:ring-2 focus:ring-inset "
      />
    </div>
  );
};

export default InputBox;
