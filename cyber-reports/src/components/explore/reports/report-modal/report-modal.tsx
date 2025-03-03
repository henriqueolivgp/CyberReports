import Image from "next/image";
import { ComponentProps } from "react";

interface ReportModalProps extends ComponentProps<"section"> {
  modalIsOpen: boolean;
  closeModal: () => void;
}

export const ReportModal = ({ modalIsOpen, closeModal }: ReportModalProps) => {
  return (
    <>
      <section
        id="crud-modal"
        aria-hidden={!modalIsOpen}
        className={`${
          modalIsOpen ? "fixed" : "hidden"
        }  overflow-y-hidden inset-0 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <section className="absolute inset-0 flex items-center justify-center">
          <section className="absolute bg-black/60 z-10 h-screen w-full"></section>
          <section className="relative z-30 overflow-y-hidden custom-scrollbar bg-white rounded-lg shadow dark:bg-gray-700 max-w-md max-h-full">
            <section className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                View Report
              </h3>
              <button
                type="button"
                onClick={closeModal}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </section>
            <form className="">
              {/* Display Report Details */}

              <Image
                className=""
                src="/defaultImage.jpg"
                width={500}
                height={500}
                alt="ReportImage"
              />
              <section className="p-4 md:p-5 space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Titulo:
                  </span>{" "}
                  Eu nao faco ideia
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Date: 10/02/2000
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Topic: sei la
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Description: Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Doloribus consectetur culpa ipsa laborum,
                  beatae hic corporis! Magnam dolorum distinctio debitis
                  doloribus aperiam ratione error recusandae mollitia natus,
                  voluptatibus laudantium impedit?
                </p>
              </section>
            </form>
          </section>
        </section>
      </section>
    </>
  );
};
