import React, {Component} from 'react';
import Header from "../Header/Header";
import {connect} from 'react-redux';
import {getHomesQuote, addHomesQuote, editHomesQuote, deleteHomesQuote} from '../../Redux/reducers/home';




class Home extends Component {

    state = {
        address: '',
        city: '',
        state: '',
        zip: '',
        homesQuote: true
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    componentDidMount(){
        this.props.getHomesQuote();
    }

    onSubmit = () => {
        const {address, city, state, zip} = this.state;
        const user_id = this.props.user.user_id;

        this.props.addHomesQuote({address, city, state, zip, user_id})
        .then((response) => {
            console.log(response);
        })
        .catch(err => {
            console.log(err)
        })
    };

    deleteQuote = () => {
        this.props.deleteHomesQuote();
    }

    updateQuote = (address) => {
        this.setState ({
            homesQuote: false,
            address: address
        })
    }



    render() {
        const homesQuote = (this.props.homes && this.props.homes[0]) || null;
        return(
            <div>
                <Header />

                {homesQuote && this.state.homesQuote
                    ?
                    <div className="quote">
                    <h2>Name</h2>
                    <h4>{homesQuote.name}</h4>

                    <h2>Email</h2>
                    <h4>{homesQuote.email}</h4>

                    <h2>Address</h2>
                    <h4>{homesQuote.address}</h4>

                    <h2>City</h2>
                    <h4>{homesQuote.city}</h4>

                    <h2>State</h2>
                    <h4>{homesQuote.state}</h4>

                    <h2>Zip</h2>
                    <h4>{homesQuote.zip}</h4>

                    <button onClick={() => this.deleteQuote()}>Delete Quote</button>
                    <button onClick={() => this.updateQuote(homesQuote.address)}>Edit Quote</button>
                </div>
                :
                <div>
            <h1>Home Insurance</h1>
            <form className='form'>
                {/* <input name='firstName' placeholder='First name' value={this.state.firstName} onChange={e => this.change(e)}/>
                <input name='lastName' placeholder='Last name' value={this.state.lastName} onChange={e => this.change(e)}/>
                <input name='Gender' placeholder='Gender' value={this.state.Gender} onChange={e => this.change(e)}/>
                <input name='birthDate' placeholder='Birthdate' value={this.state.birthDate} onChange={e => this.change(e)}/> */}
                <input name='address'  placeholder='Address' value={this.state.address} onChange={e => this.change(e)}/>
                <input name='city' placeholder='City' value={this.state.city} onChange={e => this.change(e)}/>
                <input name='state' placeholder='State' value={this.state.state} onChange={e => this.change(e)}/>
                <input name='zip' placeholder='Zip' value={this.state.zip} onChange={e => this.change(e)}/>
            
                {/* <input name='phone' placeholder='Phone' value={this.state.phone} onChange={e => this.change(e)}/>
                <input name='email' placeholder='Email' value={this.state.email} onChange={e => this.change(e)}/>
                <input name='licenseNumber' placeholder='Driver License Number' value={this.state.licenseNumber} onChange={e => this.change(e)}/>
                
                <input name='howLongAtAddress' placeholder='How Long At Address' value={this.state.howLongAtAddress} onChange={e => this.change(e)}/>
                
                <br />
                <input name='ifLessThanThree'placeholder='If Less Than 3 Years' value={this.state.ifLessThanThree} onChange={e => this.change(e)}/>
                <input name='dwellingType' placeholder='Dwelling Type' value={this.state.dwellingType} onChange={e => this.change(e)}/>
                <input name='purchasePrice' placeholder='Purchase Price' value={this.state.purchasePrice} onChange={e => this.change(e)}/>
                <input name='Mortgage' placeholder='Mortgage' value={this.state.Mortgage} onChange={e => this.change(e)}/>
                <br /> */}

                {this.state.homesQuote ?
                    <button onClick={() => this.onSubmit()}>Submit</button>
                    :
                    <button onClick={() => this.props.editHomesQuote({address: this.state.address, city: this.state.city, state: this.state.state, zip: this.state.zip, user_id: this.state.user_id})}>update</button>
                }
                

            </form>
            </div>
    }
            </div>
        )
    }
}

const mapStateToProps = state => {
    let {data: user} = state.user
    let {data: home} = state.home
    return {user, home}
}

const mapDispatchToProps = {
    getHomesQuote,
    addHomesQuote,
    editHomesQuote,
    deleteHomesQuote
}



export default connect(mapStateToProps, mapDispatchToProps)(Home)