import Client from "../core/Client";
import {useState,useEffect} from "react";
import ClientRepo from "../core/ClientRepo";
import Cclient from "../firebase/db/Cclient";
import TableOrForm from "./TableOrForm";


export default function useClients() {
   
  const repo : ClientRepo = new Cclient()
  
  const {viewTable,viewForm,tableView} = TableOrForm()

  const [client, setClient] = useState<Client>(Client.empty)
  const [clients, setClients] = useState<Client[]>([])

 useEffect(getAll,[])

 function getAll(){
  repo.getAll().then(clients=>{
    setClients(clients)
    viewTable()
  })
  
 }


 function upDateC(client:Client){
  setClient(client)
   viewForm()
 }

 function newClient(){
  setClient(Client.empty())
  viewForm()
 }

 async function deleteC(client:Client){
  await repo.delete(client) 
  getAll()
 }
 async function saveC(client:Client){
    await repo.save(client) 
   getAll()

 }
  return {
    viewTable,tableView,upDateC,newClient,getAll,deleteC,saveC,client,clients
                

  }


}