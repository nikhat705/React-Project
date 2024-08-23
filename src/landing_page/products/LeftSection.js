export default function LeftSection(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-8 mb-5" >
                    <img src="./products-kite.png" style={{width:"90%"}}/>
                </div>
                
                <div className="col-4 mt-5">
                    <h1>Kite</h1>
                    <p className="fs-4  mt-4">Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite</p>
                    <p className="fs-4">experience seamlessly on your Android and iOS devices.</p>
                    <a href="" className="p-5 fs-5 mt-5 fs-4">Try demo →</a> 
                   <a href="" className="fs-4 mt-5">Learn more →</a>
                  
                   <img src="./google-play-badge.svg" className="p-4 mt-3" style={{width:"50%"}}/>
                  
                   <img src="./appstore-badge.svg" className="p-4 mt-3"style={{width:"50%"}}/>
                  
                 
                </div>
            </div>
            
        </div>
    )
}