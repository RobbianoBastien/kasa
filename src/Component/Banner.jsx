import './Banner.scss'
function Banner({title,img}){
    return(
        <div className='banner'>
            <img src={img} className='banner__img' alt=''></img>
            {title && <h2 className='banner__title'>{title}</h2>} 
        </div>
    )
}

export default Banner