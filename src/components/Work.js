import React from 'react';
import WorkItem from './WorkItem';

export default class Work extends React.Component {

  getWorkExperience() {
    const workItems = [];
    $.each(this.props.workData, function(i, val) {
      workItems.push(<WorkItem key={i} workItemData={val}/>);
    });
    return workItems;
  }

  render() {
    return (
      <section className="work">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-building"></i> Experiência</h2>
        {this.getWorkExperience()}
      </section>
    );
  }

};
