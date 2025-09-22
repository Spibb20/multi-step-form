"use client";

import Image from "next/image";
import { StepOne } from "./_components/StepOne";
import { StepTwo } from "./_components/StepTwo";
import { StepThree } from "./_components/StepThree";
import { useState } from "react";

export default function Home() {
  const [FormState, setFormState] = useState(0);

  const CurrentForm = [StepOne, StepTwo, StepThree][FormState];

  return (
    <div className="w-full h-screen bg-blue-100 flex justify-center items-center">
      <CurrentForm />
    </div>
  );
}
