import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPeople } from '../actions/PeopleActon';
import PeoplesName from "../containers/PeoplesName";
import ModalPopup from '../containers/ModalPopup';


class Main extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            modal: false,
           selectedPeople: ""
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
        console.log("modal : ", this.state.modal);
    console.log("p0 data; ", this.state.selectedPeople);
        
        return(
            <main role="main" className="container">
                <PeopleName
          peoplesData={peoples["results"]}
          onSelectedPeople={selectedPeople =>
            this.setState(prevState => ({
              selectedPeople: selectedPeople,
              modal: !prevState.modal
            }))
          }
        />
         <button
          disabled={peoples.previous != null ? "" : "disabled"}
          className="previousBtn"
          onClick={() => this._nextAndPriviousButton(peoples.previous)}
        >
          {" "}
          {"<< Previous"}
        </button>
        <button
          disabled={peoples.next != null ? "" : "disabled"}
          className="nextBtn"
          onClick={() => this._nextAndPriviousButton(peoples.next)}
        >
          {" "}
          {"Next >>"}{" "}
        </button>
        <ModalPopup
          popupModal={modal => {
            this.setState(prevState => ({
              modal: !prevState.modal
            }));
          }}
          modal={this.state.modal}
        />
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
