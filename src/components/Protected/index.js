import { useRouter } from 'next/router';
import React from 'react'
import { useSelector } from 'react-redux'
function ProtectedRoute ({MyComponent}) {
    const checkUser = useSelector(state => (state.user.loginUser))
    const router = useRouter();

    if(!checkUser || Object.keys(checkUser).length === 0){
        router.push('/login')
    }else{
    
    return (
    <>{<MyComponent />}</>
  )}
}

export default ProtectedRoute