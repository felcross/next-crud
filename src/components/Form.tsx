import { useState } from "react";
import Client from "../core/Client";
import ButtonCad from "./ButtonCad";
import Input from "./Input";

interface FormProps {
    client: Client
    updatec?:(client:Client)=> void
    exit?:() => void
}


export default function Form(props:FormProps) {
    const id = props.client?.id
  const [name,setName] = useState(props.client?.name ?? "")
  const [age,setAge] = useState(props.client?.age ?? 0)

    return (
        <div className="flex flex-col justify-center mb-4">
            {id ? (
                <Input type="text" 
                readOnly
                value={id} 
                text="ID"/>
            ):false}

                <Input type="text" 
                value={name} 
                onChange={setName}
                text="Nome"/>
                <Input type="number" 
                value={age} 
                onChange={setAge}
                text="Age"/>

                <div className="flex justify-end mt-3">
                  <ButtonCad
                   onClick={()=> props.updatec?.(new Client(name,+age,id))} 
                   color='blue'
                   className="mr-2">
                   {id ? 'change':'save'}
                  </ButtonCad>
                  <ButtonCad onClick={props.exit}>
                      Exit
                  </ButtonCad>

                </div>
        </div>
    )
}


