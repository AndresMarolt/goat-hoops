import './AboutUs.css'

const AboutUs = () => {
    return(
        <div className="Nosotros">
            <h1 className='Nosotros_title'>Sobre Nosotros</h1>

            <div className='Nosotros_info'>
                <img className='Nosotros_info-img' src="../img/logo.png"></img>
                <p className='Nosotros_info-parrafo'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus tellus eros, nec dapibus elit commodo nec. Etiam egestas 
                    augue augue, sit amet porttitor felis rhoncus quis. Nulla facilisi. Aenean feugiat pretium sodales. Aliquam libero elit, scelerisque 
                    eget dolor eget, tempor rutrum lectus. Morbi euismod velit est, nec pharetra mauris faucibus vel. Proin eget lectus justo. Suspendisse
                    quis sapien sit amet ante lacinia posuere ac vel sapien. Curabitur mattis gravida orci, id placerat diam commodo a. Nullam non neque nulla. 
                    Nullam lectus nunc, commodo et ornare et, efficitur viverra ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere 
                    cubilia curae;
                </p>
            </div>
        </div>
    )
}

export default AboutUs;