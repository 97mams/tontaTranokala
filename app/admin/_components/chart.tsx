"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const description = "An interactive area chart";

const chartData = [
  { date: "2024-04-01", plateform: 222, site: 150 },
  { date: "2024-04-02", plateform: 97, site: 180 },
  { date: "2024-04-03", plateform: 167, site: 120 },
  { date: "2024-04-04", plateform: 242, site: 260 },
  { date: "2024-04-05", plateform: 373, site: 290 },
  { date: "2024-04-06", plateform: 301, site: 340 },
  { date: "2024-04-07", plateform: 245, site: 180 },
  { date: "2024-04-08", plateform: 409, site: 320 },
  { date: "2024-04-09", plateform: 59, site: 110 },
  { date: "2024-04-10", plateform: 261, site: 190 },
  { date: "2024-04-11", plateform: 327, site: 350 },
  { date: "2024-04-12", plateform: 292, site: 210 },
  { date: "2024-04-13", plateform: 342, site: 380 },
  { date: "2024-04-14", plateform: 137, site: 220 },
  { date: "2024-04-15", plateform: 120, site: 170 },
  { date: "2024-04-16", plateform: 138, site: 190 },
  { date: "2024-04-17", plateform: 446, site: 360 },
  { date: "2024-04-18", plateform: 364, site: 410 },
  { date: "2024-04-19", plateform: 243, site: 180 },
  { date: "2024-04-20", plateform: 89, site: 150 },
  { date: "2024-04-21", plateform: 137, site: 200 },
  { date: "2024-04-22", plateform: 224, site: 170 },
  { date: "2024-04-23", plateform: 138, site: 230 },
  { date: "2024-04-24", plateform: 387, site: 290 },
  { date: "2024-04-25", plateform: 215, site: 250 },
  { date: "2024-04-26", plateform: 75, site: 130 },
  { date: "2024-04-27", plateform: 383, site: 420 },
  { date: "2024-04-28", plateform: 122, site: 180 },
  { date: "2024-04-29", plateform: 315, site: 240 },
  { date: "2024-04-30", plateform: 454, site: 380 },
  { date: "2024-05-01", plateform: 165, site: 220 },
  { date: "2024-05-02", plateform: 293, site: 310 },
  { date: "2024-05-03", plateform: 247, site: 190 },
  { date: "2024-05-04", plateform: 385, site: 420 },
  { date: "2024-05-05", plateform: 481, site: 390 },
  { date: "2024-05-06", plateform: 498, site: 520 },
  { date: "2024-05-07", plateform: 388, site: 300 },
  { date: "2024-05-08", plateform: 149, site: 210 },
  { date: "2024-05-09", plateform: 227, site: 180 },
  { date: "2024-05-10", plateform: 293, site: 330 },
  { date: "2024-05-11", plateform: 335, site: 270 },
  { date: "2024-05-12", plateform: 197, site: 240 },
  { date: "2024-05-13", plateform: 197, site: 160 },
  { date: "2024-05-14", plateform: 448, site: 490 },
  { date: "2024-05-15", plateform: 473, site: 380 },
  { date: "2024-05-16", plateform: 338, site: 400 },
  { date: "2024-05-17", plateform: 499, site: 420 },
  { date: "2024-05-18", plateform: 315, site: 350 },
  { date: "2024-05-19", plateform: 235, site: 180 },
  { date: "2024-05-20", plateform: 177, site: 230 },
  { date: "2024-05-21", plateform: 82, site: 140 },
  { date: "2024-05-22", plateform: 81, site: 120 },
  { date: "2024-05-23", plateform: 252, site: 290 },
  { date: "2024-05-24", plateform: 294, site: 220 },
  { date: "2024-05-25", plateform: 201, site: 250 },
  { date: "2024-05-26", plateform: 213, site: 170 },
  { date: "2024-05-27", plateform: 420, site: 460 },
  { date: "2024-05-28", plateform: 233, site: 190 },
  { date: "2024-05-29", plateform: 78, site: 130 },
  { date: "2024-05-30", plateform: 340, site: 280 },
  { date: "2024-05-31", plateform: 178, site: 230 },
  { date: "2024-06-01", plateform: 178, site: 200 },
  { date: "2024-06-02", plateform: 470, site: 410 },
  { date: "2024-06-03", plateform: 103, site: 160 },
  { date: "2024-06-04", plateform: 439, site: 380 },
  { date: "2024-06-05", plateform: 88, site: 140 },
  { date: "2024-06-06", plateform: 294, site: 250 },
  { date: "2024-06-07", plateform: 323, site: 370 },
  { date: "2024-06-08", plateform: 385, site: 320 },
  { date: "2024-06-09", plateform: 438, site: 480 },
  { date: "2024-06-10", plateform: 155, site: 200 },
  { date: "2024-06-11", plateform: 92, site: 150 },
  { date: "2024-06-12", plateform: 492, site: 420 },
  { date: "2024-06-13", plateform: 81, site: 130 },
  { date: "2024-06-14", plateform: 426, site: 380 },
  { date: "2024-06-15", plateform: 307, site: 350 },
  { date: "2024-06-16", plateform: 371, site: 310 },
  { date: "2024-06-17", plateform: 475, site: 520 },
  { date: "2024-06-18", plateform: 107, site: 170 },
  { date: "2024-06-19", plateform: 341, site: 290 },
  { date: "2024-06-20", plateform: 408, site: 450 },
  { date: "2024-06-21", plateform: 169, site: 210 },
  { date: "2024-06-22", plateform: 317, site: 270 },
  { date: "2024-06-23", plateform: 480, site: 530 },
  { date: "2024-06-24", plateform: 132, site: 180 },
  { date: "2024-06-25", plateform: 141, site: 190 },
  { date: "2024-06-26", plateform: 434, site: 380 },
  { date: "2024-06-27", plateform: 448, site: 490 },
  { date: "2024-06-28", plateform: 149, site: 200 },
  { date: "2024-06-29", plateform: 103, site: 160 },
  { date: "2024-06-30", plateform: 446, site: 400 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  plateform: {
    label: "plateform",
    color: "var(--chart-1)",
  },
  site: {
    label: "site",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function Chart(props: { data: any[] }) {
  const [timeRange, setTimeRange] = React.useState("90d");

  const chartData = props.data;
  console.log("chartData", chartData);

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Area Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-plateform)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-plateform)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-site)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-site)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="site"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-site)"
              stackId="a"
            />
            <Area
              dataKey="plateform"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-plateform)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
