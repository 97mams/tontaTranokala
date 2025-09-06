"use client";

import { CardListPlateform } from "@/components/cardListPlateform";
import { Summary } from "@/components/summary";
import { castToString, stringToObject } from "@/lib/urlHelper";
import { Loader } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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

export default function Page() {
  const [data, setData] = useState<plateform[]>();
  const [isPending, setIsPending] = useState(false);
  const getParams = useParams();
  const params = stringToObject(String(getParams.plateform));
  const groupPlateformId = params.id;
  useEffect(() => {
    setIsPending(true);
    fetch(`/api/plateform/${groupPlateformId}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.plateform);
        setIsPending(false);
      });
  }, [groupPlateformId]);

  const Pending = () => {
    return (
      <div className="w-3xl flex h-50 justify-center items-center">
        <Loader />
      </div>
    );
  };

  if (!data) {
    return;
  }

  return (
    <div className="w-full  h-screen overflow-scroll">
      <div className="w-3xl">
        <div className="flex flex-col gap-2">
          <h1 className="scroll-m-20 uppercase text-4xl font-extrabold tracking-tight text-balance">
            {castToString(params.title)}
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Ici, retrouvez tous les plateforms dédiés à{" "}
            {castToString(params.title)}.
          </p>
          <div>
            {isPending ? <Pending /> : ""}
            {data?.map((plateform) => (
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
            {/* <PlateformForm id={Number(newParams[0])} /> */}
          </div>
        </div>
        <Summary projects={data} active={1} />
      </div>
    </div>
  );
}
