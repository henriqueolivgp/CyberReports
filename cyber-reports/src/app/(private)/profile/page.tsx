import Image from "next/image";

export default function Profile() {
  return (
    <>
      <section className="flex-wrap h-screen">
        <section className="flex flex-col ">
          <section className="banner bg-violet-100 rounded-t-lg h-48 w-full">
            <section className="Text-Button flex flex-col relative z-10 xl:flex-row">
              <section className="w-full absolute overflow-hidden h-48 rounded-t-lg xl:relative flex items-center content-center">
                <Image
                  className="w-screen h-full object-cover"
                  src="https://t4.ftcdn.net/jpg/05/52/98/77/360_F_552987749_4Y5SJa4KRL2UIzVrk5vznfbQtDeJZtqe.jpg"
                  fill
                  alt="banner"
                />
                <span className="absolute text-white text-5xl font-bold flex items-center justify-center w-full h-full">
                  User Banner
                </span>

                {/* <section>
                  <Image
                    className="w-screen h-full object-cover"
                    fill
                    src=""
                    alt="User Banner"
                  />
                </section> */}
              </section>
            </section>
          </section>

          <section className="w-full min-h-32 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
            <section className="flex justify-end px-4 pt-4"></section>
            <section className="flex items-center">
              <section className="flex w-full gap-4">
                <section className="relative">
                  <section className="w-24 h-24 object-cover">
                    <Image
                      className="w-24 h-24 mb-3 ml-4 rounded-full  shadow-2xl"
                      src="/defaultUser/user.png"
                      fill
                      alt="User Avatar"
                    />
                  </section>
                  <span className="absolute bottom-3 left-5 w-6 h-6 border-white dark:border-gray-800 rounded-full">
                    <Image src="/UserVerified.png" fill alt="userVerified" />
                  </span>
                </section>

                {/* <section className="relative">
                <Image
                className="w-24 h-24 mb-3 ml-4 rounded-full shadow-2xl"
                src="/defaultUser/user.png"
                fill
                alt="User Avatar"
                />
                <span className="absolute bottom- w-6 h-6 border-white dark:border-gray-800 rounded-full">
                <Image src="/UserVerified.png" fill alt="userVerified" />
                </span>
                </section> */}

                <section className="flex flex-col ml-4">
                  <h5 className="mb-1 text-3xl font-medium text-gray-900 dark:text-white">
                    User Name
                  </h5>
                  <p className=" text-sm">Date Joined :12/02/2000</p>
                  <p className=" text-sm">Las Login: 12/02/2000</p>
                </section>
                <section className="px-4"></section>
                <section className="flex flex-1 p-4">
                  <section className="text-sm text-gray-500 dark:text-gray-400">
                    <span>Total de Denúncias</span>
                    <br />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                      237
                    </h5>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
