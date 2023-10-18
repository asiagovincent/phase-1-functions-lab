// Code your solution in this file!


function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42);
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  
  // Test the functions
  console.log('Distance from HQ in Blocks:', distanceFromHqInBlocks(43)); // Example test
  console.log('Distance from HQ in Feet:', distanceFromHqInFeet(43)); // Example test
  console.log('Distance Travelled in Feet:', distanceTravelledInFeet(34, 38)); // Example test
  console.log('Fare Price:', calculatesFarePrice(34, 38)); // Example test