import ButtonCad from "../components/ButtonCad";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import {useState} from "react";


export default function Home() {
  const [view, setView] = useState<'table'|'form'>('table')
  const [client, setClient] = useState<Client>(Client.empty)

const clients = [
  new Client ('jonh',34,'1'),
  new Client('constant',37,'2'),
  new Client('dom',37,'3'),
  new Client('gok',35,'4'),
  new Client('zshell',37,'5'),
  new Client('axios',37,'6'),
]

 function upDateC(client:Client){
  setClient(client)
  setView('form')
 }

 function newClient(){
  setClient(Client.empty())
  setView('form')
 }

 function deleteC(client:Client){
  console.log(client.id)
 }
 function saveC(client:Client){
  console.log(client)
  setView('table')

 }

 

  return (
    <div className={
      `flex justify-center items-center h-screen
       bg-gradient-to-r from-blue-500 to bg-purple-500
       text-white`}>
      <Layout title='Cadastro'>
       
       {view === 'table'? 
       (
       <><div className='flex justify-end'>
        <ButtonCad color='green' 
        className='mb-4'
        onClick={newClient}
        >New Cli</ButtonCad>
          </div>
        <Table clients={clients} 
        upDateC={upDateC}
    deleteC={deleteC}></Table> 
      </>):(
      <Form 
      updatec={saveC}
      client={client}
      exit={()=>setView('table')}
      />
    )}
      
      </Layout>
    </div>
  )
}
