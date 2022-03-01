import {Email} from "./email"

export const Emails = props => {

    return <ul>
    {props.emails.map((email, index) => (
        <Email key= {index} email={email} toggleRead={props.toggleRead} toggleStar={props.toggleStar} viewEmail={props.viewEmail}/>
    ))}
  </ul>
}