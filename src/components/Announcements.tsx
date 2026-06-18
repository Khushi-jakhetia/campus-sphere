import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

const Announcements = async () => {
  const { userId, sessionClaims } = auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;

  const roleConditions = {
    teacher: { lessons: { some: { teacherId: userId! } } },
    student: { students: { some: { id: userId! } } },
    parent: { students: { some: { parentId: userId! } } },
  };

  const data = await prisma.announcement.findMany({
    take: 5,
    orderBy: { date: "desc" },
    where: {
      ...(role !== "admin" && {
        OR: [
          { classId: null },
          { class: roleConditions[role as keyof typeof roleConditions] || {} },
        ],
      }),
    },
  });

  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-xl font-bold text-gray-800">
            📢 Latest Announcements
          </h1>
          <p className="text-sm text-gray-500">
            Important updates and notices
          </p>
        </div>

        <button className="text-sm text-blue-600 font-medium hover:text-blue-800">
          View All
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {data.map((item, index) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${
                      index === 0
                        ? "bg-red-100 text-red-600"
                        : index === 1
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {index === 0
                      ? "URGENT"
                      : index === 1
                      ? "IMPORTANT"
                      : "NEW"}
                  </span>

                  <span className="text-xs text-gray-400">
                    {new Intl.DateTimeFormat("en-GB").format(item.date)}
                  </span>
                </div>

                <h2 className="font-semibold text-gray-800">
                  {item.title}
                </h2>

                <p className="text-sm text-gray-600 mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        {data.length === 0 && (
          <div className="text-center py-8 text-gray-400">
            No announcements available.
          </div>
        )}
      </div>
    </div>
  );
};

export default Announcements;
