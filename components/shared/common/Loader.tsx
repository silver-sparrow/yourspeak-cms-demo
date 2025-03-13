import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white/70 z-50">
      <Image
        src="/icons/loader.gif"
        alt="Loading..."
        className="w-96 h-96"
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default Loader;
