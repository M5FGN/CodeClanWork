import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;

import static org.junit.Assert.assertEquals;

public class VehicleTest {

    private Vehicle vehicle;

// BELOW: Inheritance related tests:

    @Test
    public void carAsVehicle() {
        vehicle = new Car("Audi A8", 2);
        assertEquals("Audi A8", vehicle.getModel());
    }

    @Test
    public void motorbikeAsVehicle() {
        vehicle = new Motorbike("Harley");
        assertEquals("Harley", vehicle.getModel());
    }

    @Test
    public void changeTypeOfVehicle() {
        // This works because car and motrobike are inheriting from vehicle and we are creating a car/motorbike not a vehicle.
        vehicle = new Car("Audi A8", 2);
        vehicle = new Motorbike("Harley");
        assertEquals("Harley", vehicle.getModel());
    }

    @Test
    public void collectionOfParentClassObjects() {
        // by using Vehicle a car and motorbike can be added because they inherit from the vehicle class.
        ArrayList<Vehicle> garage = new ArrayList<Vehicle>();
        garage.add( new Car("Audi A8", 2));
        garage.add( new Motorbike("Harley"));
        // garage.add( new Vehicle("Mini Morris", 4)); //note: this won't work with abstract classes
        assertEquals(2, garage.size());
    }

    @Test
    public void objectRemembersItsType() {
        vehicle = new Car("Audi A8", 2);
        Car car  = (Car) vehicle; // Example of type casting Vehicle to Car - casting is to be avoided as it is not good practice but does have some uses ie below - using a method from car.
        assertEquals(2, car.getNumberOfDoors());
    }
}