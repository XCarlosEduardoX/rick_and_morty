import axios from "axios"
import { useEffect, useState } from "react"



const Residents=({url})=>{
    const [residentOne,setResidentOne]=useState([])
    const [residentTwo,setResidentTwo]=useState([])
    const [residentThree,setResidentThree]=useState([])
    const [residentFour,setResidentFour]=useState([])
    const [residentFive,setResidentFive]=useState([])
    const [residentSix,setResidentSix]=useState([])
    const [residentSeven,setResidentSeven]=useState([])
    const [residentEight,setResidentEight]=useState([])
    const [residentNine,setResidentNine]=useState([])
    const [residentTen,setResidentTen]=useState([])

    

useEffect(()=>{
   
        let get_residents=[]
        get_residents.push(url.slice(0,10))
   
        if(get_residents.length == 1 ){
        axios.get(`${get_residents[0][0]}`)
        .then(res => {
            setResidentOne(res.data)
            console.log(res.data);
        })
        axios.get(`${get_residents[0][1]}`)
        .then(res => {
            setResidentTwo(res.data)
            console.log(res.data);
        })
        axios.get(`${get_residents[0][2]}`)
        .then(res => {
            setResidentThree(res.data)
            console.log(res.data);
        })
        axios.get(`${get_residents[0][3]}`)
        .then(res => {
            setResidentFour(res.data)
            console.log(res.data);
        })
        axios.get(`${get_residents[0][4]}`)
        .then(res => {
            setResidentFive(res.data)
            console.log(res.data);
        })
        axios.get(`${get_residents[0][5]}`)
        .then(res => {
            setResidentSix(res.data)
            console.log(res.data);
        })
        axios.get(`${get_residents[0][6]}`)
        .then(res => {
            setResidentSeven(res.data)
            console.log(res.data);
        })
        axios.get(`${get_residents[0][7]}`)
        .then(res => {
            setResidentEight(res.data)
            console.log(res.data);
        })
        axios.get(`${get_residents[0][8]}`)
        .then(res => {
            setResidentNine(res.data)
            console.log(res.data);
        })
        axios.get(`${get_residents[0][9]}`)
        .then(res => {
            setResidentTen(res.data)
            console.log(res.data);
        })
    }
      
},[url])






    return <>
    <div className="container">
    <div className="row">

    {( typeof residentOne != "undefined" ) ? (
      <div className="card">
       <p className="c_title"> {residentOne.name}</p>
       <div className="info">
       <p className="tags">  {residentOne.gender}</p>
       <p className="tags"> {residentOne.species}</p>
       <p className="tags"> {residentOne.status}</p>
       </div>
       <img src={residentOne.image} alt="Smiley face"></img>
      </div>
      
      ) : ("")}
       {( typeof residentTwo != "undefined" ) ? (
      <div className="card">
       <p className="c_title"> {residentTwo.name}</p>
       <div className="info">
       <p className="tags"> {residentTwo.gender}</p>
       <p className="tags"> {residentTwo.species}</p>
       <p className="tags"> {residentTwo.status}</p>
       </div>
       <img src={residentTwo.image} alt="Smiley face"></img>
      </div>
      
      ) : ("")}
      {( typeof residentThree != "undefined" ) ? (
      <div className="card">
       <p className="c_title"> {residentThree.name}</p>
       <div className="info">
       <p className="tags"> {residentThree.gender}</p>
       <p className="tags"> {residentThree.species}</p>
       <p className="tags"> {residentThree.status}</p>
       </div>
       <img src={residentThree.image} alt="Smiley face"></img>
      </div>
      
      ) : ("")}
       {( typeof residentFour!= "undefined" ) ? (
      <div className="card">
       <p className="c_title"> {residentFour.name}</p>
       <div className="info">
       <p className="tags"> {residentFour.gender}</p>
       <p className="tags"> {residentFour.species}</p>
       <p className="tags"> {residentFour.status}</p>
       </div>
       <img src={residentFour.image}alt="Smiley face" ></img>
      </div>
      
      ) : ("")}
       {( typeof residentFive != "undefined" ) ? (
      <div className="card">
       <p className="c_title"> {residentFive.name}</p>
       <div className="info">
       <p className="tags"> {residentFive.gender}</p>
       <p className="tags"> {residentFive.species}</p>
       <p className="tags"> {residentFive.status}</p>
       </div>
       <img src={residentFive.image}alt="Smiley face"></img>
      </div>
      
      ) : ("")}
       {( typeof residentSix != "undefined" ) ? (
      <div className="card">
       <p className="c_title"> {residentSix.name}</p>
       <div className="info">
       <p className="tags"> {residentSix.gender}</p>
       <p className="tags"> {residentSix.species}</p>
       <p className="tags"> {residentSix.status}</p>
       </div>
       <img src={residentSix.image}alt="Smiley face"></img>
      </div>
      
      ) : ("")}
      {( typeof residentSeven != "undefined" ) ? (
      <div className="card">
       <p className="c_title"> {residentSeven.name}</p>
       <div className="info">
       <p className="tags"> {residentSeven.gender}</p>
       <p className="tags"> {residentSeven.species}</p>
       <p className="tags"> {residentSeven.status}</p>
       </div>
       <img src={residentSeven.image}alt="Smiley face"></img>
      </div>
      
      ) : ("")}
       {( typeof residentEight!= "undefined" ) ? (
      <div className="card">
       <p className="c_title"> {residentEight.name}</p>
       <div className="info">
       <p className="tags"> {residentThree.gender}</p>
       <p className="tags"> {residentEight.species}</p>
       <p className="tags"> {residentEight.status}</p>
       </div>
       <img src={residentEight.image}alt="Smiley face"></img>
      </div>
      
      ) : ("")}
       {( typeof residentNine != "undefined" ) ? (
      <div className="card">
          
       <p className="c_title"> {residentNine.name}</p>
       <div className="info">
       <p className="tags"> {residentNine.gender}</p>
       <p className="tags"> {residentNine.species}</p>
       <p className="tags"> {residentNine.status}</p>
       </div>
       <img src={residentNine.image}alt="Smiley face"></img>
      </div>
      
      ) : ("")}
       {( typeof residentTen != "undefined" ) ? (
      <div className="card">
       <p className="c_title"> {residentTen.name}</p>
       <div className="info">
       <p className="tags"> {residentTen.gender}</p>
       <p className="tags"> {residentTen.species}</p>
       <p className="tags"> {residentTen.status}</p>
       </div>
       <img src={residentTen.image}alt="Smiley face"></img>
      </div>
      
      ) : ("")}
      
      </div>
      </div>

       
    </>
}

export default Residents