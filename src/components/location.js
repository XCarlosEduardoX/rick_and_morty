const Location=({name, dimension, type})=>{
  
    return <>
    <div className="box">
    <p className="title">{name}</p>
    <p className="sub_title">{dimension}</p>     
    <p className="sub_title">{type}</p>
    </div>
    </>
}

export default Location