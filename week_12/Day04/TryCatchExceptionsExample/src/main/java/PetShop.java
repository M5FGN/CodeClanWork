import behaviours.Pet;
import exceptions.NullStringException;

import java.util.ArrayList;

public class PetShop{

    private ArrayList<Pet> stock;

    public PetShop(){
        stock = new ArrayList<Pet>();
    }
    public Pet findPetByName(String searchName) throws NullStringException {

        // Part 1/2 for adding error handling for part 2/2 see ExampleTryCatch.java
        if (searchName == null) {
            throw new NullStringException("Cannot Search for a pet with null instead of a String");
        }
        String searchLower = searchName.toLowerCase();
        for (Pet pet : stock){
            String petName = pet.getName().toLowerCase();
            if (petName.equals(searchLower)){
                return pet;
            }
        }
        return null;
    }

    public void addPet(Pet pet){
        stock.add(pet);
    }

}