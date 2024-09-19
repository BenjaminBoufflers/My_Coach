"use client";

import Image from "next/image";
import BigTitle from "@/components/BigTitle";
import AnimatedButton from "@/components/buttonAnimated/AnimatedButton";
import CustomCard from "@/components/CustomCard";
import { texts } from "./texts";
import ParagraphAnimated from "@/components/paragraphAnimated/ParagraphAnimated";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const handleClick = () => {
    router.push("/coach");
  }

  return (
    <div className="grid gap-4 md:gap-0 grid-cols-1 md:grid-cols-2 items-center flex-grow md:h-[calc(100vh-64px)] p-4 md:p-6 justify-center">
      <div className=" flex max-md:max-h-96 mx-auto overflow-hidden relative aspect-square">
        <div className="flex h-full w-full bg-primary absolute -z-10 -translate-x-1/2"></div>
        <Image
          width={800}
          height={800}
          alt="entraînement"
          src="/assets/images/workout.jpg"
          className=" aspect-square object-contain m-4 md:m-10"
        />
      </div>
      <CustomCard>
        <BigTitle title="EXPLOSE TES PERFORMANCES !" />
        {texts.map((item, index) => (
          <ParagraphAnimated key={item} text={item} />
        ))}

          <AnimatedButton
            className="mt-auto text-xl md:text-2xl lg:text-3xl"
            text="OBTENIR UN PROGRAMME"
            type="fill"
            onClick={handleClick}
          />
      </CustomCard>
    </div>
  );
}
