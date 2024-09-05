const Smartrfq = () => {
  return (
    <section class="bg-white ">
      <div class="grid  px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="/assets/images/Smartfq.jpg" alt="mockup" />
        </div>
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="relative max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-[#010F52]">
            <img src="/assets/images/smartfq1.png" alt="overlay" className="absolute bottom-[3rem] left-[-3rem] w-20"/>
            <img src="/assets/images/stars.png" alt="stars" className="absolute bottom-[0.4rem] right-[8rem] w-[10rem]" />
            Smart RFQ
          </h1>
          <p class="max-w-2xl mb-6 font-medium text-[#243A73] lg:mb-8 md:text-lg lg:text-xl ">
            Ready to think Smart about global procurement?.{" "}
          </p>

          <p class="max-w-2xl w-[35rem] mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            We are innovative thinkers in global outsourcing. Our Smart Request
            for Quotation (RFQ) integrates blockchain technology and artificial
            intelligence to bring your requirement from anywhere.
          </p>
          <a
            href="#"
            class="inline-flex shadow-xl bg-[#0B5D51] items-center justify-center px-10 py-3 mr-3 text-base font-medium text-center text-white rounded-md bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            SIGN UP
          </a>
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-[#010F52]  "
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Smartrfq;
