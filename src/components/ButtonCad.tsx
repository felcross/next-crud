
interface ButtonProps {
    color?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
}

export default function ButtonCad(props:ButtonProps){

    const cor = props.color ?? 'gray'
    return(
     <button className={` text-white px-4 py-2 rounded-md
         bg-gradient-to-r from-${cor}-300 to-${cor}-500
         ${props.className}
         `}>
         {props.children}
     </button>
        
    )
} 