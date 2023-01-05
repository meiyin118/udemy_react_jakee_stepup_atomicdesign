// HeaderとFooterがあるページ
import { Header } from "../atoms/layout/Header";
import { Footer } from "../atoms/layout/Footer";

export const DefaultLayout = (props) => {
  // コンテンツはpropsで渡す
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
