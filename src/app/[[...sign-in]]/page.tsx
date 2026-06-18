"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    const role = user?.publicMetadata.role;

    if (role) {
      router.push(`/${role}`);
    }
  }, [user, router]);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* LEFT SECTION */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white flex-col justify-center px-20">
        <div className="max-w-xl">
          <Image
            src="/logo.png"
            alt="CampusSphere"
            width={80}
            height={80}
            className="mb-6"
          />

          <h1 className="text-6xl font-bold mb-6">
            CampusSphere
          </h1>

          <p className="text-xl text-blue-100 leading-relaxed">
            Smart University Management Platform for managing
            students, faculty, courses, assessments and campus
            activities from a single dashboard.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <h2 className="text-3xl font-bold">5000+</h2>
              <p className="text-blue-100">Students</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <h2 className="text-3xl font-bold">250+</h2>
              <p className="text-blue-100">Faculty</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <h2 className="text-3xl font-bold">100+</h2>
              <p className="text-blue-100">Courses</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <h2 className="text-3xl font-bold">50+</h2>
              <p className="text-blue-100">Departments</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex-1 flex items-center justify-center p-6">
        <SignIn.Root>
          <SignIn.Step
            name="start"
            className="bg-white w-full max-w-lg p-12 rounded-3xl shadow-2xl flex flex-col gap-5"
          >
            <div className="flex flex-col items-center">
              <Image
                src="/logo.png"
                alt=""
                width={60}
                height={60}
              />

              <h1 className="text-3xl font-bold mt-4">
                Welcome Back
              </h1>

              <p className="text-gray-500 text-center mt-2">
                Sign in to continue to CampusSphere
              </p>
            </div>

            <Clerk.GlobalError className="text-sm text-red-500 text-center" />

            <Clerk.Field
              name="identifier"
              className="flex flex-col gap-2"
            >
              <Clerk.Label className="text-sm font-medium text-gray-700">
                Username
              </Clerk.Label>

              <Clerk.Input
                type="text"
                required
                className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <Clerk.FieldError className="text-xs text-red-500" />
            </Clerk.Field>

            <Clerk.Field
              name="password"
              className="flex flex-col gap-2"
            >
              <Clerk.Label className="text-sm font-medium text-gray-700">
                Password
              </Clerk.Label>

              <Clerk.Input
                type="password"
                required
                className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <Clerk.FieldError className="text-xs text-red-500" />
            </Clerk.Field>

            <SignIn.Action
              submit
              className="bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold rounded-xl py-3 mt-2"
            >
              Sign In
              <div className="mt-5 bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h3 className="font-semibold text-blue-800 mb-3">
              🔑 Demo Credentials
            </h3>

            <div className="space-y-3 text-sm">
              <div>
                <p className="font-medium text-gray-800">👨‍💼 Admin</p>
                <p className="text-gray-600">
                  Username: <span className="font-medium">khushijakhetia1703@gmail.com</span>
                </p>
                <p className="text-gray-600">
                  Password: <span className="font-medium">jakhetia@123</span>
                </p>
              </div>

              <div className="border-t pt-3">
                <p className="font-medium text-gray-800">👨‍🏫 Faculty</p>
                <p className="text-gray-600">
                  Username: <span className="font-medium">teacher@gmail.com</span>
                </p>
                <p className="text-gray-600">
                  Password: <span className="font-medium">Teacher@1703</span>
                </p>
              </div>

              <div className="border-t pt-3">
                <p className="font-medium text-gray-800">👨‍🎓 Student</p>
                <p className="text-gray-600">
                  Username: <span className="font-medium">student@gmail.com</span>
                </p>
                <p className="text-gray-600">
                  Password: <span className="font-medium">Student@1703</span>
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              Note: In a real university environment, credentials are issued by the administration and self-registration is not available.
            </p>
          </div>
            </SignIn.Action>

            <p className="text-center text-xs text-gray-400 mt-2">
              CampusSphere © 2026
            </p>
          </SignIn.Step>
        </SignIn.Root>
      </div>
    </div>
  );
};

export default LoginPage;
