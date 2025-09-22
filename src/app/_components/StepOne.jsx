import { Button } from "./Button";
import { Input } from "./Input";

export const StepOne = (props) => {
  const { clickHandler } = props;
  return (
    <div className=" max-w-[480px] w-[480px] min-h-[655px] bg-white shadow-md shadow-gray-400 rounded-[6px] p-8 flex flex-col gap-[40px] border-1 border-black text-black">
      <div className="max-w-[416px] w-[416px] min-h-[385px] flex flex-col gap-7 ">
        <div className="w-full min-h-[129px] flex flex-col gap-2">
          <img src="/images/logo.png" alt="" width={60} height={60} />
          <p className="font-bold text-[26px]">Join Us!</p>
          <p className="text-[#8E8E8E] text-[18px]">
            Please provide all current information accurately.
          </p>
          div
        </div>
        <form className="w-full min-h-[312px] flex flex-col gap-3">
          <Input placeholder="Таны Нэр">First Name</Input>
          <Input placeholder="Таны Овог">Last Name</Input>
          <Input placeholder="Хэрэглэгчийн Нэр">UserName</Input>
        </form>
      </div>
      <Button clickHandler={clickHandler}>1/3</Button>
    </div>
  );
};
