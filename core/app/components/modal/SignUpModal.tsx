/**
 * SignUpModal component rendering a user registration form within a modal.
 * - Utilizes `Modal` for structure.
 * - Captures user details (name, email, password), submits registration request.
 * - Displays errors if registration fails, directs to home on success.
 */

'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "./Modal";
import useSignUpModal from "@/app/hooks/useSignUpModal";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/actions";

const SignUpModal = () => {
    
    // Variables
    const router = useRouter();
    const signUpModal = useSignUpModal();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [errors, setErrors] = useState<string[]>([]);

    // Submit function
    const submitSignup = async () => {
        const formData = {
            first_name: firstname,
            last_name: lastname,
            email: email,
            password1: password1,
            password2: password2,
        }
        const response = await apiService.post('/api/auth/register/', JSON.stringify(formData))

        if (response.access) {
            handleLogin(response.user.pk, response.access, response.refesh)

            signUpModal.close();

            router.push('/')
        } else {
            const tmpErrors: string[] = Object.values(response).map((error:any) => {
                return error
            })
            setErrors(tmpErrors)
        }
    }

    const content = (
        <>
            <form
                action={submitSignup} 
                className="space-y-6 px-10 py-3">
                
                <div>
                    <label htmlFor="firstname" className="block text-sm font-medium leading-6 text-gray-900">
                        Prénom
                    </label>
                    <div className="mt-2">
                        <input
                        id="firstname"
                        name="firstname"
                        type="text"
                        required
                        autoComplete="firstname"
                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6"
                        onChange={(e) => setFirstname(e.target.value)}
                        />
                    </div>
                </div>
                                
                <div>
                    <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">
                        Nom
                    </label>
                    <div className="mt-2">
                        <input
                        id="lastname"
                        name="lastname"
                        type="text"
                        required
                        autoComplete="lastname"
                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6"
                        onChange={(e) => setLastname(e.target.value)}
                        />
                    </div>
                </div>

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
                    </div>
                    <div className="mt-2">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6"
                            onChange={(e) => setPassword1(e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password2" className="block text-sm font-medium leading-6 text-gray-900">
                        Répéter mot de passe
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                            id="password2"
                            name="password2"
                            type="password"
                            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6"
                            onChange={(e) => setPassword2(e.target.value)}
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
                        // onClick={submitSignup}
                        className="mt-2 flex w-full justify-center rounded-md bg-cyan-700 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
                    >
                        CRÉER UN COMPTE
                    </button>
                </div>
            </form>
        </>

    )

    return (
        <Modal 
            isOpen = {signUpModal.isOpen}
            close = {signUpModal.close}
            label = "Créer un compte"
            content = {content}
        />
    )
}

export default SignUpModal;