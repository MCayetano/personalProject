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
        Date1stLic: '',
        maritalStatus: '',
        Home: '',
        year: '',
        make: '',
        model: '',
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
            <form>
                <input name='firstName' placeholder='First name' value={this.state.firstName} onChange={e => this.change(e)}/>
                <input name='lastName' placeholder='Last name' value={this.state.lastName} onChange={e => this.change(e)}/>
                <br />
                <input name='Address'  placeholder='Address' value={this.state.address} onChange={e => this.change(e)}/>
                <input name='City' placeholder='City' value={this.state.city} onChange={e => this.change(e)}/>
                <input name='State' placeholder='State' value={this.state.state} onChange={e => this.change(e)}/>
                <input name='Zip' placeholder='Zip' value={this.state.zip} onChange={e => this.change(e)}/>
                <br />
                <input name='Phone' placeholder='Phone' value={this.state.phone} onChange={e => this.change(e)}/>
                <input name='Email' placeholder='Email' value={this.state.email} onChange={e => this.change(e)}/>
                <input name='Driver License Number' placeholder='Driver License Number' value={this.state.licenseNumber} onChange={e => this.change(e)}/>
                <input name='Birthdate' placeholder='Birthdate' value={this.state.birthDate} onChange={e => this.change(e)}/>
                <br />
                <input name='Gender' placeholder='Gender' value={this.state.Gender} onChange={e => this.change(e)}/>
                <input name='Date First Lic' placeholder='Date First Lic' value={this.state.Date1stLic} onChange={e => this.change(e)}/>
                <input name='Marital Status' placeholder='Marital Status' value={this.state.maritalStatus} onChange={e => this.change(e)}/>
                <input name='Home' placeholder='Home' value={this.state.Home} onChange={e => this.change(e)}/>
                <br />
                <input name='Year'placeholder='Year' value={this.state.year} onChange={e => this.change(e)}/>
                <input name='Make' placeholder='Make' value={this.state.make} onChange={e => this.change(e)}/>
                <input name='Model' placeholder='Model' value={this.state.model} onChange={e => this.change(e)}/>
                <input name='Current Insurance' placeholder='Current Insurance' value={this.state.CurrentIns} onChange={e => this.change(e)}/>
                <input name='Coverage' placeholder='Coverage' alue={this.state.coverage} onChange={e => this.change(e)}/>
                <br />
                <input name='Current Premium' placeholder='Current Premium' alue={this.state.currentPremium} onChange={e => this.change(e)}/>
                <input name='Renewal Date' placeholder='Renewal Date' alue={this.state.renewalDate} onChange={e => this.change(e)}/>
                <br />
                <button onClick={() => this.onSubmit()}>Submit</button>

            </form>
        )
    }
}



export default Auto;