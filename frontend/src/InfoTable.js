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
              <td className="led-box"><div className="led-yellow"></div></td>
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

export default InfoTable;
