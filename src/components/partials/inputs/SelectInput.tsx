'use client'
import { useRef, useImperativeHandle, forwardRef, ForwardedRef, Fragment, ChangeEvent, useId } from "react"
import helper from "../../../utils/helper.util";
import Icon from "../icons/Icon";
import useSize from "../../../hooks/useSize";
import { FontWeightType, SizeType } from "@/utils/types.util";

interface ISelectInput {
    readonly?: boolean,
    name?: string,
    id?: string
    selected?: string,
    size?: SizeType,
    className?: string,
    showFocus?: boolean,
    isError?: boolean,
    placeholder: {
        value: string,
        enable?: boolean
    },
    options: Array<{
        name: string,
        value: any
    }>
    label?: {
        title: string,
        className?: string,
        required?: boolean,
        fontSize?: number,
        weight?: FontWeightType
    },
    onSelect(e: ChangeEvent<HTMLSelectElement>): void
}

const SelectInput = forwardRef((props: ISelectInput, ref: ForwardedRef<any>) => {

    const {
        id,
        name,
        selected,
        options,
        placeholder,
        className,
        label,
        readonly,
        isError = false,
        size = 'rg',
        showFocus = true,
        onSelect
    } = props

    const ch = useSize({ size })
    const { pos } = useSize({ size, type: 'input-icon' })

    const inputRef = useRef<HTMLSelectElement>(null)
    const generatedId = useId()
    const inputId = id ?? generatedId

    const cc = () => {

        let result: string = `form-control transition-all duration-250 w-full appearance-none font-inter text-[13px] border ${ch.h}`;

        // colors, borders and focus
        if (isError) {
            result = result + ` text-par-700 border-[#091532]`
        } else {
            result = result + ` text-color-black border-[#091532]/40 ${showFocus ? 'focus:border-[#091532]/40 hover:border-[#091532]/40' : ''}`
        }

        // padding
        result = result + ` py-[0.5rem] px-[0.7rem]`

        if (className) {
            result = result + ` ${className}`
        }

        return result;

    }

    const cic = () => {

        let result: string = `absolute right-[1rem] ${pos}`;

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
                    <span className={`font-inter text-[#9CACD3]`} style={{ fontSize: `${label.fontSize}px` }}>{label.title}</span>
                    {label.required ? <span className="text-color-red font-intermedium relative text-[16px] top-[5px] left-[3px]">*</span> : ''}
                </label>
            }

            <div className={`select-input w-full relative  ${readonly ? 'readonly' : ''}`}>

                <span className={`pointer-events-none ${cic()}`}>
                    <Icon name="chevron-down" type="feather" className={`text-pacb-800 pointer-events-none`} size={16} />
                </span>

                <select
                    ref={inputRef}
                    id={inputId}
                    name={name ? name : ''}
                    className={cc()}
                    defaultValue={selected ?? ''}
                    aria-label="drop-down combobox"
                    onChange={(e) => { onSelect(e) }}
                >
                    {
                        placeholder.enable &&
                        <option value="">{helper.capitalize(placeholder.value)}</option>
                    }
                    {
                        options.map((item, index) =>
                            <Fragment key={index}>
                                <option key={item.value} value={item.value}>
                                    {helper.capitalize(item.name)}
                                </option>
                            </Fragment>
                        )
                    }
                </select>

            </div>

        </>
    )

})

export default SelectInput;
