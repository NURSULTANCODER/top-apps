import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface TagProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode,
  size?: 's' | 'm' ,
  color?: 'primary' | 'ghost' | 'gray' | 'green' | 'red',
  href?: string,
}