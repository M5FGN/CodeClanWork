public abstract class Vehicle {

    private String model;
    private int numberOfWheels;

    public Vehicle(String model, int numberOfWheels) {
        this.model = model;
        this.numberOfWheels = numberOfWheels;
    }

    public String drivingInstructions(){
        return "Turn the key to start.";
    }

    public String startEngine() {
        return "Vrrr. Engine is running.";
    }

    // Abstract Method - a promise of a method - meaning any child method must have this method.
    public abstract String boardingInstructions();

    public String getModel() {
        return model;
    }

    public int getNumberOfWheels() {
        return numberOfWheels;
    }
}