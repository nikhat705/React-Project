export default function Hero(){
    return(
        <div className="container">
            <div className="row text-center p-5">
            <h1 className="mt-5 pt-5 mb-5">Pricing</h1>
            <p className="fs-3 border-bottom pb-5 mb-5">Free equity investments and flat ₹20 intraday and F&O trades</p>
            </div>
            <div className="row p-5">
                <div className=" col-4">
                    <img src="./pricing-eq.svg" className="tradeImg"/>
                    <h2>Free equity delivery</h2>
                    <p className="fs-5 p-4">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4">
                <img src="other-tradesss.svg" />
                <h2>Intraday and F&O trades</h2>
                <p  className="fs-5  p-4">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4">
                <img src="./pricing-eq.svg" id="priceImage"/>
                <h2>Free direct MF</h2>
                <p  className="fs-5  p-4">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
            
            
        </div>
    )
}