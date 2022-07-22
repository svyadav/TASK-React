import React from "react";
export default function Card({props}){
    return (
        <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.subscription}</h5>
            <h6 className="card-price text-center">${props.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span><span className={props.subscription==="FREE"?props.notbold:props.bold}>{props.user}</span></li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.storage}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
              <li className={props.subscription==="FREE"?props.mute:props.blank}><span className="fa-li"><i className={props.subscription==="FREE"?props.uncheck:props.check}></i></span>Unlimited
                Private Projects</li>
              <li className={props.subscription==="FREE"?props.mute:props.blank}><span className="fa-li"><i className={props.subscription==="FREE"?props.uncheck:props.check}></i></span>Dedicated
                Phone Support</li>
              <li className={props.subscription==="FREE"?props.mute:props.blank}><span className="fa-li"><i className={props.subscription==="FREE"?props.uncheck:props.check}></i></span><b>{props.subdomain}</b> Free domain
              </li>
              <li className={props.subscription==="PRO"?props.blank:props.mute}><span className="fa-li"><i className={props.subscription==="PRO"?props.check:props.uncheck}></i></span>Monthly Status
                Reports</li>
            </ul>
            <div className="d-grid">
              <a href="/" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
        </div>
    )
}