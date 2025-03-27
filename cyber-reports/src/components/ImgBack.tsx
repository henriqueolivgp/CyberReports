import Image from "next/image";

export const ImgBack = () => {
  return (
    <>
      <Image

        fill
        src="/Image-283.jpg"
        alt="imagem de fundo"
        className=" absolute top-0 z-[-1] object-cover"
      />
    </>
  );
};

export default ImgBack;
