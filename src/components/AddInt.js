import axios from "axios";
import { Modal } from "bootstrap";
import { Button } from "bootstrap";
import { useState } from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { useSelector } from "react-redux";



function AddInt({interactivecourses}){
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [price,setPrice]=useState("")
    const [show, setShow] = useState(false);


  //el authorisation ya ahmed mta koussay
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const API = axios.create({ baseURL: "http://localhost:5000" });
  API.interceptors.request.use((req) => {
    req.headers.Authorization =`Bearer ${user.token}`;
    return req;
  });


  const hundelsub= async()=>{
      const intrea ={
        title: title,
        description: description,
        price: price,
      }
    
      const { data } = await API.post("/api/interactiveCourse/", intrea);  
    
    }


  
    return(
    
    <>
        
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
 Add Interactive course
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <InputGroup className="mb-3">
  <InputGroup.Text onChange={(event) => {
                setTitle(event.target.value);
              }}>Title</InputGroup.Text>
  <FormControl aria-label="First name" />

</InputGroup>
<InputGroup className="mb-3">
  <InputGroup.Text onChange={(event) => {
                setDescription(event.target.value);
              }}>Description</InputGroup.Text>
  <FormControl aria-label="First name" />

</InputGroup>
<InputGroup className="mb-3">
  <InputGroup.Text onChange={(event) => {
                setPrice(event.target.value);
              }}>Price</InputGroup.Text>
  <FormControl aria-label="First name" />

</InputGroup>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={()=>{
            hundelsub()
        }}>Done !</button>
      </div>
    </div>
  </div>
</div>
      </>)
}


export default AddInt;
