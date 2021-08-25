import Client from "../../core/Client";
import firebase from "../config";
import ClientRepo from "../../core/ClientRepo";

export default class Cclient implements ClientRepo {

      converter = {
          toFirestore(client:Client){
              return {
                  name:client.name,
                  age:client.age
              }
          },

        fromFirestore(snapshot:firebase.firestore.QueryDocumentSnapshot, options:firebase.firestore.SnapshotOptions)
        {   const data = snapshot.data(options)
            return new Client(data.name, data.age,snapshot.id)
        }
      }


    async save(client:Client): Promise<Client>{
        return null
    }

    async delete(client:Client): Promise<void>{
        return null
    }

    async getAll(): Promise<Client[]>{
        return null
    }
}