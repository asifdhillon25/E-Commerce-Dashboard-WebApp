import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const funnelData = [
  { stage: "Visited", users: 1000 },
  { stage: "Signed Up", users: 600 },
  { stage: "Added to Cart", users: 400 },
  { stage: "Purchased", users: 300 },
];

export default function OrdersFunnelCard() {
  return (
    <div className="bg-light-surface dark:bg-dark-surface rounded-xl shadow-medium p-6 transition-colors duration-250 shadow-md hover:shadow-lg">
      <h3 className="text-lg font-semibold text-light-textPrimary dark:text-dark-textPrimary mb-2">
        Orders Funnel
      </h3>
      <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary mb-4">
        Customer journey from visit to purchase
      </p>
      <div className="w-full h-56">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={funnelData}>
            <CartesianGrid stroke="#E5E7EB" className="dark:stroke-dark-border" strokeDasharray="3 3" />
            <XAxis dataKey="stage" stroke="#475569" className="dark:stroke-dark-textSecondary" />
            <YAxis stroke="#475569" className="dark:stroke-dark-textSecondary" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#FFFFFF",
                color: "#0F172A",
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />
            <Area type="monotone" dataKey="users" fill="#6366F1" stroke="#4F46E5" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
