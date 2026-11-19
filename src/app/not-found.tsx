"use client";


import Button from "@/components/partials/buttons/Button"
import useGoTo from "@/hooks/useGoTo"


const NotFound = () => {

    const { goTo } = useGoTo()


    return (


        <div className="flex flex-col">
               
                <p className="text-lg md:text-base font-semibold text-neutral-400 dark:text-neutral-500">
                    404
                </p>
                
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-neutral-800 sm:text-5xl dark:text-neutral-100">
                    Page not found
                </h1>
                
                <p className="mt-4 text-lg md:text-base text-neutral-600 dark:text-neutral-400">
                    Sorry, we couldn’t find the page you’re looking for.
                </p>

                <Button
                    type="ghost"
                    semantic="blue"
                    size="lg"
                    block={false}
                    loading={false}
                    className="form-button md:min-w-[160px] min-w-full font-intersemibold text-lg text-white"
                    text={{
                        label: `Go Home`,
                        size: 14,
                        weight: 'bold'
                    }}
                    onClick={(e) => { goTo('/') }}
                />

         </div>

                )
}

export default NotFound