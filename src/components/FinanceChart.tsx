"use client";

import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    year: "2021",
    placementRate: 78,
  },
  {
    year: "2022",
    placementRate: 82,
  },
  {
    year: "2023",
    placementRate: 87,
  },
  {
    year: "2024",
    placementRate: 89,
  },
  {
    year: "2025",
    placementRate: 91,
  },
  {
    year: "2026",
    placementRate: 94,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">
          Placement Trends
        </h1>

        <Image
          src="/moreDark.png"
          alt=""
          width={20}
          height={20}
        />
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#ddd"
          />

          <XAxis
            dataKey="year"
            axisLine={false}
            tick={{ fill: "#9CA3AF" }}
            tickLine={false}
            tickMargin={10}
          />

          <YAxis
            domain={[70, 100]}
            axisLine={false}
            tick={{ fill: "#9CA3AF" }}
            tickLine={false}
            tickMargin={20}
          />

          <Tooltip />

          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{
              paddingTop: "10px",
              paddingBottom: "30px",
            }}
          />

          <Line
            type="monotone"
            dataKey="placementRate"
            name="Placement Rate (%)"
            stroke="#6366F1"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
