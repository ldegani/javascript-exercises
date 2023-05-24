const findTheOldest = function(people) {
  const older = people.reduce((oldest, currentPerson) => 
    getDeath(oldest.yearOfDeath) - oldest.yearOfBirth > getDeath(currentPerson.yearOfDeath) - currentPerson.yearOfBirth ? 
    oldest : currentPerson, 0
  )
  return older;
};

const getDeath = function(death) {
  if (!death) {
    const death = new Date().getFullYear();
    return death
  }
  return death
};

// Do not edit below this line
module.exports = findTheOldest;