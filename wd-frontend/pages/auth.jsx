import { Auth } from '@/components'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const AuthPage = () => {
  const isAuthorized = useSelector(state => state.saved.user.isAuthorized)
  const router = useRouter()

  useEffect(() => {
    isAuthorized && router.replace('/dashboard')
  }, [isAuthorized])

  return <Auth />
}

export default AuthPage
