'use server';

import { cookies } from 'next/headers';

// const API_HOST = process.env.NEXT_PUBLIC_API_HOST; // Récupération de la variable d'environnement

// export async function handleRefresh() {
//     console.log('handleRefresh');

//     const refreshToken = await getRefreshToken();

//     const token = await fetch(`${API_HOST}/api/auth/token/refresh/`, { // Utilisation de l'API_HOST ici
//         method: 'POST',
//         body: JSON.stringify({
//             refresh: refreshToken
//         }),
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         }
//     })
//         .then(response => response.json())
//         .then((json) => {
//             console.log('Response - Refresh:', json);

//             if (json.access) {
//                 cookies().set('session_access_token', json.access, {
//                     httpOnly: true,
//                     secure: false, // En production, tu devrais probablement le mettre sur `true`
//                     maxAge: 60 * 60, // 60 minutes
//                     path: '/'
//                 });

//                 return json.access;
//             } else {
//                 resetAuthCookies();
//             }
//         })
//         .catch((error) => {
//             console.log('error', error);
//             resetAuthCookies();
//         });

//     return token;
// }

/**
 * Handles user login by setting authentication cookies.
 * 
 * @param userId - The ID of the user logging in.
 * @param accessToken - The access token received from the server.
 * @param refreshToken - The refresh token received from the server.
 */

export async function handleLogin(userId: string, accessToken: string, refreshToken: string) {
    cookies().set('session_userid', userId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // One week
        path: '/'
    });

    cookies().set('session_access_token', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60, // 60 minutes
        path: '/'
    });

    cookies().set('session_refresh_token', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // One week
        path: '/'
    });
}

/**
 * Resets authentication cookies by clearing their values.
 */

export async function resetAuthCookies() {
    cookies().set('session_userid', '');
    cookies().set('session_access_token', '');
    cookies().set('session_refresh_token', '');
}


/**
 * Retrieves the user ID from cookies.
 * 
 * @returns The user ID if it exists, otherwise null.
 */

export async function getUserId() {
    const userId = await cookies().get('session_userid')?.value;
    return userId ? userId : null;
}

// export async function getAccessToken() {
//     let accessToken = cookies().get('session_access_token')?.value;

//     if (!accessToken) {
//         accessToken = await handleRefresh();
//     }

//     return accessToken;
// }

// export async function getRefreshToken() {
//     let refreshToken = cookies().get('session_refresh_token')?.value;

//     return refreshToken;
// }
