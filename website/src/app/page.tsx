import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto w-fit space-y-10 py-10">
      <Image src="/colors.svg" alt="colors" width={962} height={541} />
      <Image src="/fonts.svg" alt="fonts" width={962} height={541} />
    </div>
  );
}
