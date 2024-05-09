counterPets = petList => {
    var petCount = {}

    for(let i = 0; i < petList.length; i++){
        const pet = petList[i];
        if(petCount[pet.name]) {
            petCount[pet.name]++;
        } else {
            petCount[pet.name] = 1;
        }
    }

    return {
        petCount
    };
    
}