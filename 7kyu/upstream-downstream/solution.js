// PREP 
//
// Parameter: Distance, Boat Speed, Up Vs Down Stream Direction And Stream Speed Will be inside a string
//
// Return is time taken to cover distance
// If result has decimal places, round them 2 fixed positions
// To Obtain result we must dividance distance by net speed
// Distance is already provided
// Boat speed is provided but we must extract stream speed and direction from String
// return distance divided by net speed
function time(distance,boatSpeed,stream){
    //Write your own Code!
      
      let streamSpeed = Number(stream.split(' ')[1]);
      let streamDirection = stream.split(' ')[0]  
      return streamDirection == "Upstream" ? Number((distance / (boatSpeed - streamSpeed)).toFixed(2)) : Number((distance / (boatSpeed + streamSpeed)).toFixed(2))  
      
    }
    
    // Pseudocode
    // return the distance divided by the speed
    // the distance is provided but the speed is either boatSpeed + upstream or boatSpped - downstream 
    
    // Example
    // time(24,10,"Downstream 2") returns 2