import ButtonCad from "../components/ButtonCad";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";
import {useState,useEffect} from "react";
import ClientRepo from "../core/ClientRepo";
import Cclient from "../firebase/db/Cclient";


export default function Home() {
   
  const repo : ClientRepo = new Cclient()

  const [view, setView] = useState<'table'|'form'>('table')
  const [client, setClient] = useState<Client>(Client.empty)
  const [clients, setClients] = useState<Client[]>([])

 useEffect(getAll,[])

 function getAll(){
  repo.getAll().then(clients=>{
    setClients(clients)
    setView('table')
  })
  
 }


 function upDateC(client:Client){
  setClient(client)
  setView('form')
 }

 function newClient(){
  setClient(Client.empty())
  setView('form')
 }

 async function deleteC(client:Client){
  await repo.delete(client) 
  getAll()
 }
 async function saveC(client:Client){
    await repo.save(client) 
   getAll()

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
