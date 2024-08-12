import './Banner.scss'
function Banner({title,img}){
    return(
        <div className='banner'>
            <img src={img} alt=''></img>
            {title && <h2>{title}</h2>} 
        </div>
    )
}

export default Banner