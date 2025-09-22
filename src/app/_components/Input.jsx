import { Children } from "react";

export const Input = (props) => {
  const { children, placeholder } = props;
  return (
    <label
      htmlFor=""
      className="text-black text-[14px] font-bold flex flex-col gap-2"
    >
      {children}
      <input
        className="p-2 rounded-md border-1 border-[#8E8E8E]"
        type="text"
        placeholder={placeholder}
      />{" "}
    </label>
  );
};
