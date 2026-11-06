import { useEffect, useRef } from "react";
import fitty from "fitty";

export default function AutoFitText({ children }) {
  const textRef = useRef(null);

  useEffect(() => {
    const instance = fitty(textRef.current, {
      minSize: 10,
      maxSize: 18,
      multiLine: false,
    });

    document.fonts.ready.then(() => instance.fit());

    return () => instance.unsubscribe();
  }, []);

  return (
    <div style={{ width: "90%", textAlign: "center" }}>
      <span
        ref={textRef}
        style={{ whiteSpace: "nowrap", display: "inline-block" }}
      >
        {children}
      </span>
    </div>
  );
}
