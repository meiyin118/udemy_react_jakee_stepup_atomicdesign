// userの情報を扱うProvider

// createContextでpropsのバケツリレーを防ぐ
import React, { createContext } from "react";

// 他の画面から参照できるようにexportする
export const UserContext = createContext({});
export const UserProvider = (props) => {
  // グローバルで参照できる値はvalueというpropsに渡すことで、グローバルなstateを提供できる
  const { children } = props;
  const contextName = "hoge";
  return (
    <UserContext.Provider value={{ contextName }}>
      {children}
    </UserContext.Provider>
  );
};
