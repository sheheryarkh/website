/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import picture from "@/app/pics/image.avif"
export default function Home() {
  return (
    <>
      <div id="main">
        <div id="h1">
          <h1>Proper documentation is an essential part of any organization's workflow, as it ensures that key information is clearly communicated, easily accessible, and preserved for future reference. Whether it's technical documentation, project reports, or internal policies, having well-organized and up-to-date docs helps streamline operations and supports consistency across teams. It enables new team members to quickly get up to speed, provides a reliable source of truth for decision-making, and reduces the risk of errors or miscommunication. Effective documentation also plays a crucial role in knowledge sharing and accountability, empowering individuals to work more independently while ensuring that important processes are documented and available for all.</h1>
        </div>
        <hr />
        <div id="img">
          <Image id="docs" alt="pic" src={picture}></Image>
        </div>
      </div>
    </>
  );
}