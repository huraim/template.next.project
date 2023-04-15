import { useEffect, useState } from "react";

/** JS로 반응형 구분 위한 커스텀 Hook */
export default function useWinSize() {
  const [isWinSize, setIsWinSize] = useState({
    pc: false,
    tablet: false,
    mobile: false,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        if (window.innerWidth <= 991) {
          if (window.innerWidth <= 767) {
            //모바일
            setIsWinSize({
              pc: false,
              tablet: false,
              mobile: true,
            });
          } else {
            //태블릿
            setIsWinSize({
              pc: false,
              tablet: true,
              mobile: false,
            });
          }
        } else {
          //피씨
          setIsWinSize({
            pc: true,
            tablet: false,
            mobile: false,
          });
        }
      };

      //리사이즈시 실행
      window.addEventListener("resize", handleResize);

      //초기 실행
      handleResize();

      //클린업
      return () => window.removeEventListener("resize", handleResize);
    } else {
      return () =>
        window.removeEventListener("resize", () => {
          return null;
        });
    }
  }, []);

  return isWinSize;
}
