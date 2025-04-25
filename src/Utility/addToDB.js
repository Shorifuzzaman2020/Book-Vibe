import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

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
const getStoredWishListBook=()=>{
    const storedWishListBookString=localStorage.getItem("wishList");
    if(storedWishListBookString){
        const storedWishBookData=JSON.parse(storedWishListBookString);
        return storedWishBookData;
    }
    else{
        return [];
    }
}
const addToStoredWishListDB=(id)=>{
    const storedWishBookData=getStoredWishListBook();
    if(storedWishBookData.includes(id)){
        MySwal.fire({
            title: "Failed!",
            text: "This book is already added to the wish List!",
            icon: "error"
          });
    }

    else{
        storedWishBookData.push(id);
        
        const data=JSON.stringify(storedWishBookData);
        localStorage.setItem("wishList",data);
        MySwal.fire({
            title: "Good job!",
            text: "You successfully this book added to the Wish list!",
            icon: "success"
          });
    }
}


const addToStoredDB=(id)=>{
    const storedBookData=getStoredBook();
    if(storedBookData.includes(id)){
        MySwal.fire({
            title: "Failed!",
            text: "This book is already added to the read List!",
            icon: "error"
          });
    }

    else{
        storedBookData.push(id);
        console.log(storedBookData);
        const data=JSON.stringify(storedBookData);
        localStorage.setItem("readList",data);
        MySwal.fire({
            title: "Good job!",
            text: "You successfully this book added to the read list!",
            icon: "success"
          });
    }
}
export{addToStoredDB,getStoredBook,getStoredWishListBook,addToStoredWishListDB};