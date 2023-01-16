import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { PageLoader } from './UI/Loader';

export const IsAuthenticated = ({ children }) => {

    const router = useRouter();
    const { data: session, status } = useSession();
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (session?.user && status === "authenticated" && session?.jwt) {
            setIsAuth(true)
        } else {
            router?.push("/auth/login");
            !session?.user && setIsAuth(false);
        }
    }, [session, router])

    return isAuth && children;

};

export const UnAuthenticated = ({ children }) => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (session?.user && status === "authenticated" && session?.jwt) {
            router?.push("/");
            setIsAuth(false)
        } else {
            !session?.user && setIsAuth(true)
        }
    }, [session, router])


    return !isAuth ? <PageLoader /> : children;

};