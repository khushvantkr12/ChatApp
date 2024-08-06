import { GoogleOAuthProvider } from "@react-oauth/google";
import Loader from './components/Loader/Loader'
import { Suspense } from "react";
// components
import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";

function App() {
  const clientId =
    "118525175095-95mar4m84lso361117ooofugjherou2u.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
      <Suspense fallback={<Loader />}>
      <Messenger />
      </Suspense>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
