import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
// import { HeaderOnly } from "./components/templates/HeaderOnly";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import "./styles.css";

// User Cardに渡す情報
const user = {
  image: "https://source.unsplash.com/HlI03bNHhBI",
  name: "はる",
  email: "example@examle.com",
  tel: "090-XXXX-XXXX",
};

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <div className="App">
          {/* <HeaderOnly>
          <p>hoge</p>
        </HeaderOnly> */}
          <PrimaryButton>ボタン</PrimaryButton>
          <br />
          <SecondaryButton>ボタン</SecondaryButton>
          <br />
          <br />
          <SearchInput />
          <br />
          <UserCard user={user} />
        </div>
      </DefaultLayout>
    </BrowserRouter>
  );
}
