import Laptop from "./component/laptop.js";
import {sum1_100} from "./component/laptop";

function App(Props){
    return(
    
        
<div>
<Laptop imagelink="https://m.media-amazon.com/images/I/81pZfQvoYkL._SL1500_.jpg"
 imagename="HP 15 AMD Ryzen 5 5500U 15.6 inch(39.6 cms) FHD Laptop "
  price="45,000">
  </Laptop>

  <Laptop imagelink="https://m.media-amazon.com/images/I/71nTZkJByLL._SX450_.jpg"
 imagename="HP 15 AMD Ryzen 3 3250U 15.6 inches FHD Thin and Light Laptop (8GB RAM/256GB"
  price="50,000">
  </Laptop>
  
  <Laptop imagelink="https://m.media-amazon.com/images/I/81kf96c9T+L._SL1500_.jpg"
 imagename="HP Pavilion 15 11th Gen Intel Core i5-8GB RAM/512GB SSD"
  price="55,000">
  </Laptop>
  <sum1_100></sum1_100>  
</div>
    );
}
export default App;
