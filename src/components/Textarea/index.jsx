import * as S from "./styles";

export function Textarea({ value, ...rest }) {
  return <S.Textarea {...rest}>{value}</S.Textarea>;
}
