'use client'
import { IButton } from "../../../utils/interfaces.util";
import Link from "next/link";
import useSize from "../../../hooks/useSize";

const Button = (props: IButton) => {

    const {
        id,
        url = '',
        text,
        size = 'rg',
        type = 'primary',
        semantic = 'normal',
        reverse = 'default',
        style = {},
        loading = false,
        block = false,
        fill = false,
        className = '',
        disabled = false,
        disabledType,
        icon = {
            enable: false,
            className: '',
            child: <></>
        },
        onClick
    } = props;


    const ch = useSize({ size, type: 'button' })

    const cc = () => {

        // basic style
        let result = `inline-flex items-center justify-center rounded-[5px] transition-all duration-[0.25s] px-[1rem]`;
        result = result + ` ${ch.h}` // add height styles

        // block style
        if (block) {
            result = result + `flex w-full`
        }

        // flex reverse style
        if (reverse && reverse !== 'default') {

            if (reverse === 'row') {
                result = result + ` flex-row-reverse gap-x-[0.5rem]`
            } else if (reverse === 'column') {
                result = result + ` flex-col-reverse gap-x-[0.5rem]`
            } else if (reverse === 'wrap') {
                result = result + ` flex-wrap-reverse gap-x-[0.5rem]`
            }

        } else {
            result = result + ` ${icon.enable ? ' gap-x-[0.5rem]' : ''}`
        }

        if (disabled) {
            if (disabledType) {
                result = result + `${disabledType === 'default' ? ' disabled' : ' disabled-' + disabledType}`;
            } else {
                result = result + `${disabled ? ' pointer-events-none opacity-[.45]' : ''}`;
            }
        }

        if (className) {
            result = result + ` ${className}`
        }


        if (type === 'primary') {

            switch (semantic) {
                case 'info':
                case 'blue':
                    // result = result + ` bg-pacb-500 hover:bg-pacb-600 text-color-white`
                    result = result + ` bg-[#2aaae0] hover:bg-[#1f8fb8] text-white`
                    break;
                case 'error':
                case 'red':
                    result = result + ` bg-[#2aaae0] hover:bg-[#1f8fb8] text-white`
                    break;
                case 'ongoing':
                case 'purple':
                    result = result + ` bg-[#2aaae0] hover:bg-[#1f8fb8] text-white`
                    break;
                case 'success':
                case 'green':
                    result = result + ` bg-[#2aaae0] hover:bg-[#1f8fb8] text-white`
                    break;
                case 'warning':
                case 'yellow':
                    result = result + ` bg-[#F59E0B] hover:bg-[#D97706] text-white`
                    break;
                case 'warning-2':
                case 'orange':
                    result = result + ` bg-[#2aaae0] hover:bg-[#1f8fb8] text-white`
                    break;
                case 'normal':
                    result = result + ` bg-[#2aaae0] hover:bg-[#1f8fb8] text-white`
                    break;
                default:
                    result = result + ` bg-[#2aaae0] hover:bg-[#1f8fb8] text-white`
            }

        }

        if (type === 'secondary') {

            switch (semantic) {
                case 'info':
                case 'blue':
                    result = result + ` bg-pab-100 hover:bg-pab-600 text-pab-900`
                    break;
                case 'error':
                case 'red':
                    result = result + ` bg-par-100 hover:bg-par-600 text-par-900`
                    break;
                case 'ongoing':
                case 'purple':
                    result = result + ` bg-pap-100 hover:bg-pap-600 text-pap-900`
                    break;
                case 'success':
                case 'green':
                    result = result + ` bg-pagr-100 hover:bg-pagr-600 text-pagr-900`
                    break;
                case 'warning':
                case 'yellow':
                    result = result + ` bg-pay-200 hover:bg-pay-600 text-pay-900`
                    break;
                case 'warning-2':
                case 'orange':
                    result = result + ` bg-pao-100 hover:bg-pao-600 text-pao-900`
                    break;
                case 'normal':
                    result = result + ` bg-pacb-500 hover:bg-pacb-800 text-color-white`
                    break;
                default:
                    result = result + ` bg-pacb-600 hover:bg-pacb-800 text-color-white`
            }

        }

        if (type === 'ghost') {

            switch (semantic) {
                case 'info':
                case 'blue':
                    result = result + ` border-[1px] border-pab-500 hover:border-pab-700 text-pab-600 ${fill ? 'bg-pab-50' : ''}`
                    break;
                case 'error':
                case 'red':
                    result = result + ` border-[1px] border-par-600 hover:border-par-700 text-par-700 ${fill ? 'bg-par-50' : ''}`
                    break;
                case 'ongoing':
                case 'purple':
                    result = result + ` border-[1px] border-pap-500 hover:border-pap-700 text-pap-600 ${fill ? 'bg-pap-50' : ''}`
                    break;
                case 'success':
                case 'green':
                    result = result + ` border-[1px] border-pagr-500 hover:border-pagr-700 text-pagr-600 ${fill ? 'bg-pagr-50' : ''}`
                    break;
                case 'warning':
                case 'yellow':
                    result = result + ` border-[1px] border-pay-500 hover:border-pay-700 text-pay-600 ${fill ? 'bg-pay-50' : ''}`
                    break;
                case 'warning-2':
                case 'orange':
                    result = result + ` border-[1px] border-pao-500 hover:border-pao-700 text-pao-600 ${fill ? 'bg-pao-50' : ''}`
                    break;
                case 'normal':
                    result = result + ` border-[1px] border-pas-950 hover:border-pas-950 text-pas-950 ${fill ? 'bg-pas-50' : ''}`
                    break;
                default:
                    result = result + ` border-[1px] border-pag-200 hover:border-pag-300 text-pag-600 ${fill ? 'bg-pag-50' : ''}`
            }

        }

        return result;
    }

    const handleClick = (e: any) => {

        if (e) { e.preventDefault() }

        if (url) {
            onClick(e);
            window.open(url, '_blank');

        } else {
            onClick(e)
        }

    }

    return (
        <>
            <Link
                href=""
                style={style}
                className={cc()}
                onClick={(e) => handleClick(e)}
            >
                {loading && <span className={`loader md ${type !== 'primary' ? 'primary' : 'white'}`}></span>}
                {
                    !loading &&
                    <>
                        <span className={`font-inter${text.weight ? text.weight : ''}`} style={{ fontSize: `${text.size ? text.size : '14'}px` }}>{text.label}</span>
                        {icon.enable && <>{icon.child}</>}
                    </>
                }
            </Link>
        </>
    )
};

export default Button;
