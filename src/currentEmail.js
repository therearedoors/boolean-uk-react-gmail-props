export const CurrentEmail = props => {
    return <div>
        <h1>{props.email.sender}</h1>
        <h2>{props.email.title}</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat saepe, veniam harum excepturi
            cumque modi consequatur aliquam minima necessitatibus? Soluta ullam ad expedita nemo 
            recusandae est voluptatem maiores reiciendis dicta provident, velit amet placeat. In error 
            eveniet quisquam sunt labore?
        </p>
        <button onClick={() => props.returnToInbox()}>Back</button>
        </div>
}