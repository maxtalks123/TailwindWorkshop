import Image from "next/image";
import myImage from "@/../public/pandi.png";

export default function Home() {
  return (
    <div>
      <div className="flex p-8">
        <Image src={myImage} alt="a lovely Panda" />
      </div>
    </div>
  );
}
