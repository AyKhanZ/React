import './Border.css'

function Border({source,paragraph}){
    return(
        <div>
	        <img src={source} alt="" />
	        <p>{paragraph}</p>
        </div>
    )
}


export default Border;