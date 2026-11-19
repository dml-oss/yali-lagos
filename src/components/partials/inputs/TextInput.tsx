'use client'
import React, { useId, useRef, useImperativeHandle, forwardRef, ForwardedRef, ReactNode, KeyboardEvent, ChangeEvent } from "react"
import useSize from "../../../hooks/useSize";
import { FontWeightType, PositionType, SizeType } from "@/utils/types.util";

interface ITextInput {
    type: 'text' | 'email' | 'url',
    readonly?: boolean,
    name?: string,
    id?: string
    defaultValue?: string,
    value?: string,
    size?: SizeType,
    className?: string,
    autoComplete?: boolean,
    placeholder?: string,
    showFocus?: boolean,
    isError?: boolean,
    icon?: {
        enable: boolean,
        position: PositionType
        child: ReactNode,
        onClick?(e: any): void
    },
    label?: {
        title: string,
        className?: string,
        required?: boolean,
        fontSize?: number,
        weight?: FontWeightType
    },
    onFocus?(e: any): void,
    onKeyUp?(e: KeyboardEvent<HTMLInputElement>): void
    onChange(e: ChangeEvent<HTMLInputElement>): void
}

const TextInput = forwardRef((props: ITextInput, ref: ForwardedRef<any>) => {

    const {
        id,
        name,
        defaultValue,
        type,
        placeholder,
        autoComplete,
        className,
        label,
        value,
        readonly,
        icon = {
            enable: false,
            position: 'right',
            child: <></>
        },
        isError = false,
        size = 'rg',
        showFocus = true,
        onChange,
        onKeyUp,
        onFocus
    } = props

    const ch = useSize({ size })
    const { pos } = useSize({ size, type: 'input-icon' })

    const inputRef = useRef<HTMLInputElement>(null)
    const generatedId = useId()
    const inputId = id ?? generatedId

    const lfs = () => {

        let result: string = 'text-[12px]';

        if (label && label.fontSize) {
            result = `text-[${label.fontSize.toString()}px]`
        }

        return result;
    }

    const cc = () => {

        let result: string = `form-control transition-all duration-250 w-full font-inter text-[13px] border ${ch.h}`;

        // colors, borders and focus
        if (isError) {
            result = result + ` text-[#4C649D] border-par-700`
        } else {
            result = result + ` text-[#4C649D] border-[#091532] ${showFocus ? 'focus:border-pacb-400 hover:border-pacb-200' : ''}`
        }

        // padding
        if (icon && icon.enable) {

            if (icon.position && icon.position === 'left') {
                result = result + ` py-[0.5rem] pl-[2.5rem] pr-[1rem]`
            } else if (icon.position && icon.position === 'right') {
                result = result + ` py-[0.5rem] pr-[2.5rem] pl-[1rem]`
            }

        } else {
            result = result + ` py-[0.5rem] px-[1rem]`
        }

        if (className) {
            result = result + ` ${className}`
        }

        return result;

    }

    const cic = () => {

        let result: string = `absolute`;

        if (icon && icon.enable) {

            if (icon.position === 'right') {
                result = result + `${pos} right-[0.7rem]`
            }

            if (icon.position === 'left') {
                result = result + `${pos} left-[0.7rem]`
            }

        }

        return result;
    }

    const handleClear = () => {
        if (inputRef.current) {
            inputRef.current.value = ''
        }
    }

    const handleFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }

    // expose child component functions to parent component
    useImperativeHandle(ref, () => ({
        clear: handleClear,
        focus: handleFocus
    }))

    return (
        <>

            {
                label &&
                <label htmlFor={inputId} className={`mrgb0 ${label.className ? label.className : ''}`}>
                    <span className={`font-inter${label.weight ? '-' + label.weight : ''} text-[#9CACD3]`} style={{ fontSize: `${label.fontSize}px` }}>{label.title}</span>
                    {label.required ? <span className="text-color-red font-freimedium relative text-[16px] top-[5px] left-[3px]">*</span> : ''}
                </label>
            }

            <div className="w-full relative">


                {
                    icon && icon.enable &&
                    <span className={cic()}>{icon.child}</span>
                }

                <input
                    ref={inputRef}
                    id={inputId}
                    name={name ? name : ''}
                    // value={value ? value : ''}
                    defaultValue={defaultValue ? defaultValue : ''}
                    type={type ? type : 'text'}
                    className={cc()}
                    placeholder={placeholder ? placeholder : 'Type here'}
                    autoComplete={autoComplete ? 'on' : 'off'}
                    readOnly={readonly ? readonly : false}
                    onChange={(e) => onChange(e)}
                    onKeyUp={(e) => onKeyUp ? onKeyUp(e) : {}}
                    onFocus={(e) => onFocus ? onFocus(e) : {}}
                />
            </div>

        </>
    )

})

export default TextInput;
