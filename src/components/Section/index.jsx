import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import * as S from "./styles";

export function Section({ title, children }) {
  const { windowWidth, screenResponsiveWidth } = useWindowWidth();
  const contentRef = useRef(null);

  const scrollLeft = () => {
    if (contentRef.current) {
      contentRef.current.scrollLeft -= 200;
    }
  };

  const scrollRight = () => {
    if (contentRef.current) {
      contentRef.current.scrollLeft += 200;
    }
  };

  return (
    <S.Section>
      <h2>{title}</h2>

      {windowWidth > screenResponsiveWidth ? (
        <button onClick={scrollLeft}>
          <IoIosArrowBack />
        </button>
      ) : null}
      {windowWidth > screenResponsiveWidth ? (
        <button onClick={scrollRight}>
          <IoIosArrowForward />
        </button>
      ) : null}
      <S.Content ref={contentRef}>{children}</S.Content>
    </S.Section>
  );
}
