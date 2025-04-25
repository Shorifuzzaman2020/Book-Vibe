const getStoredBook=()=>{
    const storedBookString=localStorage.getItem("readList");
    if(storedBookString){
        const storedBookData=JSON.parse(storedBookString);
        return storedBookData;
    }
    else{
        return [];
    }
}


const addToStoredDB=(id)=>{
    const storedBookData=getStoredBook();
    if(storedBookData.includes(id)){
        console.log("hello");
        alert("Already exist")
    }
    else{
        storedBookData.push(id);
        console.log(storedBookData);
        const data=JSON.stringify(storedBookData);
        localStorage.setItem("readList",data);
    }
}
export{addToStoredDB,getStoredBook};