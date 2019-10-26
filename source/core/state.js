// @flow

import React, { createContext, useContext } from 'react'

export const StateContext = createContext()

export const useStateValue = () => useContext(StateContext)