"use client";

import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const plans = ["Korea", "USA", "Coin"];

export default function Sidebar() {
  let [selected, setSelected] = useState(plans[0]);

  const router = useRouter();

  useEffect(() => {
    router.push(`/${selected.toLowerCase()}`);
  }, [selected]);

  return (
    <RadioGroup
      className="fixed flex flex-col gap-4 top-16 w-48 min-h-screen bg-gray-100 dark:bg-gray-800 border-r-[1px] border-gray-200 dark:border-gray-700 p-3 text-xl text-gray-700 dark:text-gray-300"
      value={selected}
      onChange={setSelected}
      aria-label="Server size">
      {plans.map((plan) => (
        <Field key={plan} className="flex justify-between items-center p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 hover:cursor-pointer" onClick={() => setSelected(plan)}>
          <Label className="pointer-events-none">{plan}</Label>
          <Radio value={plan} className="pointer-events-none group flex w-2 h-7 items-center justify-center data-[checked]:bg-emerald-500"></Radio>
        </Field>
      ))}
    </RadioGroup>
  );
}
