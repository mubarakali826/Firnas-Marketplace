import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { RiSendPlane2Fill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer class="w-full  bottom-0  bg-[#0B5D51] ">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  ">
        <div class="flex justify-around flex-col py-14 gap-14 lg:gap-20 min-[1124px]:flex-row">
          <div class="flex flex-col items-center sm:items-start min-[530px]:flex-row max-[1124px]:w-full max-[1124px]:justify-between gap-2 xl:gap-24 max-[1124px]:max-w-2xl max-[1124px]:mx-auto">
            <div class="block w-[242px] h-[194px]  ">
              <h4 class=" text-white text-[26px] font-medium mb-7 text-center lg:text-left">
                LOGO
              </h4>
              <p class=" font-light text-sm text-white  lg:mb-8 md:text-lg lg:text-xl">
                Lorem ipsum dolor sit amet,consectetur adipisicing elit. Quis
                non, fugit totam vel laboriosam vitae.
              </p>
              <div class="flex space-x-4 text-white">
                <FaFacebook class="text-[24px]" />
                <FaTwitter class="text-[24px]" />
                <FaGoogle class="text-[24px]" />
                <FaTwitch class="text-[24px]" />
              </div>
            </div>
            <div class="block w-[106px] h-[186px]">
              <h4 class="text-lg text-white font-medium mb-7 text-center lg:text-left">
                My Account
              </h4>
              <ul class="grid gap-6 text-center lg:text-left">
                <li>
                  <a href="javascript:;" class="text-white hover:text-gray-900">
                    Authors{" "}
                  </a>
                </li>
                <li>
                  <a href="javascript:;" class="text-white hover:text-gray-900">
                    Collection
                  </a>
                </li>
                <li>
                  <a href="javascript:;" class="text-white hover:text-gray-900">
                    Author Profile
                  </a>
                </li>
                <li>
                  <a href="javascript:;" class="text-white hover:text-gray-900">
                    Create Collection{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div class="block">
              <h4 class="text-lg text-white font-medium mb-7 text-center lg:text-left">
                Resources
              </h4>
              <ul class="grid gap-6 text-center lg:text-left">
                <li>
                  <a href="javascript:;" class="text-white hover:text-gray-900">
                    Help & Support{" "}
                  </a>
                </li>
                <li>
                  <a href="javascript:;" class="text-white hover:text-gray-900">
                    Live Auctions{" "}
                  </a>
                </li>
                <li>
                  <a href="javascript:;" class="text-white hover:text-gray-900">
                    Item Details{" "}
                  </a>
                </li>
                <li>
                  <a href="javascript:;" class="text-white hover:text-gray-900">
                    Activity{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div class="block">
              <h4 class="text-lg text-white font-medium mb-7 text-center lg:text-left">
                Communties{" "}
              </h4>
              <ul class="grid gap-6 text-center lg:text-left">
                <li>
                  <a href="javascript:;" class="text-white hover:text-gray-900">
                    About Us{" "}
                  </a>
                </li>
                <li>
                  <a href="javascript:;" class="text-white hover:text-gray-900">
                    Contact Us{" "}
                  </a>
                </li>
                <li>
                  <a href="javascript:;" class="text-white hover:text-gray-900">
                    Our Blog
                  </a>
                </li>
                <li>
                  <a href="javascript:;" class="text-white hover:text-gray-900">
                    Discover{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div class="block  xl:max-w-lg">
              <p class="text-lg text-white mb-12 text-center min-[1124px]:text-left">
                Subscribe Us{" "}
              </p>
              <div class="relative lg:flex-row gap-3 flex-col flex items-center justify-between max-[1124px]:max-w-2xl max-[1124px]:mx-auto ">
              <div class="flex items-center justify-center p-4">
              <div class="flex w-full max-w-md justify-center">
  <input 
    type="text" 
    class="w-full p-2 border border-white border-r-0 bg-transparent text-white placeholder-white rounded-l-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500" 
    placeholder="Info@yourgmail.com" 
  />
  <button class="bg-blue-500 text-white px-4 py-2 rounded-r-[10px] hover:bg-blue-600">
    <RiSendPlane2Fill class="w-[24px] h-[24px]" />
  </button>
</div>

</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
