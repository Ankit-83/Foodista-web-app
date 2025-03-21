import React, { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PacmanLoader color={"#22C55E"} />
      ) : (
        <div>
          <h2 className="text-3xl font-bold mb-4 text-center">Order Successful!</h2>
          <p>Your order has been successfully places.</p>
        </div>
      )}
    </div>
  );
};

export default Success;
