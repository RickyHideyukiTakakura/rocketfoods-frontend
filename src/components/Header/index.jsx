import { useWindowWidth } from "../../hooks/useWindowWidth";
import { HeaderDesktop } from "../HeaderDesktop";
import { HeaderMobile } from "../HeaderMobile";

export function Header() {
  const { windowWidth, screenResponsiveWidth } = useWindowWidth();

  return (
    <>
      {windowWidth <= screenResponsiveWidth ? (
        <HeaderMobile />
      ) : (
        <HeaderDesktop />
      )}
    </>
  );
}
