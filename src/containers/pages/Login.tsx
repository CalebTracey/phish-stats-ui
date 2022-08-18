/* eslint-disable react/prop-types */
import React, { Dispatch, SetStateAction, useState } from 'react'
import { useForm, Resolver } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../../components/forms/LoginForm'
import AuthService from '../../services/auth-service'
// import LoginForm from '../components/login/LoginForm'
// import HomeButton from '../components/buttons/HomeButton'
// import RegisterButton from '../components/register/RegisterButton'
// import { login } from '../redux/slices/auth'
// import { newError } from '../redux/slices/message'
// import { useAppDispatch, useAppSelector } from '../redux/hooks'

type TFormValues = { username: string; password: string }

type Props = {
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>
}
function Login(props: Props): JSX.Element {
    const { setIsLoggedIn } = props
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    // const message = useAppSelector((state) => state.auth.error)
    // const dispatch = useAppDispatch()

    const resolver: Resolver<TFormValues> = async (values) => {
        return {
            values: values.username && values.password ? values : {},
            errors:
                !values.username && values.password
                    ? {
                          username: {
                              type: 'required',
                              message: 'Username is required.',
                          },
                          password: {
                              type: 'required',
                              message: 'Password is required.',
                          },
                      }
                    : {},
        }
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TFormValues>({
        resolver,
        mode: 'onSubmit',
    })

    const onSubmit = (data: TFormValues): void => {
        setIsLoading(true)
        AuthService.loginService(data)
            .then(() => {
                setIsLoading(false)
                setIsLoggedIn(true)
                navigate('../addShows', { replace: true })
            })
            .catch(() => {
                setIsLoading(false)
                setIsLoggedIn(false)
            })
    }

    return (
        <>
            {/* <div className="button-wrapper">
                <HomeButton />
                <RegisterButton />
            </div> */}
            <LoginForm
                isLoading={isLoading}
                message=""
                onSubmit={onSubmit}
                errors={errors}
                register={register}
                handleSubmit={handleSubmit}
            />
        </>
    )
}

export default Login
