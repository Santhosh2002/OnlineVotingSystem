import React from "react";
const ReqDataContext = React.createContext();

const ReqDataContextProvider = (props) => {
  console.log(props);
  return (
    <ReqDataContext.Provider value={props.data}>
      {props.children}
    </ReqDataContext.Provider>
  );
};
const useGlobalContext = () => {
  return React.useContext(ReqDataContext);
};
export { ReqDataContext, ReqDataContextProvider, useGlobalContext };
