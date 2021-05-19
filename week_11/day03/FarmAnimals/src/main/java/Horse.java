public class Horse extends FarmAnimal {

    private String breed;

    public Horse(String species, String breed) {
        super(species);
        this.breed = breed;
    }

    public String makeANoise() {
        return "neigh";
    }

    public String introduceYourself(String species, String breed, String noise) {
        return "Hi, I am a " + species + " from the " + breed + " family, " + noise + " " + noise + "!";
    }
}
