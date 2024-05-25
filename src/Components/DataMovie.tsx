import { useState} from 'react'
import Button from './Button';
import './DataMovie.css'

export const DataMovie = () => {

    const URL = 'https://official-joke-api.appspot.com/random_joke'

    interface DataFetch{
        id: number;
        type: string;
        setup: string;
        punchline:string;
    }

    const [result, setResult] = useState<DataFetch>()
    const [isVisible, setIsVisible] = useState(false)

    const fetchData = async ()=>{
            
        const response = await fetch(URL);
        const data = await response.json();
        setResult(data)
        setIsVisible(false)
    }

    const toggleVisible = ()=>{
        setIsVisible(!isVisible)
    }
   
    
  return (
    <div>
        
        <Button type='button'  value='Contar Piada' className='joke' onClick={fetchData}/>
        {result ?(
            <div>
                <h1>Gender: {result.type}</h1>
                <h2>Question: {result.setup}</h2>
                <Button type='button' value='Answer' className='joke' onClick={toggleVisible}/>
                {isVisible &&(<p>{result.punchline}</p>)}
            </div>
        ):
        (
            <div>Clique no botão!</div>
        )}
    </div>
  )
}

export default DataMovie