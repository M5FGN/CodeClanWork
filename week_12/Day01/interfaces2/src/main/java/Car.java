public class Car extends Vehicle implements IStart {

    private int odometerReading;


    public Car(String make, String model){
    super(make, model);
        this.odometerReading = 0;
    }

//    public String getMake() {
//        return make;
//    }
//
//    public String getModel() {
//        return model;
//    }

    public int getOdometerReading() {
        return odometerReading;
    }

    public void move(int distance){
        this.odometerReading += distance;
    }

    public String start() {
        return "Switch on the Ignition";
    }

    public String stop() {
        return "Stop!";
    }


}
