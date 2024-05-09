printPets = pets => {
    var petResponse = []
    for(pet in pets){petResponse.push({"id": pet.id, "name": pet.name })}
    console.log(petResponse)
}