"use client";

import { Button } from "./Button";
import { Input } from "./Input";
import { Heading } from "./Heading";
import { useState } from "react";

export const StepTwo = (props) => {
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const email = data.get("email");
    const mobNumber = data.get("mobNumber");
    const passw = data.get("passw");
    const confirmPassword = data.get("confirmPassword");

    let newErrors = {};
    let isValid = true;

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/g.test(email)) {
      newErrors.email = "Please enter valid email address";
      isValid = false;
    }
    if (/^\d{8}$/.test(mobNumber)) {
      newErrors.mobNumber = "Please enter 8 digits valid phone number";
      isValid = false;
    }

    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(passw)) {
      newErrors.passw = "Please enter 8 digits valid phone number";
      isValid = false;
    }

    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(confirmPassword)) {
      newErrors.confirmPassword = "Please enter 8 digits valid phone number";
      isValid = false;
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      clickHandler();
    }
  };
  const { clickHandler, clickHandlerBack } = props;
  return (
    <div className=" max-w-[480px] w-[480px] min-h-[655px] bg-white shadow-md shadow-gray-400 rounded-[6px] p-8 flex flex-col gap-[40px] border-1 border-black text-black">
      <div className="max-w-[416px] w-[416px] min-h-[385px] flex flex-col gap-7 ">
        <Heading />
        <form
          onSubmit={handleSubmit}
          className="w-full min-h-[312px] flex flex-col gap-3"
        >
          <Input name="email" type="email" placeholder="Таны Email">
            Email
          </Input>
          {errors.email && <p className="text-red-500">{errors.email}</p>}
          <Input
            name="mobNumber"
            type="number"
            placeholder="Таны утасны дугаар"
          >
            Phone Number
          </Input>
          {errors.mobNumber && (
            <p className="text-red-500">{errors.mobNumber}</p>
          )}
          <Input name="passw" type="password" placeholder="Нууц үг">
            Password
          </Input>
          {errors.passw && <p className="text-red-500">{errors.passw}</p>}
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Нууц үг дахин оруулна уу"
          >
            Confirm password
          </Input>
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword}</p>
          )}
          <Button btnColor={"continueSide"}>Continue 2/3 ▶</Button>
        </form>
      </div>
      <div className="flex gap-[5%]">
        <Button clickHandler={clickHandlerBack} btnColor={"back"}>
          ◀ Back
        </Button>
      </div>
    </div>
  );
};

/*
// StepOne.jsx
import { Button } from "./Button";
import { Input } from "./Input";
import { Heading } from "./Heading";
import { useState } from "react";

export const StepOne = ({ clickHandler }) => {
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const firstname = data.get("firstname");
    const lastname = data.get("lastname");
    const username = data.get("username");

    let newErrors = {};

    if (!firstname || firstname.length < 2) {
      newErrors.firstname = "Name must be at least 2 characters";
    }
    if (!lastname) {
      newErrors.lastname = "Last name is required";
    }
    if (!username || username.length < 4) {
      newErrors.username = "Username must be at least 4 characters";
    }

    setErrors(newErrors);

    // if no errors, go to next step
    if (Object.keys(newErrors).length === 0) {
      clickHandler();
    }
  };

  return (
    <div className="max-w-[480px] w-[480px] min-h-[655px] bg-white shadow-md shadow-gray-400 rounded-[6px] p-8 flex flex-col gap-[40px] border-1 border-black text-black">
      <div className="max-w-[416px] w-[416px] min-h-[385px] flex flex-col gap-7 ">
        <Heading />
        <form className="w-full min-h-[312px] flex flex-col gap-3" onSubmit={handleSubmit}>
          <Input name="firstname" type="text" placeholder="Таны Нэр">
            First Name
          </Input>
          {errors.firstname && <p className="text-red-500">{errors.firstname}</p>}

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

*/
