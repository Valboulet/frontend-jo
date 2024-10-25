/**
 * LogOutButton component that triggers user logout, clears authentication cookies,
 * and redirects to the homepage.
 * - Initiates logout sequence on click.
 * - Clears cookies and uses Next.js router to navigate to the home page.
 */

'use client'

import { useRouter } from "next/navigation"
import { resetAuthCookies } from "@/app/lib/actions"

const LogOutButton: React.FC = () => {
    const router = useRouter();

    const submitLogout = async () => {
        resetAuthCookies();

        router.push('/')
    }

    return (
        <div
            className="text-sm font-medium text-gray-700 hover:text-gray-800 cursor-pointer"
            onClick={submitLogout}
        >
            Se déconnecter
        </div>
    )
}

export default LogOutButton;