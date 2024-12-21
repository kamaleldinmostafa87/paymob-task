import React from "react";
import "./App.css";
import "./index.css";
import data from "./../data.json";
import ReusableTable from "./components/ReusableTable";

function App() {
  //headerConfig that will be passed to ReusableTable
  const headersConfig = [
    { name: "ID", value: "id", type: "number", style: { minWidth: "4rem" } },
    {
      name: "Amount",
      value: "amount_cents",
      type: "number",
      // you may not pass the style as you like
      style: { minWidth: "4rem" },
    },
    {
      name: "Currency",
      value: "currency",
      type: "string",
      style: { minWidth: "4rem" },
    },
    {
      name: "Payment Status",
      value: "payment_status",
      type: "string",
      // this a simple template for the payment status will be shown in the status column
      template: (rowData) => {
        return rowData.payment_status === "PAID" ? (
          <span className="bg-green-400 text-white px-5 py-1 rounded-md">
            {rowData.payment_status}
          </span>
        ) : (
          <span className="bg-red-400 text-white px-2 py-1 rounded-md">
            {rowData.payment_status}
          </span>
        );
      },
    },
    {
      name: "Payment Date",
      value: "created_at",
      type: "date",
      style: { minWidth: "4rem" },
    },
  ];

  return (
    <div className="h-screen bg-gray-100 place-content-center">
      <div className="flex flex-col items-center w-full">
        <h1 className="text-2xl mb-4 text-center">Transaction History</h1>
        <ReusableTable headersConfig={headersConfig} data={data} />
      </div>
    </div>
  );
}

export default App;
