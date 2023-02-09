const getProducts =async ()=>{
    const response= await fetch('/getfood', {mode:"no-cors"});
    const data=await response.json();
    return data;
}
export default getProducts;