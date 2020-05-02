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
        licenseNumber: '',
        birthDate: '',
        Gender: '',
        Home: '',
        year: '',
        make: '',
        model: '',
        Vin: '',
        currentIns: '',
        coverage: '',
        currentPremium: '',
        renewalDate: '',
        

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
            <form className='form'>
             <div>
            <h1>Auto Insurance</h1>
            </div>
                <input name='firstName' placeholder='First name' value={this.state.firstName} onChange={e => this.change(e)}/>
                <input name='lastName' placeholder='Last name' value={this.state.lastName} onChange={e => this.change(e)}/>
                <input name='Gender' placeholder='Gender' value={this.state.Gender} onChange={e => this.change(e)}/>
                <input name='Home' placeholder='Home' value={this.state.Home} onChange={e => this.change(e)}/>
                <br />
                <input name='address'  placeholder='Address' value={this.state.address} onChange={e => this.change(e)}/>
                <input name='city' placeholder='City' value={this.state.city} onChange={e => this.change(e)}/>
                <input name='state' placeholder='State' value={this.state.state} onChange={e => this.change(e)}/>
                <input name='zip' placeholder='Zip' value={this.state.zip} onChange={e => this.change(e)}/>
                <br />
                <input name='phone' placeholder='Phone' value={this.state.phone} onChange={e => this.change(e)}/>
                <input name='email' placeholder='Email' value={this.state.email} onChange={e => this.change(e)}/>
                <input name='licenseNumber' placeholder='Driver License Number' value={this.state.licenseNumber} onChange={e => this.change(e)}/>
                <input name='birthDate' placeholder='Birthdate' value={this.state.birthDate} onChange={e => this.change(e)}/>
                <br />
                <input name='Year'placeholder='Year' value={this.state.year} onChange={e => this.change(e)}/>
                <input name='Make' placeholder='Make' value={this.state.make} onChange={e => this.change(e)}/>
                <input name='Model' placeholder='Model' value={this.state.model} onChange={e => this.change(e)}/>
                <input name='Vin' placeholder='Vin' value={this.state.Vin} onChange={e => this.change(e)}/>
                <br />
                <input name='Current Insurance' placeholder='Current Insurance' value={this.state.CurrentIns} onChange={e => this.change(e)}/>
                <input name='Coverage' placeholder='Coverage' alue={this.state.coverage} onChange={e => this.change(e)}/>
                <input name='Current Premium' placeholder='Current Premium' alue={this.state.currentPremium} onChange={e => this.change(e)}/>
                <input name='Renewal Date' placeholder='Renewal Date' alue={this.state.renewalDate} onChange={e => this.change(e)}/>
                <br />
                <button onClick={() => this.onSubmit()}>Submit</button>

            </form>
        )
    }
}



export default Auto;