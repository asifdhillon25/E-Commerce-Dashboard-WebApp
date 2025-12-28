import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Sample KPI data (can be dynamic)
const revenueData = [
  { month: "Jan", revenue: 5000 },
  { month: "Feb", revenue: 7000 },
  { month: "Mar", revenue: 6000 },
  { month: "Apr", revenue: 8000 },
  { month: "May", revenue: 7500 },
  { month: "Jun", revenue: 9000 },
];

export default function RevenueKpiCard() {
  return (
    <div className="bg-light-surface dark:bg-dark-surface rounded-lg shadow-medium p-6 transition-colors duration-250 shadow-md hover:shadow-lg">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <div>
          <h3 className="text-lg font-semibold text-light-textPrimary dark:text-dark-textPrimary">
            Monthly Revenue
          </h3>
          <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary mt-1">
            Performance over the last 6 months
          </p>
        </div>
        <span className="mt-2 sm:mt-0 px-3 py-1 rounded-md bg-light-accentSoft dark:bg-dark-accentSoft text-light-primary dark:text-dark-primary text-sm font-medium">
          Updated Today
        </span>
      </div>

      {/* Chart Container */}
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={revenueData}
            margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
          >
            <CartesianGrid
              stroke="#E5E7EB"
              strokeDasharray="3 3"
              className="dark:stroke-dark-border"
            />
            <XAxis
              dataKey="month"
              stroke="#475569"
              className="dark:stroke-dark-textSecondary"
            />
            <YAxis
              stroke="#475569"
              className="dark:stroke-dark-textSecondary"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#FFFFFF",
                color: "#0F172A",
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
              cursor={{ fill: "rgba(99,102,241,0.1)" }}
            />
            <Legend
              verticalAlign="top"
              wrapperStyle={{
                color: "#475569",
                fontFamily: "Inter, sans-serif",
              }}
            />
            <Bar
              dataKey="revenue"
              fill="#6366F1"
              radius={[8, 8, 0, 0]}
              barSize={32}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Footer KPI Summary */}
      <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-light-textSecondary dark:text-dark-textSecondary">
        <div>Total Revenue: <span className="text-light-primary dark:text-dark-primary font-medium">$45,000</span></div>
        <div>Growth: <span className="text-green-500 dark:text-success font-medium">+12%</span></div>
      </div>
    </div>
  );
}
