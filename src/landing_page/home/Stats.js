export default function Stats(){
    return(
        <div className="container p-3">
            <div className="row p-3">
                <div className="col-6 p-3" >
                    <h1 className="mb-5">Trust with confidence</h1>
                    <h4>Customer-first always</h4>
                    <p className="mb-3 fs-5">That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores worth of equity investments.</p>
                    <h4>No spam or gimmicks</h4>
                    <p className="mb-3 fs-5">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h4>The Zerodha universe</h4>
                    <p className="mb-3 fs-5">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h4>Do better with money</h4>
                    <p className="fs-5">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                
                </div>
                <div className="col-6">
                 <img src="ecosystem.png " style={{width:"80%"}}/>
                 <div>
                    <a href ="" className="mx-5" style={{textDecoration:"none"}}>explore our products<i class="fa-solid fa-arrow-right"></i></a>
                    <a href="" className="mx-5" style={{textDecoration:"none"}}> Try kite demo <i class="fa-solid fa-arrow-right"></i></a>
                 </div>
                </div>
            </div>
            
        </div>
    )
}