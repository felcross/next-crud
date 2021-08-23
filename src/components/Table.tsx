import Client from "../core/Client"
import { editIcon, trashIcon } from "./Icones"

interface TableProps {
    clients: Client[]
    upDateC?: (client:Client) => void
    deleteC?: (client:Client) => void
}

export default function Table(props: TableProps) {

    const action = props.upDateC || props.deleteC

   function renderHeader(){
       return (
           <tr>
               <th className="text-left p-4">ID</th>
               <th className="text-left p-4">Name</th>
               <th className="text-left p-4">Age</th>
              {action ? <th className="text-center p-4">Action</th>: false}
           </tr>
       )
   }

   function renderData(){
       return props.clients.map((client,i)=>{
           return (
        <tr key={client.id}
         className={`${i %2===0 ? "bg-purple-200":"bg-purple-100"}`}>
            <td className="text-left p-4">{client.id}</td>
            <td className="text-left p-4">{client.name}</td>
            <td className="text-left p-4">{client.age}</td>
            {action ?renderAction(client) : false}
        </tr>  
           )
       })
   }

   function renderAction(client:Client){
       return (

                 <td className="flex justify-center">
                     {props.upDateC?(
                       <button onClick={() => props.upDateC?.(client)}
                        className={` flex justify-center items-center
                       rounded-full p-2 m-1
                       text-green-600
                        hover:bg-purple-50`}>{editIcon}</button>


                     ):false}
                     {props.deleteC?(
                       <button onClick={() => props.deleteC?.(client)}
                       className={` flex justify-center items-center
                       rounded-full p-2 m-1
                       text-red-600
                        hover:bg-purple-50`}>{trashIcon}</button>


                     ):false}
                 </td>
             
       )
   }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
            text-gray-600
             bg-gradient-to-r from-purple-400 to bg-purple-700`}>
            {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}


