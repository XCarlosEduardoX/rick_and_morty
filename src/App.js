import './App.css';
import { useEffect, useState} from 'react';
import getLocation from './components/server';
import Search from './components/search';
import Location from './components/location';
import Residents from './components/residents';


function App() {
  const [query,SetQuery]=useState('')
  const [locationName, setLocationName]=useState([])
  const [locationDimension, setLocationDimension]=useState([])
  const [locationType, setLocationType]=useState([])
  const [residents, setResidents]=useState([])
  
  useEffect(()=>{
       
    if(query){
   
      getLocation(query).then(data=>{
        console.log(data);
        setLocationName(data.name)
        setLocationDimension(data.dimension)
        setLocationType(data.type)
        setResidents(data.residents)


       })
    } else{
      random()  
    }

    function random(){
      let num=Math.floor(Math.random() * (21 - 0)) + 0;
      SetQuery(num)
    }
    
  },[query])
  
  return (
    <div className="App">
     <Search handleSearch={SetQuery}/>
          <Location name={locationName} dimension={locationDimension} type={locationType}/>
          <Residents url={residents}/>
    </div>
  );
}

export default App;
