import './Notification.css'

const Notification = ({type, text}) => {

    switch(type) {
        case "success": 
            return(
                <p className="Notification Success">
                    {text}
                </p>
            )
        case "error":
            return(
                <p className="Notification Error">
                    {text}
                </p>
            )
    }
    
}

export default Notification;