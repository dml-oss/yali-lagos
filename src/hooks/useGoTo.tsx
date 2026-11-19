"use client";

import { useRouter } from 'next/navigation'

const useGoTo = () => {

    const router = useRouter()

    const goTo = (url: string) => {
        if (url) {
            router.push(url)
        }
    }

    return { goTo, router, location: '' }

}

export default useGoTo