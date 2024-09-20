export type OptionsType = {
  value: string | number;
  text: string | number;
};
export type SelectsType = {
  label: string;
  name: string;
  suffix?: string;
  options: OptionsType[];
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  onFocus?: React.FocusEventHandler<HTMLSelectElement>;
};

export type FormSelectsType = SelectsType[];

export type CustomSelectPropsType = {
  data: SelectsType;
};
