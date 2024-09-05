import Link from "next/link";
import { GoMail } from "react-icons/go";
import { MdLock } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";

export default function Login() {
  return (
    <div className="p-5 bg-white h-[calc(100vh-60px)] flex justify-center">
      <div className="flex flex-col lg:flex-row border border-gray-100 w-[85%] items-center h-full rounded-xl">
        <div className="w-full lg:w-1/2 p-6 md:p-10 space-y-6 bg-[#F2F2F2] rounded-lg lg:rounded-l-lg lg:rounded-r-none h-full">
          <h2 className="text-2xl text-[#0B5D51] font-bold">SIGN IN</h2>
          <p className="text-[#4E4E4E] text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            repudiandae!
          </p>
          <form className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                <GoMail className="text-black cursor-pointer" size={22} />
              </div>
              <input
                type="email"
                id="email"
                className="block w-full pl-[3.5rem] py-3 px-6 mt-2 rounded-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                placeholder="Enter Email"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <IoEyeOutline className="text-black cursor-pointer" size={20} />
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                <MdLock className="text-black cursor-pointer" size={22} />
              </div>
              <input
                type="password"
                id="password"
                className="block w-full pl-[3.5rem] py-3 px-6 mt-2 rounded-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                placeholder="Enter Password"
              />
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="cursor-pointer"
                id="remember"
                />
              <label
                className="text-sm text-[#737576] cursor-pointer"
                htmlFor="remember"
              >
                Remember me
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-4 py-3 mt-3 transition-all text-white bg-[#0B5D51] rounded-md hover:bg-[#0a483f]"
              >
                SIGN IN
              </button>
            </div>
          </form>
          <p className="text-sm text-[#737576]">
            Don't have an account?{" "}
            <Link
              href="/auth/signup"
              className="text-[#0B5D51] hover:underline font-bold"
            >
              Sign up
            </Link>
          </p>
        </div>
        <div className="image-div object-cover flex items-center justify-center flex-1">
          <img
            src="/assets/images/image.png"
            width={300}
            height={300}
            className="object-cover"
          ></img>
        </div>
      </div>
    </div>
  );
}
