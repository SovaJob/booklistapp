/* REACT */
import React, { useEffect, useState } from "react";

/* COMPONENTS */
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

/* CUSTOM COMPONENTS */
import MainStack from "./MainStack"

export default () => (
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
  );
