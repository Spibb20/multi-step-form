export const StepFinished = () => {
  return (
    <div className=" max-w-[480px] w-[480px] min-h-fit bg-white shadow-md shadow-gray-400 rounded-[6px] p-8 flex flex-col gap-[40px] border-1 border-black text-black">
      <div className="max-w-[416px] w-[416px] min-h-full flex flex-col gap-7 ">
        <div className="w-full min-h-[129px] flex flex-col gap-2">
          <img src="/images/logo.png" alt="" width={60} height={60} />
          <p className="font-bold text-[26px]">You're All Set</p>
          <p className="text-[#8E8E8E] text-[18px]">
            We have recieved your submission. Thank you!
          </p>
        </div>
      </div>
    </div>
  );
};
