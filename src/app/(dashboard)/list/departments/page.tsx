import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import prisma from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/settings";
import { Class, Prisma } from "@prisma/client";

const DepartmentPage = () => {
  const columns = [
    {
      header: "Department",
      accessor: "name",
    },
    {
      header: "Faculty",
      accessor: "faculty",
    },
    {
      header: "Students",
      accessor: "students",
    },
    {
      header: "Courses",
      accessor: "courses",
    },
  ];

  const departments = [
    {
      id: 1,
      name: "Computer Science",
      faculty: 18,
      students: 420,
      courses: 24,
    },
    {
      id: 2,
      name: "Electronics & Communication",
      faculty: 15,
      students: 360,
      courses: 20,
    },
    {
      id: 3,
      name: "Mechanical Engineering",
      faculty: 12,
      students: 300,
      courses: 18,
    },
    {
      id: 4,
      name: "Civil Engineering",
      faculty: 10,
      students: 250,
      courses: 15,
    },
    {
      id: 5,
      name: "Electrical Engineering",
      faculty: 11,
      students: 280,
      courses: 16,
    },
    {
      id: 6,
      name: "Artificial Intelligence",
      faculty: 8,
      students: 180,
      courses: 10,
    },
  ];

  const renderRow = (item: any) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="p-4 font-semibold">{item.name}</td>
      <td>{item.faculty}</td>
      <td>{item.students}</td>
      <td>{item.courses}</td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="hidden md:block text-lg font-semibold">
          All Departments
        </h1>

        <div className="flex items-center gap-4">
          <TableSearch />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-lamaSky p-4 rounded-xl">
          <h2 className="text-2xl font-bold">6</h2>
          <p className="text-sm">Total Departments</p>
        </div>

        <div className="bg-lamaPurple p-4 rounded-xl">
          <h2 className="text-2xl font-bold">74</h2>
          <p className="text-sm">Faculty Members</p>
        </div>

        <div className="bg-lamaYellow p-4 rounded-xl">
          <h2 className="text-2xl font-bold">1790</h2>
          <p className="text-sm">Students</p>
        </div>

        <div className="bg-lamaSkyLight p-4 rounded-xl">
          <h2 className="text-2xl font-bold">103</h2>
          <p className="text-sm">Courses Offered</p>
        </div>
      </div>

      {/* Department Table */}
      <Table
        columns={columns}
        renderRow={renderRow}
        data={departments}
      />
    </div>
  );
};

export default DepartmentPage;