export const StepThree = () => {
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
          <label htmlFor="" className="text-black text-[14px] font-bold ">
            First name
          </label>
          <input
            className="p-2 rounded-md border-1 border-[#8E8E8E]"
            type="text"
            placeholder="Нэр"
          />

          <label htmlFor="" className="text-black text-[14px] font-bold ">
            Last name
          </label>
          <input
            className="p-2 rounded-md border-1 border-[#8E8E8E]"
            type="text"
            placeholder="Овог"
          />

          <label htmlFor="" className="text-black text-[14px] font-bold ">
            Username
          </label>
          <input
            className="p-2 rounded-md border-1 border-[#8E8E8E]"
            type="text"
            placeholder="Хэрэглээгчийн нэр"
          />
        </form>
      </div>
      <Button clickHandler={clickHandler}>1/3</Button>
    </div>
  );
};
