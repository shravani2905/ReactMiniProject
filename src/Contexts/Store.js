import { useState } from "react";
import { UserContext } from "./UserContext"; 
function Store({ children }) {
  const [user, setUser] = useState('');

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
}

export default Store;