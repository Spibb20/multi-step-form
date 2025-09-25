"use client";

import Image from "next/image";
import { StepOne } from "./_components/StepOne";
import { StepTwo } from "./_components/StepTwo";
import { StepThree } from "./_components/StepThree";
import { StepFinished } from "./_components/StepFinished";
import { Button } from "./_components/Button";
import { useState, useEffect } from "react";

export default function Home() {
  const [FormState, setFormState] = useState(0);

  const CurrentForm = [StepOne, StepTwo, StepThree, StepFinished][FormState];

  return (
    <div className="w-full h-screen bg-blue-100 flex justify-center items-center">
      <CurrentForm
        clickHandler={() => setFormState(FormState + 1)}
        clickHandlerBack={() => setFormState(FormState - 1)}
      />
    </div>
  );
}
