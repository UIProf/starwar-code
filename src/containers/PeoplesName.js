import React from 'react';


const PeoplesName = (props) => {

    let peopleList ;

    if (props.peoplesData != undefined){
        peopleList = props.peoplesData.map( item => {
            return <div className="peoplename" key={item.name}>{item.name}</div>;
        });
    }else{
        peopleList = <div >lodding ...</div>;
    }

    return(
        <React.Fragment>
           {peopleList}
        </React.Fragment>
    )
}

export default PeoplesName;