"use client";

import { CardListPlateform } from "@/components/cardListPlateform";
import { PlateformForm } from "@/components/plateformForm";
import { Summary } from "@/components/summary";

type plateform = {
  id: number;
  name: string;
  email: string;
  passWord: string;
  description: string;
  url: string | null;
  GroupSite: {
    id: number;
    type: string;
    title: string;
  };
};

export default function PlateformList(props: {
  data: plateform[];
  params: { id: number; title: string };
}) {
  return (
    <div className="w-full  h-screen overflow-scroll">
      <div className="w-3xl">
        <div className="flex flex-col gap-2">
          <div>
            {props.data?.map((plateform) => (
              <CardListPlateform
                key={plateform.id}
                id={plateform.id}
                name={plateform.name}
                email={plateform.email}
                password={plateform.passWord}
                description={plateform.description}
                url={plateform?.url ? plateform.url : ""}
                type={plateform.GroupSite.type}
              />
            ))}
          </div>
          <div className="flex gap-4 pb-20">
            {props.data ? (
              <PlateformForm id={Number(props.params.id)} isButton={false} />
            ) : (
              ""
            )}
          </div>
        </div>
        {props.data ? <Summary projects={props.data} active={1} /> : ""}
      </div>
    </div>
  );
}
