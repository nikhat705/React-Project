

export default function Hero(){
    return(
        <section className="container-fluid" id="supportHero" >
            <div className=" p-5" id="supportWrapper" >
              
               <h4 className="mt-5">Support Portal</h4>
               <a href="">Track tickets</a> 
                </div> 
               
           <div className="row mx-5 ">
            
           <div className="col-6  p-5">
            <h4 className="fs-3 mb-5">Search for an answer or browse help topics to create a ticket</h4>
            <input placeholder="Ex: how do i activate F&O , why is my order getting rejected" />
           <br/>
            <a  href="" >Track account opening </a>
            <a href="" > Track segment activation</a>
            <a href=""> Intraday margins</a>
            <a href=""> Kite user manual</a>


           </div>
           <div className="col-6  p-5">
            <h4>Featured</h4>
            <a href="">1.MCX market will open at 10 AM [Resolved]</a><br/>
            <a href="" >2.Surveillance measure on scrips - July 2024</a>
           </div>
            
            </div>         
                  
           
               
        
        </section>
    )
}