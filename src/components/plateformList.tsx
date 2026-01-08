"use client";

import { CardListPlateform } from "@/components/cardListPlateform";
import { PlateformForm } from "@/components/plateformForm";
import { Summary } from "@/components/summary";
import { InView } from "./ui/in-view";

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
    <div className="w-full pb-8">
      <div className="w-full md:w-5xl">
        <div className="flex flex-col gap-1">
          <div>
            {props.data?.map((plateform) => (
              <InView
                key={plateform.id}
                variants={{
                  hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                viewOptions={{ margin: "0px 0px -200px 0px" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div
                  key={plateform.id}
                  id={"project-" + plateform.id}
                  className="project-section w-full"
                >
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
                </div>
              </InView>
            ))}
          </div>
          {props.data ? (
            <PlateformForm id={Number(props.params.id)} isButton={false} />
          ) : (
            ""
          )}
        </div>
      </div>
      {props.data ? <Summary projects={props.data} /> : ""}
    </div>
  );
}
