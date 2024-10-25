'use client'

import { useRouter } from "next/navigation"
import { resetAuthCookies } from "@/app/lib/actions"

const MobileLogOutButton: React.FC = () => {
    const router = useRouter();

    const submitLogout = async () => {
        resetAuthCookies();

        router.push('/')
    }
    return (
    <div className="flow-root">
        <div 
            className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
            onClick={()=> {
            }}>
            Se déconnecter
        </div>
    </div>
)
}

export default MobileLogOutButton;