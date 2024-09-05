import React from 'react'

const SignupSuccessfull = () => {
  return (
    <div className='h-[calc(100vh-86px)] flex justify-start items-center flex-col gap-3'>
      <img src="/assets/images/signupSuccess.png" alt="" width={250}/>
      <p className='text-[#0B5D51] text-[1.7rem] font-bold'>Signed up successfully</p>
      <p className='text-sm'>you are being redirected to dashboard</p>
    </div>
  )
}

export default SignupSuccessfull
