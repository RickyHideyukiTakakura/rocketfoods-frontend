import { useWindowWidth } from "../../hooks/useWindowWidth";

export function LoginTitle({ title }) {
  const { windowWidth, screenResponsiveWidth } = useWindowWidth();

  return <>{windowWidth <= screenResponsiveWidth ? null : <h1>{title}</h1>}</>;
}
