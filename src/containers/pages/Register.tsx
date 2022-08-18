import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import RegisterForm from '../../components/forms/RegisterForm'
import AuthService from '../../services/auth-service'
// import LoginButton from '../components/login/LoginButton'
// import HomeButton from '../components/buttons/HomeButton'
// import { userRegister } from '../redux/slices/auth'
// import { useAppDispatch, useAppSelector } from '../redux/hooks'

type TFormValues = {
    fullName: string
    username: string
    email: string
    password: string
    confirmPassword: string
    // acceptTerms: boolean
}

function Register(): JSX.Element {
    const [isLoading, setIsLoading] = useState(false)
    const [successful, setSuccessful] = useState(false)
    const navigate = useNavigate()

    const validationSchema = Yup.object().shape({
        fullName: Yup.string().required('Fullname is required'),
        username: Yup.string()
            .required('Username is required')
            .min(6, 'Username must be at least 6 characters')
            .max(20, 'Username must not exceed 20 characters'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(40, 'Password must not exceed 40 characters'),
        confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf(
                [Yup.ref('password'), null],
                'Confirm Password does not match'
            ),
    })

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<TFormValues>({
        resolver: yupResolver(validationSchema),
    })

    const onSubmit = (data: TFormValues): void => {
        setIsLoading(true)
        AuthService.registerService(data)
            .then(() => {
                setIsLoading(false)
                setSuccessful(true)
                navigate('../addShows', { replace: true })
            })
            .catch(() => {
                setIsLoading(false)
                setSuccessful(false)
            })
    }

    return (
        <RegisterForm
            isLoading={isLoading}
            successful={successful}
            message=""
            onSubmit={onSubmit}
            errors={errors}
            register={register}
            handleSubmit={handleSubmit}
            reset={reset}
        />
    )
}
export default Register
