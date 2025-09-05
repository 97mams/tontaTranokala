"use client";

import { prisma } from "@/lib/prisma";
import { castToString, stringToObject } from "@/lib/urlHelper";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState();
  const getParams = useParams();
  const params = stringToObject(String(getParams.plateform));
  const plateformId = params.id;
  useEffect(() => {
    const fetchData = async () => {
     
      setData
    };
  }, [plateformId]);

  return (
    <div className="w-3xl">
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-20 uppercase text-4xl font-extrabold tracking-tight text-balance">
          {castToString(params.title)}
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Ici, retrouvez tous les plateforms dédiés à{" "}
          {castToString(params.title)}.
        </p>
        {/* <div>
          {plateformeByGroupId.map((plateform) => (
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
          <PlateformForm id={Number(newParams[0])} />
        </div> */}
      </div>
      {/* <Summary projects={plateformeByGroupId} active={1} /> */}
    </div>
  );
}
