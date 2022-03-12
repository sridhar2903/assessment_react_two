import React from 'react'
import './style.css'

class Maincomponent extends React.Component {
    state = {
        name: "",
        department: "",
        rating: "",
        empdetails: []
    }
    updateinput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onsubmit = (event) => {
        event.preventDefault()

        const Objtemp = {
            name: this.state.name,
            department: this.state.department,
            rating: this.state.rating

        }

        const arraytemp = this.state.empdetails;
        arraytemp.push(Objtemp);
        this.setState({ empdetails: arraytemp });
    }

    render() {
        return (
            <>
                 <div id="center">
                <h1 id="headstyle">EMPLOYEE FEEDBACK FORM</h1>
                </div><br/>
                <div id="containerform">
                <form  onSubmit={this.onsubmit}>
                <br/><br/>
                    &nbsp;&nbsp; <label for="name" id="namestyle">Name</label><br/><br/>
                    &nbsp;&nbsp;<input type="text" id='name' name='name' onChange={this.updateinput} placeholder='Enter Name ' value={this.state.name} required /><br/><br/>
                    &nbsp;&nbsp;<label for="dept" id="deptstyle">Department</label><br/><br/>
                    &nbsp;&nbsp;<input type="text" id='dept' name='department' onChange={this.updateinput} placeholder='Enter Department' value={this.state.department} required /><br/><br/>
                    &nbsp;&nbsp;<label for="rating" id="ratestyle">Rating</label><br/><br/>
                    &nbsp;&nbsp;<input type="number" id='rating' name='rating' onChange={this.updateinput} placeholder='Enter Rating' value={this.state.rating} required /><br/><br/>
                    &nbsp;&nbsp;<button id="sub" type="submit" >Submit</button><br/><br/>
                   
                </form>
                </div>
                <div id="flex">
                    {this.state.empdetails.map((value, index) => {

                        return (

                            <p id="details">
                               {index+1 }. Name: {value.name} || Department:{value.department} || Rating:{value.rating}
                            </ p>

                        )

                    })}
                </div>

            </>
        )
    }
}

export default Maincomponent