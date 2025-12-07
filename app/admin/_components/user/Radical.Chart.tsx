"use client";

import { LabelList, RadialBar, RadialBarChart } from "recharts";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  registers: {
    label: "registers",
  },
  site: {
    label: "Site",
    color: "var(--chart-1)",
  },
  plateform: {
    label: "Platform",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export function ChartRadialLabel(props: { user: any[] }) {
  const chartData = props.user;
  return (
    <Card className="flex flex-col">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={-90}
            endAngle={380}
            innerRadius={30}
            outerRadius={110}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="type" />}
            />
            <RadialBar dataKey="registers" background>
              <LabelList
                position="insideStart"
                dataKey="type"
                className="fill-white capitalize mix-blend-luminosity"
                fontSize={11}
              />
            </RadialBar>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="text-muted-foreground leading-none">
          Showing total registers for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
