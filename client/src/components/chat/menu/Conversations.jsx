import { useContext, useEffect, useState, userContext } from "react";

import { getUsers } from "../../../service/api";
import { AccountContext } from "../../../context/AccountProvider";
import { Box, Divider, styled } from "@mui/material";
import AppLoader from '../../Loader/AppLoader'
// components
import Conversation from "./Conversation";

const Component = styled(Box)`
    height: 81vh;
    overflow: overlay;
`;

const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background: #e9edef;
    opacity: 0.6;
`;

const Conversations = ({text}) => {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(false)
  const { account, socket, setActiveUsers} = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      let response = await getUsers();
      const filteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
      setUsers(filteredData);
      setLoader(false);
    };
    fetchData();
  }, [text]);

  useEffect(()=>{
    socket.current.emit('addUsers', account);
    socket.current.on('getUsers', users => {
      setActiveUsers(users);
    })
  }, [account]);

  return (
    <Component>
    {loader && <AppLoader />}
      
        {users.map((user) => (
            user.sub !== account.sub &&
            <>
                <Conversation user={user} />
                <StyledDivider/>
            </>
            
        ))
      }
    </Component>
  );
};

export default Conversations;
