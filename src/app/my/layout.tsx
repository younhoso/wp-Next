"use client";

import { ReactNode } from "react";
import MyCategory from "@/components/MyCategory/MyCategory";
import { MyLayoutStyled } from "@/styles/pageStyled/MyLayoutStyled";

export default function MyLaout({ children }: { children: ReactNode }) {
  return (
    <MyLayoutStyled>
      <div className="my-layout-content">{children}</div>
      <MyCategory />
    </MyLayoutStyled>
  );
}
