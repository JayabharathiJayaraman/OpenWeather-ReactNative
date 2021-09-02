import React, { useContext } from 'react';
import { Appbar, Title } from 'react-native-paper';
import { Context } from '../context/Context';

const Header = () => {
  const value = useContext(Context);
  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: "rgb(66, 122, 141)",
        }
      }}
      style={{ flexDirection: "row", justifyContent: "center" }}
    >
      <Title style={{ color: "white" }}>
        {value}
      </Title>
    </Appbar.Header>
  )
}
export default Header;