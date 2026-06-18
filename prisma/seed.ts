import { Day, PrismaClient, UserSex } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // ADMIN
  await prisma.admin.create({
    data: {
      id: "admin1",
      username: "admin1",
    },
  });
  await prisma.admin.create({
    data: {
      id: "admin2",
      username: "admin2",
    },
  });

  // GRADE
  for (let i = 1; i <= 6; i++) {
    await prisma.grade.create({
      data: {
        level: i,
      },
    });
  }
department: "Computer Science"

  const departments = [
  "Computer Science",
  "Electronics & Communication",
  "Mechanical Engineering",
  "Civil Engineering",
  "Electrical Engineering",
  "Artificial Intelligence",
];
  // CLASS
  for (let i = 1; i <= 6; i++) {
    await prisma.class.create({
      data: {
        name: departments[i - 1],
        gradeId: i, 
        capacity: Math.floor(Math.random() * (20 - 15 + 1)) + 15,
      },
    });
  }

  // SUBJECT
  const subjectData = [
  { name: "Data Structures & Algorithms" },
  { name: "Database Management Systems" },
  { name: "Operating Systems" },
  { name: "Computer Networks" },
  { name: "Machine Learning" },
  { name: "Digital Signal Processing" },
  { name: "Microprocessors" },
  { name: "VLSI Design" },
  { name: "Software Engineering" },
  { name: "Communication Systems" },
];

  for (const subject of subjectData) {
    await prisma.subject.create({ data: subject });
  }

  // TEACHER
  const facultyNames = [
  ["Ananya", "Sharma"],
  ["Rajesh", "Verma"],
  ["Priya", "Nair"],
  ["Amit", "Kulkarni"],
  ["Neha", "Gupta"],
  ["Vivek", "Singh"],
  ["Rohit", "Mehta"],
  ["Sneha", "Iyer"],
  ["Arjun", "Patel"],
  ["Kavita", "Joshi"],
  ["Rahul", "Mishra"],
  ["Pooja", "Agarwal"],
  ["Karan", "Malhotra"],
  ["Deepika", "Rao"],
  ["Siddharth", "Jain"],
];
const facultyData = [
  { subjectId: 1, classId: 1 },
  { subjectId: 2, classId: 1 },
  { subjectId: 3, classId: 1 },
  { subjectId: 6, classId: 2 },
  { subjectId: 7, classId: 2 },
  { subjectId: 8, classId: 2 },
  { subjectId: 5, classId: 6 },
  { subjectId: 10, classId: 1 },
  { subjectId: 9, classId: 2 },
  { subjectId: 1, classId: 5 },
  { subjectId: 2, classId: 6 },
  { subjectId: 3, classId: 1 },
  { subjectId: 4, classId: 2 },
  { subjectId: 5, classId: 6 },
  { subjectId: 6, classId: 3 },
];
  for (let i = 1; i <= 15; i++) {
    const faculty = facultyData[i - 1];
    console.log(
  facultyNames[i - 1][0],
  faculty.subjectId,
  faculty.classId
);
    await prisma.teacher.create({
      data: {
        id: `FAC${String(i).padStart(3, "0")}`,
        username: `fac${i}`,
        name: facultyNames[i - 1][0],
        surname: facultyNames[i - 1][1],
        email: `teacher${i}@example.com`,
        phone: `123-456-789${i}`,
        address: `Address${i}`,
        bloodType: "A+",
        sex: i % 2 === 0 ? UserSex.MALE : UserSex.FEMALE,
        subjects: { connect: [{ id: faculty.subjectId }] },
        classes: { connect: [{ id: faculty.classId }] }, 
        birthday: new Date(new Date().setFullYear(new Date().getFullYear() - 30)),
        department: departments[(i - 1) % departments.length],
      },
    });
  }

  // LESSON
  const slots = [
  { start: 9, end: 10 },
  { start: 10, end: 11 },
  { start: 11, end: 12 },
  { start: 14, end: 15 },
  { start: 15, end: 16 },
];
const subjects = [
  "Data Structures",
  "DBMS",
  "Operating Systems",
  "Computer Networks",
  "Machine Learning",
  "Artificial Intelligence",
  "Compiler Design",
  "Software Engineering",
];



