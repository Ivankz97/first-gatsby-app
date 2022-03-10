import React from "react"
import UserState from "./src/context/User/UserState"



export const wrapRootElement = ({ element }) => (
  <UserState>{element}</UserState>
)