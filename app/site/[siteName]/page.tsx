import { CardListSite } from "@/components/cardListSite";
import { SiteForm } from "@/components/siteForm";
import { prisma } from "@/lib/prisma";
import { castToString, stringToObject } from "@/lib/urlHelper";
import { updateGroupSiteVisits } from "../../../server/group-actions";

export default async function Page(props: {
  params: Promise<{ siteName: string }>;
}) {
  const params = await props.params;
  const newParams = stringToObject(params.siteName);

  const groupSiteId = newParams.id;
  const sitesByGroupId = await prisma.site.findMany({
    where: { GroupSiteId: groupSiteId },
    select: {
      id: true,
      name: true,
      description: true,
      url: true,
      GroupSite: {
        select: {
          type: true,
        },
      },
    },
  });

  await updateGroupSiteVisits(groupSiteId);

  return (
    <div className="w-xl flex flex-col gap-2">
      <h1 className="scroll-m-20 uppercase text-4xl font-extrabold tracking-tight text-balance">
        {castToString(newParams.title)}
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Ici, retrouvez tous les sites dédiés à {castToString(newParams.title)}.
      </p>
      <div>
        {sitesByGroupId.map((site) => (
          <CardListSite
            key={site.id}
            id={site.id}
            name={site.name}
            description={site.description}
            url={site?.url ? site.url : ""}
            type={site.GroupSite.type}
          />
        ))}
      </div>
      <div className="flex gap-4 mt-8">
        <SiteForm id={Number(newParams.title)} />
      </div>
    </div>
  );
}