for (let i = 1; i <= 30; i++) {
  const slot = slots[i % slots.length];

  await prisma.lesson.create({
    data: {
      name: subjects[i % subjects.length],
      day: Day[
        Object.keys(Day)[
          Math.floor(Math.random() * Object.keys(Day).length)
        ] as keyof typeof Day
      ],

      startTime: new Date(
        new Date().setHours(slot.start, 0, 0, 0)
      ),

      endTime: new Date(
        new Date().setHours(slot.end, 0, 0, 0)
      ),

      subjectId: (i % 10) + 1,
      classId: (i % 6) + 1,
      teacherId: `FAC${String((i % 15) + 1).padStart(3, "0")}`,
    },
  });
}

  // parent
  for (let i = 1; i <= 25; i++) {
    await prisma.parent.create({
      data: {
        id: `parentId${i}`,
        username: `parentId${i}`,
        name: `PName ${i}`,
        surname: `PSurname ${i}`,
        email: `parent${i}@example.com`,
        phone: `123-456-789${i}`,
        address: `Address${i}`,
      },
    });
  }

  // STUDENT
  for (let i = 1; i <= 50; i++) {
    await prisma.student.create({
      data: {
        id: `student${i}`, 
        username: `student${i}`, 
        name: `SName${i}`,
        surname: `SSurname ${i}`,
        email: `student${i}@example.com`,
        phone: `987-654-321${i}`,
        address: `Address${i}`,
        bloodType: "O-",
        sex: i % 2 === 0 ? UserSex.MALE : UserSex.FEMALE,
        parentId: `parentId${Math.ceil(i / 2) % 25 || 25}`, 
        gradeId: (i % 6) + 1, 
        classId: (i % 6) + 1, 
        birthday: new Date(new Date().setFullYear(new Date().getFullYear() - 10)),
      },
    });
  }

  // EXAM
  for (let i = 1; i <= 10; i++) {
    await prisma.exam.create({
      data: {
        title: `Exam ${i}`, 
        startTime: new Date(new Date().setHours(new Date().getHours() + 1)), 
        endTime: new Date(new Date().setHours(new Date().getHours() + 2)), 
        lessonId: (i % 30) + 1, 
      },
    });
  }

  // ASSIGNMENT
  for (let i = 1; i <= 10; i++) {
    await prisma.assignment.create({
      data: {
        title: `Assignment ${i}`, 
        startDate: new Date(new Date().setHours(new Date().getHours() + 1)), 
        dueDate: new Date(new Date().setDate(new Date().getDate() + 1)), 
        lessonId: (i % 30) + 1, 
      },
    });
  }

  // RESULT
  for (let i = 1; i <= 10; i++) {
    await prisma.result.create({
      data: {
        score: 90, 
        studentId: `student${i}`, 
        ...(i <= 5 ? { examId: i } : { assignmentId: i - 5 }), 
      },
    });
  }

  // ATTENDANCE
  for (let i = 1; i <= 10; i++) {
    await prisma.attendance.create({
      data: {
        date: new Date(), 
        present: true, 
        studentId: `student${i}`, 
        lessonId: (i % 30) + 1, 
      },
    });
  }

  // EVENT
  const events = [
  "Placement Drive",
  "Hackathon 2026",
  "Industry Connect Session",
  "Research Symposium",
  "Alumni Meet",
];
  for (let i = 1; i <= 5; i++) {
    await prisma.event.create({
      data: {
        title: events[i - 1], 
        description: `Description for Event ${i}`, 
        startTime: new Date(new Date().setHours(new Date().getHours() + 1)), 
        endTime: new Date(new Date().setHours(new Date().getHours() + 2)), 
        classId: (i % 5) + 1, 
      },
    });
  }

  // ANNOUNCEMENT
  
const announcements = [
  {
    title: "Semester Registration Open",
    description:
      "Students must complete semester registration before July 10."
  },
  {
    title: "Placement Applications Started",
    description:
      "Eligible students can apply through the placement portal."
  },
  {
    title: "Mid Semester Schedule Released",
    description:
      "Mid-semester examination timetable has been published."
  },
  {
    title: "Internship Fair Registration",
    description:
      "Register now for the annual internship and career fair."
  },
  {
    title: "Research Grant Applications Open",
    description:
      "Final year students can apply for innovation grants."
  },
];
  for (let i = 1; i <= 5; i++) {
  await prisma.announcement.create({
    data: {
      title: announcements[i - 1].title,
      description: announcements[i - 1].description,
      date: new Date(),
      classId: null,
    },
  });
}

  console.log("Seeding completed successfully.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
