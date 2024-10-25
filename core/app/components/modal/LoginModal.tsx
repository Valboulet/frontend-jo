/**
 * LoginModal component that provides a user login form within a modal overlay.
 * - Uses `Modal` for display.
 * - Integrates with login and signup modals.
 * - Captures email and password, submits login request, and handles errors.
 */

'use client'

import Modal from "./Modal";
import useLoginModal from "@/app/hooks/useLoginModal";
import useSignUpModal from "@/app/hooks/useSignUpModal";
import { useRouter } from "next/navigation";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/actions";
import { useState } from "react";

const LoginModal = () => {
    const loginModal = useLoginModal()
    const signUpModal = useSignUpModal()

    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState<string[]>([]);

    const submitLogin = async () => {
        const formData = {
            email: email,
            password: password
        }

        const response = await apiService.post('/api/auth/login/', JSON.stringify(formData))

        if (response.access) {
            handleLogin(response.user.pk, response.access, response.refesh)
            console.log('RESPONSE')

            loginModal.close();

            router.push('/')

        } else {
            setErrors(response.non_field_errors);
        }  
    }

    const content = (
        <>
            <form
                action={submitLogin} 
                className="space-y-6 px-10 py-3">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        E-mail
                    </label>
                    <div className="mt-2">
                        <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6"
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Mot de passe
                        </label>
                        <div className="text-sm">
                            <a href="#" className="font-semibold text-cyan-700 hover:text-cyan-500">
                                Mot de passe oublié?
                            </a>
                        </div>
                    </div>
                    <div className="mt-2">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                
                {errors.map((error, index) => {
                    return (
                        <div 
                            key={`error_${index}`}
                            className="text-center text-red-500 font-semibold">
                            {error}
                        </div>
                    )
                })}

                <div>
                    <button
                        // onClick={submitLogin}
                        className="mt-2 flex w-full justify-center rounded-md bg-cyan-700 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
                    >
                        SE CONNECTER
                    </button>
                </div>
            </form>

            <div className="mt-10 text-center text-sm text-gray-500">
                Vous n'avez pas de compte?{' '}
                <div className="font-semibold leading-6 text-cyan-700 hover:text-cyan-500 cursor-pointer"
                  onClick={()=> {
                    loginModal.close
                    signUpModal.open()
                    }}
                >
                Créer un compte
                </div>
          </div>


        </>

    )

    return (
        <Modal 
            isOpen = {loginModal.isOpen}
            close = {loginModal.close}
            label = "Connexion"
            content = {content}
        />
    )
}

export default LoginModal;