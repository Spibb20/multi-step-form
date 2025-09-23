export const Input = (props) => {
  const { children, placeholder, type, required } = props;
  return (
    <label
      htmlFor=""
      className="text-black text-[14px] font-bold flex flex-col gap-2"
    >
      {required !== false ? children + "*" : children}
      <input
        className="p-2 rounded-md border-1 border-[#8E8E8E]"
        type={type}
        placeholder={placeholder}
      />
    </label>
  );
};
