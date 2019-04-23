import React from "react";

const PeopleList = props => {
  let peopleList;

  if (props.peoplesData != undefined) {
    peopleList = props.peoplesData.map(item => {
      return (
        <div
          className="peoplename"
          key={item.name}
          onClick={() => props.onSelectedPeople(item)}
        >
          {item.name}
        </div>
      );
    });
  } else {
    peopleList = <div>lodding ...</div>;
  }
  return <div className="content">{peopleList}</div>;
};

export default PeopleList;
