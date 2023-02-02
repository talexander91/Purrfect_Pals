import { useState } from "react";
import DiscussionBoard from "../Discussion/DiscussionBoard";
import CatFetch from "../Fetch/catFetch";

function Home() {
  return (
    <div>
      {/* <CatCreate></CatCreate> */}
      <CatFetch></CatFetch>
      <DiscussionBoard></DiscussionBoard>
    </div>
  );
}

export default Home;
