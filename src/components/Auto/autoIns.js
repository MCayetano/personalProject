import React, {Component} from 'react';
import Header from "../Header/Header";
import {connect} from 'react-redux';
import {getAutoQuote, addAutoQuote, editAutoQuote, deleteAutoQuote} from '../../Redux/reducers/auto';

class Auto extends Component {

    state = {
        license: '',
        year: '',
        make: '',
        model: '',
        vin: '',
        autoQuote: true
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    componentDidMount(){
        this.props.getAutoQuote();
    }

    onSubmit = () => {
        const {license, year, make, model, vin} = this.state;
        const user_id = this.props.user.user_id;
        
        this.props.addAutoQuote({license, year, make, model, vin, user_id})
        .then((response) => {
            console.log(response);
        })
        .catch(err => {
            console.log(err)
        })
    };

    deleteQuote = () => {
        this.props.deleteAutoQuote();
    }

    updateQuote = (vin) => {
        this.setState({
            autoQuote: false,
            vin: vin
        });
    }

    render() {
        const autoQuote = (this.props.auto && this.props.auto[0]) || null;
        // let {autoQuote} = this.state;
        console.log(autoQuote)
        console.log("this is props", this.props.auto)
        return(
            <div>
            <Header />

            {autoQuote && this.state.autoQuote
                ? 
                <div className="quote">
                    <h2>Name</h2>
                    <h4>{autoQuote.name}</h4>

                    <h2>Email</h2>
                    <h4>{autoQuote.email}</h4>

                    <h2>License #</h2>
                    <h4>{autoQuote.license}</h4>

                    <h2>Year</h2>
                    <h4>{autoQuote.year}</h4>

                    <h2>Make</h2>
                    <h4>{autoQuote.make}</h4>

                    <h2>Model</h2>
                    <h4>{autoQuote.model}</h4>

                    <h2>Vin</h2>
                    <h4>{autoQuote.vin}</h4>

                    <button onClick={() => this.deleteQuote()}>Delete Quote</button>
                    <button onClick={() => this.updateQuote(autoQuote.vin)}>Edit Quote</button>
                </div>
                :
            <div>
            <h1>Auto Quote</h1>
            <form className='form'>
                {/* <input name='firstName' placeholder='First name' value={this.state.firstName} onChange={e => this.change(e)}/> */}
                {/* <input name='lastName' placeholder='Last name' value={this.state.lastName} onChange={e => this.change(e)}/> */}
                {/* <input name='Gender' placeholder='Gender' value={this.state.Gender} onChange={e => this.change(e)}/>
                <input name='Home' placeholder='Home' value={this.state.Home} onChange={e => this.change(e)}/> */}
                
                {/* <input name='address'  placeholder='Address' value={this.state.address} onChange={e => this.change(e)}/> */}
                {/* <input name='city' placeholder='City' value={this.state.city} onChange={e => this.change(e)}/>
                <input name='state' placeholder='State' value={this.state.state} onChange={e => this.change(e)}/>
                <input name='zip' placeholder='Zip' value={this.state.zip} onChange={e => this.change(e)}/> */}
             
                {/* <input name='phone' placeholder='Phone' value={this.state.phone} onChange={e => this.change(e)}/> */}
                {/* <input name='email' placeholder='Email' value={this.state.email} onChange={e => this.change(e)}/> */}
                <input name='license' placeholder='Driver License Number' value={this.state.licenseNumber}
                 onChange={e => this.change(e)}/>
                {/* <input name='birthDate' placeholder='Birthdate' value={this.state.birthDate} onChange={e => this.change(e)}/> */}
             
                <input name='year'placeholder='Year' value={this.state.year} onChange={e => this.change(e)}/>
                <input name='make' placeholder='Make' value={this.state.make} onChange={e => this.change(e)}/>
                <input name='model' placeholder='Model' value={this.state.model} onChange={e => this.change(e)}/>
                <input name='vin' placeholder='Vin' value={this.state.vin} onChange={e => this.change(e)}/>
                
                {/* <input name='Current Insurance' placeholder='Current Insurance' value={this.state.CurrentIns} onChange={e =>
                 this.change(e)}/>
                <input name='Coverage' placeholder='Coverage' alue={this.state.coverage} onChange={e => this.change(e)}/>
                <input name='Current Premium' placeholder='Current Premium' alue={this.state.currentPremium} onChange={e => 
                    this.change(e)}/>
                <input name='Renewal Date' placeholder='Renewal Date' alue={this.state.renewalDate} onChange={e => this.change(e)}/> */}
               
                {this.state.autoQuote ? 
                    <button onClick={() => this.onSubmit()}>Submit</button>
                    :
                    <button onClick={() => this.props.editAutoQuote({license: this.state.license, year: this.state.year, make: this.state.make, model: this.state.model, vin: this.state.vin, user_id: this.state.user_id})}>Update</button>
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
    let {data:auto} = state.auto
    return {user, auto}
}

const mapDispatchToProps =  {
    getAutoQuote,
    addAutoQuote,
    editAutoQuote,
    deleteAutoQuote
}

export default connect(mapStateToProps, mapDispatchToProps)(Auto)
