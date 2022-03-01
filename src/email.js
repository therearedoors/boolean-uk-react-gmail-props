export const Email = props => {
    const email = props.email

    return <li
    key={props.key}
    className={`email ${email.read ? 'read' : 'unread'}`}
  >
    <div className="select">
      <input
        className="select-checkbox"
        type="checkbox"
        checked={props.email.read}
        onChange={() => props.toggleRead(email)}
      />
    </div>
    <div className="star">
      <input
        className="star-checkbox"
        type="checkbox"
        checked={email.starred}
        onChange={() => props.toggleStar(email)}
      />
    </div>
    <div className="sender">{email.sender}</div>
    <div className="title">{email.title}</div>
  </li>
}