import React from "react";
import { OptionsType, CustomSelectPropsType } from "@/types/customSelectsTypes";
import { cn } from "@/lib/utils";

const CustomSelect = React.forwardRef<HTMLSelectElement, CustomSelectPropsType> (({data}, ref) => {
  return (
    <div className="flex flex-col justify-between">
      <label className="text-primary" htmlFor={data.name}>
        {data.label}
      </label>
      <div className="flex bg-white h-10 text-slate-900 rounded-xl">
        <select ref={ref} className={cn("w-full h-full p-1", {
          "rounded-l-xl" : data?.suffix,
          "rounded-xl" : !data?.suffix })} 
          name={data.name} id={data.name} onChange={data?.onChange} onFocus={data?.onFocus} >
          {data.options.map((item: OptionsType, index: number) => 
          <option key={item.value} value={item.value}>{item.text}</option> )}
        </select>
        {data?.suffix && <label className="p-2" htmlFor={data.name}>
          {data?.suffix}
        </label>}
      </div>
    </div>
  )
})

export default CustomSelect;
