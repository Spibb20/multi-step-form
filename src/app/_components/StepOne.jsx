import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import { Button } from "./Button";
import { Input } from "./Input";
import { Heading } from "./Heading";

export const StepOne = (props) => {
  const { clickHandler } = props;
  return (
    <div className=" max-w-[480px] w-[480px] min-h-[655px] bg-white shadow-md shadow-gray-400 rounded-[6px] p-8 flex flex-col gap-[40px] border-1 border-black text-black">
      <div className="max-w-[416px] w-[416px] min-h-[385px] flex flex-col gap-7 ">
        <Heading />
        <form className="w-full min-h-[312px] flex flex-col gap-3">
          <Input type="text" placeholder="Таны Нэр">
            First Name
          </Input>
          <Input type="text" placeholder="Таны Овог">
            Last Name
          </Input>
          <Input type="text" placeholder="Хэрэглэгчийн Нэр">
            UserName
          </Input>
        </form>
      </div>
      <Button clickHandler={clickHandler} btnColor="continue">
        Continue 1/3 ▶
      </Button>
    </div>
  );
};
