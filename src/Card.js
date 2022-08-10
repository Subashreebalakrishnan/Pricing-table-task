 
 import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
 import {faCheck,faTimes} from "@fortawesome/free-solid-svg-icons";
 
 function Card({item}) {
    return (
       <div className="col-lg-4"> 
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{item.name}</h5>
            <h6 className="card-price text-center">{item.currency}{item.Price}<span className="period">{item.Period}</span></h6>
            <hr/>
            <ul className="fa-ul">
              {item.Features.map((ele)=>{

                    return (

                      <li className={!ele.isEnable ? "text-muted": ""}>
                        <span className="fa-li">
                          
                          {
                               !ele.isEnable ?  <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faCheck} />
                           }  
                          </span>
                          <span>
                            {
                               ele.isBold ? <strong>{ele.title}</strong> : ele.title

                           }  
                          </span>
                          </li> 

                    );
                })}
              </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
       );

    
} 
export default Card;