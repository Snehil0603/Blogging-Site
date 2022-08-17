import  './contact.css'
import { useContext, useState } from "react";
import axios from "axios"



export default function Contact() {

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [phone, setPhone] = useState(null);
	const [status, setStatus] = useState("SEND");

	
	const handleSubmit = async (e) => {
		
		e.preventDefault();
		setStatus("Sending...");
	
		
		try{
			const res= await axios.post("/contact",{
				
					name,
					email,
					subject,
					message,
					phone,
		  
				  
			  })
			  
			  res.data && setStatus("Submit Successful !")
			}
			catch(err){
				console.log(err)
			}
		 
		
		

	};

  return (
    <div class="shade">
		<div class="blackboard">
				<div class="form">
					<form onSubmit={handleSubmit}>
        
						<p>
								<label className="label">Name: </label>
								<input type="text"  autoFocus={true} onChange={(e)=>setName(e.target.value)}/>
						</p>
						<p>
								<label className="label">Email: </label>
								<input type="email" onChange={(e)=>setEmail(e.target.value)} />
						</p>
						<p>
								<label className="label" >Phone: </label>
								<input type="tel" onChange={(e)=>setPhone(e.target.value)}/>
						</p>
						<p>
								<label className="label">Subject: </label>
								<input type="text"  onChange={(e)=>setSubject(e.target.value)}/>
						</p>
						<p>
								<label className="label" >Message: </label>
								<textarea  onChange={(e)=>setMessage(e.target.value)}></textarea>
						</p>
						<p>
						<button  className="btn-submit" type="submit">
          {status}
        </button></p>
							</form>
						
				</div>
		</div>
</div>
  );
}
