// Headerのみページ
import { Header } from "../atoms/layout/Header";

export const HeaderOnly = (props) => {
  // コンテンツはpropsで渡す
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
