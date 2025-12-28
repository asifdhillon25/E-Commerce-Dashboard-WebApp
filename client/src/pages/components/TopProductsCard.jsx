import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const productsData = [
  { product: "Laptop", sales: 120 },
  { product: "Headphones", sales: 95 },
  { product: "Smartphone", sales: 140 },
  { product: "Keyboard", sales: 80 },
  { product: "Mouse", sales: 70 },];

export default function TopProductsCard() {
  return (
    <div className="bg-light-surface dark:bg-dark-surface rounded-xl shadow-medium p-6 transition-colors duration-250 shadow-md hover:shadow-lg">
      <h3 className="text-lg font-semibold text-light-textPrimary dark:text-dark-textPrimary mb-2">
        Top Products
      </h3>
      <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary mb-4">
        Best selling products
      </p>
      <div className="w-full h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={productsData} layout="vertical">
            <CartesianGrid stroke="#E5E7EB" className="dark:stroke-dark-border" strokeDasharray="3 3" />
            <XAxis type="number" stroke="#475569" className="dark:stroke-dark-textSecondary" />
            <YAxis type="category" dataKey="product" stroke="#475569" className="dark:stroke-dark-textSecondary" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#FFFFFF",
                color: "#0F172A",
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />
            <Bar dataKey="sales" fill="#6366F1" radius={[8, 8, 8, 8]} barSize={24} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
