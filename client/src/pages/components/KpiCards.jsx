import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const kpiData = {
  revenue: [
    { value: 5000 },
    { value: 7000 },
    { value: 6000 },
    { value: 8000 },
    { value: 7500 },
  ],
  orders: [
    { value: 120 },
    { value: 140 },
    { value: 130 },
    { value: 150 },
    { value: 160 },
  ],
};

function KpiCard({ title, value, data }) {
  return (
    <div className="bg-light-surface dark:bg-dark-surface rounded-xl shadow-soft p-4 transition-colors duration-250 shadow-md hover:shadow-lg">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-sm text-light-textSecondary dark:text-dark-textSecondary">{title}</h4>
        <p className="text-lg font-semibold text-light-textPrimary dark:text-dark-textPrimary">{value}</p>
      </div>
      <div className="w-full h-12">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line type="monotone" dataKey="value" stroke="#6366F1" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default function KpiCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <KpiCard title="Revenue" value="$45,000" data={kpiData.revenue} />
      <KpiCard title="Orders" value="1,200" data={kpiData.orders} />
      <KpiCard title="New Customers" value="320" data={kpiData.orders} />
      <KpiCard title="Conversion Rate" value="5.4%" data={kpiData.revenue} />
    </div>
  );
}
