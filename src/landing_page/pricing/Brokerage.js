

export default function Brokerage(){
    return(
        <div className="container">
            <div className="row p-5">
                <div className="col-8"> 
                    <a href="" className="fs-3 p-5 mt-5" style={{textDecoration:"none"}}>Brokerage calculator</a>
                    <ul>
                        <li className="fs-5 mt-5">Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                        <li className="fs-5 ">Digital contract notes will be sent via e-mail.</li>
                        <li className="fs-5 ">Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li className="fs-5">For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li className="fs-5 ">For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li className="fs-5 mb-5 ">If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                        
                    
                    </ul>
                </div>
                <div className="col-4"> 
                    <a href=""  className="fs-3" style={{textDecoration:"none"}}>List of charges</a>
                </div>

            </div>
            </div>
            
    
    )
}