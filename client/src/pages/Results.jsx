import React, { useState, useEffect } from "react";

import { Loader, VoteBox } from "../components";

const Results = () => {
  const [loading, setLoading] = useState(false);
  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Results</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
          Drum Noises
        </p>
      </div>

      <div className="mt-16">{/* <VoteBox /> */}</div>

      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>// put things in here. maybe results on results page</>
        )}
      </div>
    </section>
  );
};

export default Results;
