import Link from 'next/link';

export default function Signup() {
  return (
    <div className=' bg-white h-[calc(100vh-86px)] p-5 flex justify-center '>
      <div className="flex flex-col lg:flex-row border w-[85%] border-gray-100 items-center h-full rounded-xl">
        <div className="w-full lg:w-1/2 p-6 md:p-10 space-y-4 bg-[#F2F2F2] rounded-lg lg:rounded-l-lg lg:rounded-r-none h-full">
          <h2 className="text-2xl text-[#0B5D51] font-bold">SIGN UP</h2>
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
                className="w-full px-4 py-3 mt- transition-all text-white bg-[#0B5D51] rounded-md hover:bg-[#0a483f]"
              >
                SIGN UP
              </button>
            </div>
          </form>
         <div>
         <p className="text-sm text-[#737576] -mt-1">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-[#0B5D51] hover:underline font-bold">
              Sign in
            </Link>
          </p>
         </div>
        </div>
        <div className="image-div object-cover flex items-center justify-center flex-1">
          <img src="/assets/images/image.png" width={300} height={300}  className='object-cover'></img>
        </div>
      </div>
    </div>
  );
}
