import Client from "../../core/Client";
import ClientRepo from "../../core/ClientRepo";

export default class Cclient implements ClientRepo {

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