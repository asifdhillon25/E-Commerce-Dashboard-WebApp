import React from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer, Legend } from "recharts";

const regionData = [
  { name: "North America", value: 4000 },
  { name: "Europe", value: 3000 },
  { name: "Asia", value: 2000 },
  
  { name: "Other", value: 1000 },
];

const COLORS = ["#6366F1", "#818CF8", "#4F46E5", "#A5B4FC"];

export default function SalesByRegionCard() {
  return (
    <div className="bg-light-surface dark:bg-dark-surface rounded-xl shadow-medium p-6 transition-colors duration-250 shadow-md hover:shadow-lg">
      <h3 className="text-lg font-semibold text-light-textPrimary dark:text-dark-textPrimary mb-2">
        Sales by Region
      </h3>
      <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary mb-4">
        Distribution of sales by region
      </p>
      <div className="w-full h-56">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={regionData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              innerRadius={40}
              paddingAngle={2}
            >
              {regionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#FFFFFF",
                color: "#0F172A",
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />
            <Legend verticalAlign="bottom" wrapperStyle={{ color: "#475569", fontFamily: "Inter, sans-serif" }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
