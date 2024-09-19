export type OptionsType = {
  value: string | number;
  text: string | number;
};
export type SelectsType = {
  label: string;
  name: string;
  suffix?: string;
  options: OptionsType[];
};

export type FormSelectsType = SelectsType[];

export type CustomSelectPropsType = {
  data: SelectsType;
};
