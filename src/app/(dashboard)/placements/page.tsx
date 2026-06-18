const PlacementsPage = () => {
  const departments = [
    { name: "Computer Science", rate: 97 },
    { name: "Electronics & Communication", rate: 92 },
    { name: "Mechanical Engineering", rate: 85 },
    { name: "Civil Engineering", rate: 81 },
  ];

  return (
    <div className="p-4 flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-gray-800">
        Placement Analytics Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl shadow-sm border p-6 transition-all hover:shadow-md">
          <p className="text-sm text-gray-500">Total Offers</p>
          <h2 className="text-4xl font-bold mt-2">128</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border p-6 transition-all hover:shadow-md">
          <p className="text-sm text-gray-500">Highest Package</p>
          <h2 className="text-4xl font-bold mt-2">42 LPA</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border p-6 transition-all hover:shadow-md">
          <p className="text-sm text-gray-500">Average Package</p>
          <h2 className="text-4xl font-bold mt-2">11.8 LPA</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border p-6 transition-all hover:shadow-md">
          <p className="text-sm text-gray-500">Placement Rate</p>
          <h2 className="text-4xl font-bold mt-2 text-green-600">91%</h2>
        </div>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Companies */}
        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <h2 className="text-xl font-semibold mb-5">
            Top Recruiting Companies
          </h2>

          <div className="space-y-4">
            {[
              ["Amazon", 18],
              ["Google", 12],
              ["Microsoft", 10],
              ["Goldman Sachs", 8],
              ["Adobe", 7],
            ].map(([company, offers]) => (
              <div
                key={company}
                className="flex justify-between items-center border-b pb-2"
              >
                <span className="font-medium">{company}</span>
                <span className="text-gray-500">
                  {offers} Offers
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Department Placement */}
        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <h2 className="text-xl font-semibold mb-5">
            Department-wise Placement Rate
          </h2>

          <div className="space-y-5">
            {departments.map((dept) => (
              <div key={dept.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">
                    {dept.name}
                  </span>
                  <span className="text-sm text-gray-500">
                    {dept.rate}%
                  </span>
                </div>

                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#C3EBFA]"
                    style={{ width: `${dept.rate}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementsPage;