import { Router } from "./router/Router";
import "./styles.css";
import { UserProvider } from "./providers/userProvider";

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
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
