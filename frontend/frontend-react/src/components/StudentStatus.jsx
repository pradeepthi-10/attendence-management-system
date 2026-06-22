

function StudentStatus(props) {
  return (
    <tr>
      <td>{props.rollno}</td>
      <td>{props.name}</td>
      <td>{props.status}</td>
    </tr>
  )
}

export default StudentStatus