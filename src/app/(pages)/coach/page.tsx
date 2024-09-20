"use client"

import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomSelect from "@/components/CustomSelect";
import { formSelects } from "./formSelects";
import { coachSchema } from "@/app/schemas/coachSchema";
import AnimatedButton from "@/components/buttonAnimated/AnimatedButton";

type FormData = {
  days: string;
  goal: string;
  level: string;
}

const page: FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({resolver: yupResolver(coachSchema)})
  console.log(errors)
  return (
    <div className="flex flex-col  flex-grow p-4 md:p-6 gap-10">
      <h1 className="text-primary text-4xl text-pretty text-center">
        Planifie ta semaine d'entraînement et reçois ton programme !
      </h1>
      <form className="bg-white/10 grid grid-cols-3 grid-rows-4 gap-4 flex-grow w-2/3 mx-auto p-4">
        <h2 className="col-span-3">
          Veuillez renseigner les informations ci-dessous, puis cliquez sur le
          bouton "Demander mon programme". Nous vous recommandons toutefois de
          demander un avis médical avant une reprise d'activité sportive.
        </h2>
        {formSelects.map((item, index) => (
          <CustomSelect key={item.label} data={item} {...register(item.name  as keyof FormData)}  />
        ))}
       
      </form>
    </div>
  );
};

export default page;
