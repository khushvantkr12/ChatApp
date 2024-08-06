import { useState,Suspense } from "react";

import { Box } from "@mui/material";
// components
import Header from "./Header";
import Search from "./Search";
import Conversations from "./Conversations";
import AppLoader from "../../Loader/AppLoader";

const Menu = () => {

  const [text, setText] = useState('');

  return (
    <Box>
      <Header />
      <Search setText = {setText}/>
      <Suspense fallback={<AppLoader />}>
      <Conversations text={text}/>
      </Suspense>
    </Box>
  );
};
export default Menu;
