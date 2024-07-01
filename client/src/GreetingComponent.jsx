import React, { useState, useEffect } from "react";

const GreetingComponent = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="Greeting w-full">
      {showText ? (
        <>
          <p className="card-Greeting font-serif text-2xl text-center">
            Write Us!!!
          </p>
          <p className="card-Palleha font-serif text-xl text-center">
            Feedback helps us work better to give you and your pet the best
            service possible!
          </p>
        </>
      ) : (
        <p className="font-serif text-2xl text-center">Loading...</p>
      )}
    </div>
  );
};

export default GreetingComponent;
