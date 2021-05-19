public class Sheep extends FarmAnimal {

    public Sheep(String species) {
        super(species);
    }

    public String introduceYourself(String species, String noise) {
        return "Hi, I am a " + species + ", " + noise + " " + noise + "!";
    }

    public String makeANoise() {
        return "baa";
    }

}
