"use client";

import { Button } from "./Button";
import { Input } from "./Input";
import { Heading } from "./Heading";
import { useState, useEffect } from "react";

export const StepOne = (props) => {
  const { clickHandler } = props;

  const [errors, setErrors] = useState({});
  const [localData, setLocalData] = useState({
    firstname: "",
    lastname: "",
    username: "",
  });

  useEffect(() => {}, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const firstname = event.target.firstname.value;
    const lastname = event.target.lastname.value;
    const username = event.target.username.value;
    console.log(event);

    let isValid = true;
    let newErrors = {};

    if (firstname.length < 2) {
      newErrors.firstname = "First name too short";
      isValid = false;
    }

    if (!lastname) {
      newErrors.lastname = "Last name is required";
      isValid = false;
    }

    if (username.length < 4) {
      newErrors.username = "Username too short";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      {
        clickHandler();
      }
    }
  };

  return (
    <div className=" max-w-[480px] w-[480px] min-h-[655px] bg-white shadow-md shadow-gray-400 rounded-[6px] p-8 flex flex-col gap-[40px] border-1 border-black text-black">
      <div className="max-w-[416px] w-[416px] min-h-[385px] h-[577px]  flex flex-col gap-7 ">
        <Heading />
        <form
          onSubmit={handleSubmit}
          className="w-full min-h-[312px] h-[448px] flex flex-col gap-3 justify-between"
        >
          <Input name="firstname" type="text" placeholder="Таны Нэр">
            First Name
          </Input>
          {errors.firstname && (
            <p className="text-red-500">{errors.firstname}</p>
          )}
          <Input name="lastname" type="text" placeholder="Таны Овог">
            Last Name
          </Input>
          {errors.lastname && <p className="text-red-500">{errors.lastname}</p>}
          <Input name="username" type="text" placeholder="Хэрэглэгчийн Нэр">
            UserName
          </Input>
          {errors.username && <p className="text-red-500">{errors.username}</p>}
          <Button btnColor="continue">Continue 1/3 ▶</Button>
        </form>
      </div>
    </div>
  );
};
