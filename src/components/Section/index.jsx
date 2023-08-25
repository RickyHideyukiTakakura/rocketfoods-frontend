import * as S from "./styles";

export function Section({ title, children }) {
  return (
    <S.Section>
      <h2>{title}</h2>
      <S.Content>{children}</S.Content>
    </S.Section>
  );
}
