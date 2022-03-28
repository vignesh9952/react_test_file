 function Laptop(Props){
    return(
        <div>
			<img
				src={Props.imagelink}
				alt="laptop"
				width="350"
				height="350"
			/>
			<h3>{Props.imgname}</h3>
			<h3>Free COD</h3>
			<h4>RS:<small><del>80,0000</del></small></h4>
			<h4>DIS price:{Props.price}</h4>
        </div>
    );
}
 
	
  



export default Laptop;