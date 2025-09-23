import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import { Button } from "./Button";
import { Input } from "./Input";
import { Heading } from "./Heading";

export const StepThree = (props) => {
  const { clickHandler, clickHandlerBack } = props;
  return (
    <div className=" max-w-[480px] w-[480px] min-h-[655px] bg-white shadow-md shadow-gray-400 rounded-[6px] p-8 flex flex-col gap-[40px] border-1 border-black text-black">
      <div className="max-w-[416px] w-[416px] min-h-[385px] flex flex-col gap-7 ">
        <Heading />
        <form className="w-full min-h-[312px] flex flex-col gap-3">
          <Input type="date" placeholder="--/--/--">
            Date of birth
          </Input>
          <Input required={false} type="file" placeholder="Add Image">
            Profile Image
          </Input>
        </form>
      </div>
      <div className="flex gap-[5%]">
        <Button clickHandler={clickHandlerBack} btnColor={"back"}>
          ◀ Back
        </Button>
        <Button clickHandler={clickHandler} btnColor={"continueSide"}>
          Submit ▶
        </Button>
      </div>
    </div>
  );
};
