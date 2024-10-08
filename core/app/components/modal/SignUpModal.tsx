'use client'

import Modal from "./Modal";
import useSignUpModal from "@/app/hooks/useSignUpModal";

const SignUpModal = () => {
    const signUpModal = useSignUpModal()

    const content = (
        <>
            <form action="#" method="POST" className="space-y-6 px-10 py-3">
                
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
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="date-of-birth" className="block text-sm font-medium leading-6 text-gray-900">
                        Date de naissance
                    </label>
                    <div className="mt-2">
                        <input
                        id="date-of-birth"
                        name="date-of-birth"
                        type="date"
                        required
                        autoComplete="date-of-birth"
                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                        Pays
                    </label>
                    <div className="mt-2">
                        <input
                        id="country"
                        name="country"
                        type="text"
                        required
                        autoComplete="country"
                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6"
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
                        required
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6"
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
                            required
                            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6"
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
                            required
                            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-700 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="text-center text-red-500 font-semibold">
                    Le message d'erreur
                </div>

                <div>
                    <button
                        type="submit"
                        onClick={() => {console.log('Compte créé!')}}
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