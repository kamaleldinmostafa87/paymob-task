import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

const ReusableTable = ({ headersConfig, data }) => {
  return (
    <DataTable
      value={data}
      rows={5}
      headerClassName="!bg-gray-100"
      className="hidden overflow-hidden border-solid border-gray-700 rounded-xl border bg-white p-2 sm:block"
    >
      {headersConfig.map((column) => (
        <Column
          key={column.name}
          header={column.name}
          headerClassName="whitespace-nowrap bg-gray-50 px-4 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider"
          style={column.style ? column.style : null}
          body={(rowData) => {
            if (column.value === "created_at") {
              return new Date(rowData[column.value]).toLocaleString();
            } else if (column.value === "payment_status") {
              return column.template(rowData);
            } else return rowData[column.value];
          }}
        />
      ))}
    </DataTable>
  );
};
export default ReusableTable;
