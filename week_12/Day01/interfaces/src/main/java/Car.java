public class Car implements Convert {

    private String name;
    private int age;

    public Car(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Note: Over write symbol in side bar
    public String convert() {
        return "Car data";
    }

//    public String convert() {
//        return "Car data";
//    }

}
