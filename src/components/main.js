import React, { Component } from 'react';
import {  } from "reactstrap";
import { connect } from 'react-redux';
import { fetchPeople } from '../actions/PeopleActon';
import PeoplesName from "../containers/PeoplesName";


class Main extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            modal: false,
            peopleDetail: ""
        }

        this._nextAndPriviousButton = this._nextAndPriviousButton.bind(this);
        this._openModal = this._openModal.bind(this);

    }
    componentWillMount(){
        this.props.dispatch(fetchPeople());
    }

    _nextAndPriviousButton(URL){
        this.props.dispatch(fetchPeople(URL));
    }

    _openModal() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }



    render(){
        const { error, peoples } = this.props
        
        return(
            <main role="main" className="main">
                <div className="content">
                    <PeoplesName  peoplesData={peoples.results}/>
                </div>
                <button className="previousBtn" > {"<< Previous"}</button>
                <button className="nextBtn"> {"Next >>"} </button>
            </main>
        
        )
    }

}

const mapStateToProps = state => {
    return {
        peoples: state.peoples.peoples,
        error: state.peoples.error
    };
}
export default connect(mapStateToProps)(Main);