
"use client";
import { ImgBack } from "@/components/ImgBack";
import Link from "next/link";
// import loading from "@/app/loading";
// import Link from "next/link";
// import { toast } from "react-toastify";
// import { FormEvent, useRef, useState } from "react";

export default function SigIn() {
  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   const emailRef = useRef<HTMLInputElement>(null);
  //   const passwordRef = useRef<HTMLInputElement>(null);
  //   const confirmPasswordRef = useRef<HTMLInputElement>(null);
  //   // eslint-disable-next-line react-hooks/rules-of-hooks
  //   const [loading, setLoading] = useState<boolean>(false);

  //   e.preventDefault();
  //   if (
  //     !passwordRef.current?.value ||
  //     !emailRef.current?.value ||
  //     !confirmPasswordRef.current?.value
  //   ) {
  //     toast.error("Please fill all the fields");
  //     //toast.error(errorMsg);
  //     return;
  //   }
  //   if (passwordRef.current!.value !== confirmPasswordRef.current!.value) {
  //     toast.error("Passwords don't match");
  //     //toast.error(errorMsg);
  //     return;
  //   }
  //   try {
  //     setLoading(true);
  //     // await signUp(emailRef.current!.value, passwordRef.current!.value);
  //     toast.success("Registration Successful. Check your email to confirm your account");
  //     //toast.success(msg);
  //   } catch (err) {
  //     toast.error("Error in Creating Account");
  //     //toast.error(errorMsg);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <>
      <div className="w-full h-screen">
      <ImgBack />
        <div className="absolute flex w-full h-screen justify-center items-center">
          <div className=" xl:w-[584px;] xl:h-[661px]  flex justify-center max-w-xl bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" action="#">
              <h1 className="text-xl text-center font-bold font-Epilogue text-gray-900 dark:text-white">
                Login with your account
              </h1>
              <div className="flex flex-col items-center">
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-80 text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Create your account
                </button>
              </div>
              <div className="text-sm text-center font-medium text-gray-500 dark:text-gray-300">
                Already have an account?
                <Link
                  href="/signin"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  <span className="text-darkAqua"> Login</span>
                </Link>
              </div>
              <div>
                <div className="flex justify-center space-x-10 columns-2 w-full">
                  <hr className=" w-36 h-[2px] my-4 bg-gray-300 border-0 dark:bg-gray-700" />
                  <a href="#">Or sign in with</a>
                  <hr className=" w-36 h-[2px] my-4 bg-gray-300 border-0 dark:bg-gray-700" />
                </div>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
