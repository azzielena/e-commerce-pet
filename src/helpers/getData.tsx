const getProducts =async ()=>{
    const response= await fetch('http://localhost:3001/getfood');
    const data=await response.json();
    return data;
}
export default getProducts;