import ButtonCad from "../components/ButtonCad";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from "../core/Client";


export default function Home() {
const clients = [
  new Client ('jonh',34,'1'),
  new Client('jonh2',37,'2'),
  new Client('jonh3',37,'3'),
  new Client('jonh4',35,'4'),
  new Client('jonh5',37,'7'),
  new Client('jonh2',37,'2'),
]

 function upDateC(client:Client){
  console.log(client)
 }

 function deleteC(client:Client){
  console.log(client.id)
 }

  return (
    <div className={
      `flex justify-center items-center h-screen
       bg-gradient-to-r from-blue-500 to bg-purple-500
       text-white`}>
      <Layout title='Cadastro'>
        <div className='flex justify-end'>
        <ButtonCad color='green'className='mb-4'>New Client</ButtonCad>
          </div>

        <Table clients={clients} 
        upDateC={upDateC}
        deleteC={deleteC}></Table>
      </Layout>
    </div>
  )
}
