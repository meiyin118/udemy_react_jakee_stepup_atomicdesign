// userの情報を扱うProvider
// createContextでpropsのバケツリレーを防ぐ
import React, { createContext, useState } from "react";

// 他の画面から参照できるようにexportする
export const UserContext = createContext({});
export const UserProvider = (props) => {
  // グローバルで参照できる値はvalueというpropsに渡すことで、グローバルなstateを提供できる
  const { children } = props;

  // stateを定義
  const [userInfo, setUserInfo] = useState(null);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
