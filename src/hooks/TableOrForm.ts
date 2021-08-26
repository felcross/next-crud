import { useState } from "react"

export default function TableOrForm(){ 
    
    const [view, setView] = useState<'table'|'form'>('table')

    const viewTable = () => setView('table')
    const viewForm = () => setView('form')
  

   return {
         tableView:view === 'table',
         viewTable,viewForm
   }

}