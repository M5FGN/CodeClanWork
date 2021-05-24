import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CarTest {

    @Test

    public void canConvertCar(){
        Car car = new Car("Zafira", 6);

        String message = Converter.process(car);

        assertEquals("Car data", message);
    }
}
