import React from "react";
import MainCard from "../card/MainCard";
import sdata from "../card/CardData";

// console.log(sdata[1].crdTitle);

// function ncard(val) {
//   return (
//     <div style={{ display: "flex", justifyContent: "space-around" }}>
//       <MainCard
//         crdImg={val.crdImg}
//         crdTitle={val.crdTitle}
//         crdSubtitle={val.crdSubtitle}
//       />
//     </div>
//   );
// }

function Home() {
  return (
    <div>
      <h3>NetFlix</h3>
      {sdata.map((val) => {
        return (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <MainCard
              crdImg={val.crdImg}
              crdTitle={val.crdTitle}
              crdSubtitle={val.crdSubtitle}
            />
          </div>
          );
      })}
    </div>
  );
}

export default Home;
