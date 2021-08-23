
interface ButtonProps {
    color?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
}

export default function ButtonCad(props:ButtonProps){

    const color = props.color ?? 'grey'
    return(
     <button className={` text-white px-4 py-2 rounded-md
         bg-gradient from-${color}-200 to-${color}-400
         ${props.className}
         `}>
         {props.children}
     </button>
        
    )
} 