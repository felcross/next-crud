import ButtonCad from "../components/ButtonCad";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import useClients from "../hooks/useClients";




export default function Home() {
   
 const {tableView,upDateC,newClient,getAll,deleteC,saveC,client,clients,viewTable} = useClients()

 

  return (
    <div className={
      `flex justify-center items-center h-screen
       bg-gradient-to-r from-blue-500 to bg-purple-500
       text-white`}>
      <Layout title='Cadastro'>
       
       {tableView? 
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
      exit={()=>viewTable}
      />
    )}
      
      </Layout>
    </div>
  )
}
