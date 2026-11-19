'use client'
import React, { useId, useRef, useImperativeHandle, forwardRef, ForwardedRef, ReactNode, KeyboardEvent, ChangeEvent } from "react"
import useSize from "../../../hooks/useSize";
import { FontWeightType, PositionType, SizeType } from "@/utils/types.util";

interface ITextAreaInput {
    rows?: number,
    cols?: number,
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
    onKeyUp?(e: KeyboardEvent<HTMLTextAreaElement>): void
    onChange(e: ChangeEvent<HTMLTextAreaElement>): void

}

const TextAreaInput = forwardRef((props: ITextAreaInput, ref: ForwardedRef<any>) => {

    const {
        id,
        name,
        defaultValue,
        placeholder,
        autoComplete,
        className,
        label,
        rows = 4,
        cols = 4,
        readonly,
        icon = {
            enable: false,
            position: 'right',
            child: <></>
        },
        isError = false,
        showFocus = true,
        onChange,
        onKeyUp,
        onFocus
    } = props

    const { pos } = useSize({ size: 'mini', type: 'input-icon' })
    const inputRef = useRef<HTMLTextAreaElement>(null)

    const generatedId = useId()
    const inputId = id ?? generatedId

    const cc = () => {

        let result: string = `form-control transition-all duration-250 w-full py-[0.5rem] px-[1rem] font-inter text-[13px] border`;

        // colors, borders and focus
        if (isError) {
            result = result + ` text-color-white border-par-700`
        } else {
            result = result + ` text-color-white border-[#091532] ${showFocus ? 'focus:border-pacb-400 hover:border-pacb-200' : ''}`
        }

        if (className) {
            result = result + ` ${className}`
        }

        return result;

    }

    const cic = () => {

        let result: string = `absolute ${pos}`;

        if (icon && icon.enable) {

            if (icon.position === 'right') {
                result = result + ' right-[0.7rem]'
            }

            if (icon.position === 'left') {
                result = result + ' left-[0.7rem]'
            }

        }

        return result;
    }

    const handleClear = () => {
        if(inputRef.current){
            inputRef.current.value = ''
        }
    }

    const handleFocus = () => {
        if(inputRef.current){
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
                <label htmlFor={inputId} className={`${label.className ? label.className : ''}`}>
                    <span className={`font-inter${label.weight ? '-'+label.weight : ''} text-[#9CACD3]`} style={{ fontSize: `${label.fontSize}px` }}>{label.title}</span>
                    {label.required ? <span className="text-color-red font-intermedium relative text-[16px] top-[5px] left-[3px]">*</span> : ''}
                </label>
            }

            <div className="w-full relative">


                {
                    icon && icon.enable &&
                    <span className={cic()}>{icon.child}</span>
                }

                <textarea
                    ref={inputRef}
                    id={inputId}
                    name={name ? name : ''}
                    defaultValue={defaultValue ? defaultValue : ''}
                    rows={rows}
                    cols={cols}
                    className={cc()}
                    placeholder={placeholder ? placeholder : 'Type here'}
                    autoComplete={autoComplete ? 'on' : 'off'}
                    readOnly={readonly ? readonly : false}
                    onChange={(e) => onChange(e)}
                    onKeyUp={(e) => onKeyUp ? onKeyUp(e) : {}}
                    onFocus={(e) => onFocus ? onFocus(e) : {}}
                ></textarea>
            </div>

        </>
    )

})

export default TextAreaInput;
