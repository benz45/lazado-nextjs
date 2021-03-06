import React, { ReactElement } from "react";
import { NextPage } from "next";

// Hook
import useLogin from "src/Hook/useLogin";

const loginScreen: NextPage = (): ReactElement => {
  const { username, password, _handleChange, _login } = useLogin();

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6  text-center text-5xl font-extrabold text-black">
            LAZADO
          </h2>
        </div>
        <form className="mt-12 space-y-6" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                อีเมล หรือหมายเลขโทรศัพท์มือถือ
              </label>
              <input
                id="email-address"
                name="username"
                type="email"
                value={username}
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent focus:z-10 sm:text-md"
                placeholder="อีเมล หรือหมายเลขโทรศัพท์มือถือ"
                onChange={_handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                รหัสผ่าน
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent focus:z-10 sm:text-md"
                placeholder="รหัสผ่าน"
                onChange={_handleChange}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4  text-primary-400 focus:ring-primary-400 border-gray-300 rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-900"
              >
                จดจำรหัสผ่าน
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-primary-400 hover:text-primary-300"
              >
                ลืมรหัสผ่าน ?
              </a>
            </div>
          </div>

          <div>
            <button
              type="button"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-400 hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400"
              onClick={_login}
            >
              เข้าสู่ระบบ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default loginScreen;
