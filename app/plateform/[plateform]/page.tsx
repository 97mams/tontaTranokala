import { CardListPlateform } from "@/components/cardListPlateform";
import { PlateformForm } from "@/components/plateformForm";
import { prisma } from "@/lib/prisma";
import { castToString, stringToArray } from "@/lib/urlHelper";

export default async function Page(props: {
  params: Promise<{ plateform: string }>;
}) {
  const params = await props.params;
  const newParams = stringToArray(params.plateform);

  const groupSiteId = Number(newParams[0]);
  const plateformeByGroupId = await prisma.plateform.findMany({
    where: { GroupSiteId: groupSiteId },
    select: {
      id: true,
      name: true,
      description: true,
      url: true,
      email: true,
      passWord: true,
      GroupSite: {
        select: {
          type: true,
        },
      },
    },
  });

  return (
    <div className="flex flex-col gap-2">
      <h1 className="scroll-m-20 uppercase text-4xl font-extrabold tracking-tight text-balance">
        {castToString(newParams[1])}
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Ici, retrouvez tous les plateforms dédiés à {castToString(newParams[1])}
        .
      </p>
      <div>
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
      </div>
    </div>
  );
}
