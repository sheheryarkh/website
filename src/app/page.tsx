import Image from "next/image";
import pic from "@/app/pics/pic.jpg"
export default function Home() {
  return (
    <>
      <div id="main">
        <div id="h1">
          <h1>Hello there, this is a project given by sir ameen alam to me in which i have to create a website with 3 pages to navigate on and add styles to the content here.</h1>
        </div>
        <div id="img">
          <Image alt="pic" src={pic}></Image>
        </div>
      </div>
    </>
  );
}
