import React, { useRef, useEffect } from "react";

function CU() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} defaultValue="Uncontrolled Input" />;
}

export default CU;
