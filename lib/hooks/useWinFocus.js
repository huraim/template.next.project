import { useEffect, useState } from "react";

/** 브라우저 탭 포커싱 여부 커스텀 Hook */
export function useWinFocus() {
  const [isFocus, setIsFocus] = useState(true);
  const handleFocus = () => setIsFocus(true);
  const handleBlur = () => setIsFocus(false);

  useEffect(() => {
    window.addEventListener("focus", handleFocus);
    window.addEventListener("blur", handleBlur);
    return () => {
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("blur", handleBlur);
    };
  }, []);

  return isFocus;
}
