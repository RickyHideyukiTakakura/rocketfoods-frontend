import * as S from "./styles";

export function Button({ icon: Icon, title, ...rest }) {
  return (
    <S.Button type="button" {...rest}>
      {Icon && <Icon size={24} />}
      {title}
    </S.Button>
  );
}
