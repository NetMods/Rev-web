import Image from "next/image";

export default function Home() {
  return (
    <div className="fixed inset-0">
      <Image src="/1.gif" alt="something" fill unoptimized />
    </div>
  );
}
