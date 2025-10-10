"use client";

import { UrlHelper } from "@/lib/urlHelper";
import Link from "next/link";
import { useProject } from "../../store/project-store";
import { ButtonAction } from "./groupButtonActions";

export function ItemSidebar(props: {
  id: number;
  title: string;
  type: string;
}) {
  const { visits, setVisits } = useProject();
  console.log({ito: visits });
  return (
    <div className="w-full rounded-sm px-2 flex items-center hover:bg-muted">
      <Link
        href={
          "/tranokala/" +
          props.type +
          "/" +
          UrlHelper(`${props.id}-${props.title}`)
        }
        className="  w-full text-sm p-3"
        onClick={() => setVisits()}
      >
        {props.title}
      </Link>
      <ButtonAction id={props.id} />
    </div>
  );
}
