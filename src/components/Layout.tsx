import Title from "./Title";

interface LayoutProps {
    title: String,
    children: any
}

export default function Layout(props){


    return(
        <div className={`
        flex flex-col  w-2/3
        bg-white text-gray-700
        `}>
    <Title></Title>
        </div>
    )
} 