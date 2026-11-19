
"use client";

import Button from "@/components/partials/buttons/Button";
import useGoTo from "@/hooks/useGoTo";

const NotFound = () => {
    const { goTo } = useGoTo();

    return (
        <div className="flex min-h-[60vh] w-full bg-white items-center justify-center px-6 py-20">
            <div className="flex w-full max-w-xl flex-col items-center text-center">
                <p className="text-sm font-semibold tracking-[0.2em] text-[#2aaae0] uppercase">
                    Error 404
                </p>

                <h1 className="mt-5 text-4xl font-bold tracking-tight text-[#171817] sm:text-5xl md:text-6xl">
                    Page not found
                </h1>

                <p className="mt-5 max-w-md text-base leading-7 text-stone-500 sm:text-lg">
                    The page you are looking for may have been moved, removed,
                    or is temporarily unavailable.
                </p>

                <div className="mt-8 flex w-full flex-col items-center gap-4 sm:w-auto">
                    <Button
                        type="secondary"
                        size="sm"
                        block={false}
                        loading={false}
                        className="form-button min-w-full font-intersemibold text-lg text-white sm:min-w-[180px]"
                        text={{
                            label: "Go Home",
                            size: 14,
                            weight: "bold",
                        }}
                        onClick={() => goTo("/")}
                    />
                </div>
            </div>
        </div>
    );
};

export default NotFound;
