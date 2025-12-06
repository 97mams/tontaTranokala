"use client";

import { LabelList, RadialBar, RadialBarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A radial chart with a label";

const chartData = [
  { type: "chrome", registers: 275, fill: "var(--color-chrome)" },
  { type: "safari", registers: 200, fill: "var(--color-safari)" },
  { type: "firefox", registers: 187, fill: "var(--color-firefox)" },
  { type: "edge", registers: 173, fill: "var(--color-edge)" },
  { type: "other", registers: 90, fill: "var(--color-other)" },
];

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
      <CardHeader className="items-center pb-0">
        <CardTitle>Radial Chart - Label</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
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
