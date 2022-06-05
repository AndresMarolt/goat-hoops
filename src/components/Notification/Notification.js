import './Notification.css'

const Notification = ({type, text}) => {

    return(
        <p className={`Notification ${type === "success" && "Success"} ${type === "error" && "Error"}`}>
            {text}
        </p>
    )
}

export default Notification;