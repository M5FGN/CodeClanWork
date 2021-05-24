public class Bicycle extends Vehicle {
    private int distanceTravelled;

    public Bicycle(String make, String model) {
        super(make, model);
        this.distanceTravelled = 0;
    }

    public int getDistanceTravelled() {
        return distanceTravelled;
    }

    public void move(int distance){
        this.distanceTravelled += distance;
    }

    public String stop() {
        return "Stop!";
    }
}
