"use client";
import clsx from "clsx";
import useSWR from "swr";

export default function Page() {
  const { data, isLoading: loading, error } = useSWR("/api/my");
  console.log(data);

  return <div className={clsx("page")}></div>;
}
