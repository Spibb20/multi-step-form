export const Button = (props) => {
  const { clickHandler, children, btnColor } = props;

  const color = {
    continue: "w-full bg-black text-white",
    continueSide: "w-[60%] bg-black text-white",
    back: "w-[35%] bg-white border-1 border-black text-black",
  };
  return (
    <button
      onClick={clickHandler}
      className={` p-2  rounded-md hover:bg-[#8E8E8E]  ${color[btnColor]}`}
    >
      {children}
    </button>
  );
};
