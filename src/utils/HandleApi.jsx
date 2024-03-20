import axios from 'axios';
const baseUrl = "https://todo-backend-ya6h.onrender.com";

const getAllTodo = (setTodo) =>{
   axios.get(baseUrl)
   .then((res)=>{
    console.log("data",res.data);
    setTodo(res.data);
   })
}

 const addTodo = (text, setText, setTodo) =>{
    axios.post(`${baseUrl}/save`,{text})
    .then((res)=>{
        setText("")
        console.log(res.data);
        getAllTodo(setTodo);
    })
   .catch((err) => console.log(err));

 }

const updateTodo = (text, setText, todoId,setTodo,setIsUpdate) => {
   axios.post(`${baseUrl}/update`, {_id:todoId,text })
      .then((res) => {
         setText("")
         setIsUpdate(false)
         getAllTodo(setTodo);
      })
      .catch((err)=>console.log(err));
}

const deleteTodo = (_id, setTodo) => {
   axios.post(`${baseUrl}/delete`, { _id })
      .then((res) => {

         getAllTodo(setTodo);
      })
      .catch((err) => console.log(err));
}

export {getAllTodo,addTodo,updateTodo,deleteTodo};