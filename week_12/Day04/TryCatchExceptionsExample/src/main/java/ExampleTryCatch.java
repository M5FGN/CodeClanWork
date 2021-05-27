import exceptions.NullStringException;
import pets.Cat;
import pets.Dog;
import pets.Fish;

public class ExampleTryCatch{
    PetShop shop;

    public void run(){
        setup();

        // Part 2/2 for adding error handling for part 1/2 see PetShop.java
        // Shortcut to add the try/catch block - highlight the shop.xx line and click Option + Cmd + T
        // ex - exception and e - error (so e needs to be updated to ex)
        try {
            shop.findPetByName(null);
        } catch (NullStringException ex) {
            ex.printStackTrace();
            System.out.println("Exception Message: ");
            System.out.println(ex.getMessage());
        } finally {
            System.out.println("and finally ...");
            System.out.println("... I'm done!");
        }

    }

    public void setup(){
        shop = new PetShop();
        shop.addPet(new Dog("RoveR"));
        shop.addPet(new Cat("meowintons"));
        shop.addPet(new Fish("FINlay"));
    }
}