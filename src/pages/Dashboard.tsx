import DataTable from "../components/DataTable"

export default function Dashboard() {
  return (
    <div className="items-center text-center flex flex-col">
      <h1 className="text-2xl font-bold text-gray-700">Dashboard</h1>
      <div className="h-2/5 w-4/5 m-2">
        <DataTable />
      </div>
    </div>
  )
}
