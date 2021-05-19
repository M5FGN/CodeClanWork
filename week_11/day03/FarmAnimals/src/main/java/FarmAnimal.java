public abstract class FarmAnimal {

    private String species;

    public FarmAnimal(String species) {
        this.species = species;
    }

    public String getSpecies() {
        return species;
    }

    public abstract String makeANoise();
}
