import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    <Router />
    // <BrowserRouter>
    //   <DefaultLayout>
    //     <div className="App">
    //       <PrimaryButton>ボタン</PrimaryButton>
    //       <br />
    //       <SecondaryButton>ボタン</SecondaryButton>
    //       <br />
    //       <br />
    //       <SearchInput />
    //       <br />
    //       <UserCard user={user} />
    //     </div>
    //   </DefaultLayout>
    // </BrowserRouter>
  );
}
