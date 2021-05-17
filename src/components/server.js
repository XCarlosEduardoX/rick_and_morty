const url="https://rickandmortyapi.com/api/location/"

const getLocation=(name)=>{
    const promise=fetch(`${url}${name}`);
    return promise.then(res=>res.json())
}
export default getLocation