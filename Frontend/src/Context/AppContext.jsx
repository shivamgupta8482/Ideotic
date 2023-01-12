import { useEffect } from "react";
import { createContext, useState } from "react";

export const MakeContext = createContext();

export function Appcontext({ children }) {
  const [isAuth, setIsAuth] = useState(false);
useEffect(()=>{
    let token1 = (localStorage.getItem("token"))
  if(token1) setIsAuth(true);
  
},[])

  const handletoggle = () => {
    setIsAuth(!isAuth);
    localStorage.setItem("token","");
    
  };
  console.log(isAuth);
  let value = { isAuth, handletoggle };
  return <MakeContext.Provider value={value}>{children}</MakeContext.Provider>;
}
