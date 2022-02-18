import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import moment from "moment";

var currentDate = new Date();
const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

const Pricing1 = {
  redirectUrl: `${baseUrl}/redirect`,
  backUrl: `${baseUrl}/back`,
  serviceCode: 3854,
  price: 3,
  serviceDescription: "Basic Plan Subscription on Cinetie",
  serviceDate:
    currentDate.getFullYear() +
    "/" +
    (currentDate.getMonth() + 1) +
    "/" +
    currentDate.getDate() +
    " " +
    currentDate.getHours() +
    ":" +
    moment(currentDate).format("mm"),
};
const Pricing2 = {
  redirectUrl: `${baseUrl}/redirect`,
  backUrl: `${baseUrl}/back`,
  serviceCode: 5525,
  price: 5,
  serviceDescription: "Basic Plan Subscription on Cinetie",
  serviceDate:
    currentDate.getFullYear() +
    "/" +
    (currentDate.getMonth() + 1) +
    "/" +
    currentDate.getDate() +
    " " +
    currentDate.getHours() +
    ":" +
    moment(currentDate).format("mm"),
};

export default function Home() {
  const [loading, setLoading] = useState({
    pricing1: false,
    pricing2: false,
  });
  const router = useRouter();
  const handleClick = async (e, priceType) => {
    e.preventDefault();
    if (priceType === "pricing1") {
      setLoading({
        pricing1: true,
      });
      const data = await axios.post("/api/payment", Pricing1);
      if (data.data.data.API3G.ResultExplanation[0] === "Transaction created") {
        router.push(
          `https://secure.3gdirectpay.com/payv2.php?ID=${data.data.data.API3G.TransToken[0]}`
        );
      }
    } else if (priceType === "pricing2") {
      setLoading({
        pricing2: true,
      });
      const data = await axios.post("/api/payment", Pricing2);
      if (data.data.data.API3G.ResultExplanation[0] === "Transaction created") {
        router.push(
          `https://secure.3gdirectpay.com/payv2.php?ID=${data.data.data.API3G.TransToken[0]}`
        );
      }
    }
  };

  return (
    <div>
      <div className="">
        <div className="flex h-full pt-[150px] flex-col items-center justify-center">
          <div className="w-[60vw] flex flex-col space-y-4">
            <div>
              <div className="text-[21px] font-bold text-gray-800">
                Choose the plan that’s right for you{" "}
              </div>
              <div className="text-[15px] text-gray-600">
                Downgrade or upgrade at any time
              </div>
            </div>
            <div className="flex flex-row space-x-6">
              <div className="w-[350px] rounded-md border border-1 border-gray-400 h-[450px] bg-gray-100 flex flex-col justify-between">
                <div>
                  <div className="flex justify-center pb-4">
                    <div className="flex flex-col pt-9">
                      <div className="text-gray-400 font-bold">PROMO</div>
                      <div className="flex flex-row items-end">
                        <div className="text-[30px] font-bold">3 USD</div>
                        <div className="text-[15px] pb-2">/ Month</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">3854-Test Product</div>
                </div>
                <div className="flex justify-center mx-9 py-5">
                  <button
                    disabled={loading.pricing1}
                    onClick={(e) => handleClick(e, "pricing1")}
                    className="bg-[#e50914] h-[50px] w-full flex items-center justify-center rounded-sm text-white font-bold text-[16px]"
                  >
                    {!loading.pricing1 ? (
                      "Continue"
                    ) : (
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="w-[350px] rounded-md border border-1 border-gray-400 h-[450px] bg-gray-100 flex flex-col justify-between">
                <div>
                  <div className="flex justify-center pb-4">
                    <div className="flex flex-col pt-9">
                      <div className="text-gray-400 font-bold">STANDARD</div>
                      <div className="flex flex-row items-end">
                        <div className="text-[30px] font-bold">5 USD</div>
                        <div className="text-[15px] pb-2">/ Month</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">5525-Test Service</div>
                </div>
                <div className="flex justify-center mx-9 py-5">
                  <button
                    disabled={loading.pricing2}
                    onClick={(e) => handleClick(e, "pricing2")}
                    className="bg-[#e50914]  h-[50px] w-full flex items-center w-full flex justify-center rounded-sm text-white font-bold text-[16px]"
                  >
                    {!loading.pricing2 ? (
                      "Continue"
                    ) : (
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
