printPets = pets => {
    const petResponse = [];
    for(let i = 0; i < pets.length; i++){
        const pet = pets[i];
        petResponse.push({ "id": pet.id, "name": pet.name });
    }
    return (petResponse);
}