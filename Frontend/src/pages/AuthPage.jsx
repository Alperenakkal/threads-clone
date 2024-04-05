import React, { useState } from 'react'
import SignupCard from '../components/SignUpCard'
import LoginCard from '../components/LoginCard'
import { useRecoilValue } from 'recoil'
import authScreenAtom from '../atoms/authAtom'

const AuthPage = () => {
    const authScreenState = useRecoilValue(authScreenAtom);
    console.log(authScreenState);
  return (
    <div>
        {authScreenState ===  "login" ? <LoginCard/> :<SignupCard/>}
    </div>
  )
}

export default AuthPage