export type IconNameType = 'home' | 'fitness';

export type IconProps = {
  size: number,
  color: string,
}

export type IconWithNameProps = {
  size?: number,
  color?: string,
  name: IconNameType
}