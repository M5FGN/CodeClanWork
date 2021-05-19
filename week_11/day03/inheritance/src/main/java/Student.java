public class Student extends Person {

    public Student(String name, String cohort) {
    super(name, cohort);
    }

    // See border for symbol which shows that this method overrides the method inherited from the Person class.
    public String talk(String language) {
        return "I love learning " + language;
    }

}
