import { Register } from "@/components";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";

const RegisterPage = () => {
    const isAuthorized = useSelector(state => state.saved.user.isAuthorized)
    const router = useRouter()

    useEffect(() => {
        isAuthorized && router.replace('/dashboard')
    }, [isAuthorized])

    return <Register />
}

export default RegisterPage
