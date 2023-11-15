import Image from "next/image";

export default function Hero() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="flex flex-col items-center justify-between">
        <Image
          src="/images/logo.png"
          alt="hero"
          width={500}
          height={500}
          className="w-full md:w-1/2"
        />
        <h1 className="text-4xl text-gray-800 py-20">
          Your strategic partners in AI-powered business transformation.
        </h1>
      </div>
    </div>
  );
}
