import * as S from "./styles";

export function Button({ title, ...rest }) {
  return (
    <S.Button type="button" {...rest}>
      {title}
    </S.Button>
  );
}
