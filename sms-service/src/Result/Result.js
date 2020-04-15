import React from "react";
import { Table, Badge } from 'reactstrap';

const result = (props) => {

  return (
    <Table hover>
      <thead>
        <tr>
          <th>Mobile</th>
          <th>Text</th>
          <th>CreateDate</th>
          <th>AppName</th>
          <th>Provider_ID</th>
          <th>Statuses</th>
        </tr>
      </thead>
      <tbody>
        {props.messages.map(message => (
          <tr key={message.id}>
            <th scope="row">{message.mobile}</th>
            <td>{message.text}</td>
            <td>{message.createDate}</td>
            <td>{message.appName}</td>
            <td>{message.providedId}</td>
            <td>
              {message.isSent ? (<Badge color="success">Sent</Badge>) : null}
              {message.isClosed ? (<Badge color="secondary">Closed</Badge>) : null}
              {message.isError ? (<Badge color="danger">Error</Badge>) : null}
              {message.isDelivered ? (<Badge color="success">Delivered</Badge>) : null}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default result;