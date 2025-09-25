export const Button = (props) => {
  const { clickHandler, children, btnColor, type } = props;

  const color = {
    continue: "w-full bg-black text-white ",
    continueSide: "w-[60%] bg-black text-white",
    back: "w-[35%] bg-white border-1 border-black text-black",
  };
  return (
    <button
      type={type}
      onClick={clickHandler}
      className={` p-2  rounded-md hover:bg-[#8E8E8E] cursor-pointer ${color[btnColor]}`}
    >
      {children}
    </button>
  );
};
