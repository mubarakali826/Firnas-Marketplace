import Link from 'next/link';

export default function Signup() {
  return (
    <div className='px-4 py-5 bg-white h-screen sm:px-8 md:px-16 lg:px-32'>
      <div className="flex flex-col lg:flex-row shadow-md items-center h-full rounded-xl">
        <div className="w-full lg:w-1/2 p-6 md:p-10 space-y-6 bg-[#F2F2F2] rounded-lg lg:rounded-l-lg lg:rounded-r-none h-full">
          <h2 className="text-2xl text-[#0B5D51]">SIGN UP</h2>
          <p className='text-[#4E4E4E] text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, repudiandae!
          </p>
          <form className="space-y-4">
            <div className='flex flex-col gap-4 lg:flex-row lg:gap-5'>
              <input
                type="text"
                id="fname"
                className="block w-full py-3 px-6 mt-2 rounded-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                placeholder='Enter First Name'
              />
              <input
                type="text"
                id="lname"
                className="block w-full py-3 px-6 mt-2 rounded-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                placeholder='Enter Last Name'
              />
            </div>
            <div>
              <input
                type="email"
                id="email"
                className="block w-full py-3 px-6 mt-2 rounded-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                placeholder='Enter Email'
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                className="block w-full py-3 px-6 mt-2 rounded-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                placeholder='Enter Password'
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-3 mt-3 transition-all text-white bg-[#0B5D51] rounded-md hover:bg-[#0a483f]"
              >
                SIGN UP
              </button>
            </div>
          </form>
          <p className="text-sm text-[#737576]">
            Already have an account?{' '}
            <Link href="/" className="text-[#0B5D51] hover:underline font-bold">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
