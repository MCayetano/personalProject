import React, {Component} from 'react';
import Header from "../Header/Header";




class Home extends Component {

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
        Gender: '',
        howLongAtAddress: '',
        ifLessThanThree: '',
        dwellingType: '',
        purchasePrice: '',
        Mortgage: '',
        
        

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
            <div>
                <Header />
            <form>
            <h1>Home Insurance</h1>
                <input name='firstName' placeholder='First name' value={this.state.firstName} onChange={e => this.change(e)}/>
                <input name='lastName' placeholder='Last name' value={this.state.lastName} onChange={e => this.change(e)}/>
                <input name='Gender' placeholder='Gender' value={this.state.Gender} onChange={e => this.change(e)}/>
                <input name='birthDate' placeholder='Birthdate' value={this.state.birthDate} onChange={e => this.change(e)}/>
                <br />
                <input name='address'  placeholder='Address' value={this.state.address} onChange={e => this.change(e)}/>
                <input name='city' placeholder='City' value={this.state.city} onChange={e => this.change(e)}/>
                <input name='state' placeholder='State' value={this.state.state} onChange={e => this.change(e)}/>
                <input name='zip' placeholder='Zip' value={this.state.zip} onChange={e => this.change(e)}/>
                <br />
                <input name='phone' placeholder='Phone' value={this.state.phone} onChange={e => this.change(e)}/>
                <input name='email' placeholder='Email' value={this.state.email} onChange={e => this.change(e)}/>
                <input name='licenseNumber' placeholder='Driver License Number' value={this.state.licenseNumber} onChange={e => this.change(e)}/>
                
                <input name='howLongAtAddress' placeholder='How Long At Address' value={this.state.howLongAtAddress} onChange={e => this.change(e)}/>
                
                <br />
                <input name='ifLessThanThree'placeholder='If Less Than 3 Years' value={this.state.ifLessThanThree} onChange={e => this.change(e)}/>
                <input name='dwellingType' placeholder='Dwelling Type' value={this.state.dwellingType} onChange={e => this.change(e)}/>
                <input name='purchasePrice' placeholder='Purchase Price' value={this.state.purchasePrice} onChange={e => this.change(e)}/>
                <input name='Mortgage' placeholder='Mortgage' value={this.state.Mortgage} onChange={e => this.change(e)}/>
                <br />
                <button onClick={() => this.onSubmit()}>Submit</button>

            </form>
            </div>
        )
    }
}



export default Home;