import React from 'react'
import './style.css'

class Maincomponent extends React.Component{
    state={
        name:"",
        department:"",
        rating:"",
        empdetails:[]
    }
    updateinput=(event)=>
    {
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    onsubmit=(event)=>{
        event.preventDefault()

        const Objtemp={
            name:this.state.name,
            department:this.state.department,
            rating:this.state.rating
           
        }

        const arraytemp=this.state.empdetails;
        arraytemp.push(Objtemp);
        this.setState({empdetails:arraytemp});
    }

    render()
    {
        return (
            <>
             <h1 id="headstyle">EMPLOYEE FEEDBACK FORM</h1>
             <form id='emp' onSubmit={this.onsubmit}>
                 <label for="name" id="namestyle">Name:</label>
             <input type="text" id='name' name='name' onChange={this.updateinput}  placeholder=''value={this.state.name} required/><br></br><br></br>
             <label for="dept" id="deptstyle">Department:</label>
             <input type="text" id='dept' name='department' onChange={this.updateinput} placeholder='' value={this.state.department} required/><br></br><br></br>
             <label for="rating" id="ratestyle">Rating:</label>
             <input type="number" id='rating' name='rating' onChange={this.updateinput} placeholder='' value={this.state.rating} required/><br></br><br></br>
             <button id="sub" >Submit</button><br></br><br></br>

             </form>
          <div id="flex">
             {this.state.empdetails.map((value,index)=>{
                
                 return(
                    
                    <p id="details">
                       Name: {value.name} || Department:{value.department} || Rating:{value.rating}
                    </ p>
                    
                 )
                 
             })}
             </div>
           
            </>
        )
    }
}

export default Maincomponent