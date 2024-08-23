export default function Team(){
    return(
        <div className="container">
            <div className="row">
            <h1 className="text-center p-5 ">People</h1>
            </div>
            <div className="row">
                <div className="col-6 p-5 text-center">
                    <img src="./nithin-kamath.jpg" style={{borderRadius:"50%",width:"60%"}}/>
                    <h3  className=" p-3">Nithin Kamath</h3>
                    <p className=" ">Founder, CEO</p>
                </div>
                <div className="col-6 p-5 fs-5 lineHeight">
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p> 
               <p>Playing basketball is his zen.</p>
               <p>Connect on <a href=""  style={{textDecoration:"none"}}> Homepage / TradingQnA / Twitter</a></p>
               </div>
            </div>
        </div>
    )
}