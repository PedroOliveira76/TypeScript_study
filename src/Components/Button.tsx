import { FunctionComponent } from "react"

interface inputProps {
    type: 'password' | 'button' | 'image';
    src?: string;
    value?: string;
    className: string;
    onClick?: () => void
}


const Button: FunctionComponent<inputProps> = ({ type, src, value, className, onClick}) => {

    return (
        <>
            {type === 'image' ?
              (<input type={type} src={src} className={className} />):

            type === 'password'?
              (<input type={type} className={className} />):

            (<input type={type} value={value} className={className} onClick={onClick}/>)
            }
        </>
    )


}

export default Button