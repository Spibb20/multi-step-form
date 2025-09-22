export const Button = (props) => {
  const { clickHandler, children } = props;
  return (
    <button
      onClick={clickHandler}
      className="w-full p-2 bg-black rounded-md text-white"
    >
      Continue {children}
    </button>
  );
};
