import React from 'react';
import Table from 'react-bootstrap/Table';

const InfoTable = props => {
  return (
    <Table striped border="true" hover>
      <thead>
        <tr>
          <th>#</th>
          <th>#</th>
          <th>Submitter</th>
          <th>Description</th>
          <th>Other information</th>
        </tr>
      </thead>
      <tbody>
        {props.issueList.map((issue, index) => {
          return (
            <tr key={issue.id}>
              <td>{index+1}</td>
              <td className="led-box">
                <div className={"led-" + trafficLightColor(issue.createdAt)}></div>
              </td>
              <td>{issue.submitter}</td>
              <td>{issue.description}</td>
              <td>{issue.other_info}</td>
            </tr>
          )})
        }
      </tbody>
    </Table>
  )
}

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

// a and b are javascript Date objects
const dateDiffInDays = (a, b) => {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

const trafficLightColor = (a) => {
  const a_Date = new Date(a);
  const b_Date = new Date(); // Now
  const diff = dateDiffInDays(a_Date, b_Date);

  if (diff < 1) {
    return 'green';
  } else if (diff < 2) {
    return 'yellow';
  } else {
    return 'red';
  }
}

export default InfoTable;
