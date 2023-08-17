import * as S from "./styles";

export function Input({ icon: Icon, ...rest }) {
  return (
    <S.Container>
      {Icon && <Icon size={24} />}
      <input {...rest} />
    </S.Container>
  );
}
