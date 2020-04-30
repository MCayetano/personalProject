import React, {Component} from 'react';





class Auto extends Component {

    state = {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        email: '',
        birthDate: '',
        typeOfBusiness: '',
        
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onSubmit = () => {
        console.log(this.state)
    };







    render() {
        return(
            <form>
                <div>
            <h1>Commercial</h1>
            </div>
                <input name='firstName' placeholder='First name' value={this.state.firstName} onChange={e => this.change(e)}/>
                <input name='lastName' placeholder='Last name' value={this.state.lastName} onChange={e => this.change(e)}/>
                <br />
                <input name='address'  placeholder='Address' value={this.state.address} onChange={e => this.change(e)}/>
                <input name='city' placeholder='City' value={this.state.city} onChange={e => this.change(e)}/>
                <input name='state' placeholder='State' value={this.state.state} onChange={e => this.change(e)}/>
                <input name='zip' placeholder='Zip' value={this.state.zip} onChange={e => this.change(e)}/>
                <br />
                <input name='phone' placeholder='Phone' value={this.state.phone} onChange={e => this.change(e)}/>
                <input name='email' placeholder='Email' value={this.state.email} onChange={e => this.change(e)}/>
                <input name='birthDate' placeholder='Birthdate' value={this.state.birthDate} onChange={e => this.change(e)}/>
                <input name='typeOfBusiness'placeholder='Type Of Business' value={this.state.typeOfBusiness} onChange={e => this.change(e)}/>
                <br />
                <button onClick={() => this.onSubmit()}>Submit</button>

            </form>
        )
    }
}



export default Auto;