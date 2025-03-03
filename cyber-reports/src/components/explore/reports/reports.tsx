"use client"
import Image from "next/image";
import { ReportModal } from "./report-modal/report-modal";
import { useState } from "react";

export const Reports = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {

    setModalIsOpen(true);
};

const closeModal = () => {
    setModalIsOpen(false);
};

  return (
    <>
      <section className=" flex flex-wrap">
        <section className=" xs:px-8">
          <section className="lg:max-w-80 md:max-w-56 xs:max-w-64 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image
              src="/defaultImage.jpg"
              width={500}
              height={500}
              className="rounded-t-lg"
              alt="ReportImage"
            />

            <section className="p-5">
              <h5 className="truncate mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Report test
              </h5>

              <p className="mb-3 font-normal truncate text-gray-700 dark:text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus vitae odit maiores ipsa tempora, illo delectus
                eveniet soluta necessitatibus quia voluptatum quod quo in
                deserunt nesciunt! Obcaecati laudantium aliquid dicta.
              </p>
              <a
                href="#"
                onClick={() => openModal()}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-bluelite rounded-lg hover:bg-bluelite focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </section>
          </section>
        </section>
      </section>

      <ReportModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </>
  );
};
