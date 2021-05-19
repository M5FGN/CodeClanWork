import org.junit.Before;
import org.junit.Test;

import static junit.framework.TestCase.assertEquals;

public class PersonTest {

    Person person;

    @Before

    public void before() {
        person = new Person("Katy", "G24");
    }

    @Test
    public void hasName() {
        assertEquals("Katy", person.getName());
    }

    @Test
    public void hasCohort() {
        assertEquals("G24", person.getCohort());
    }

    @Test
    public void canChangeName() {
        person.setName("Anna");
        assertEquals("Anna", person.getName());
    }

    @Test
    public void canChangeCohort() {
        person.setCohort("G8");
        assertEquals("G8", person.getCohort());
    }

    @Test
    public void canTalk() {
        assertEquals("I love Java", person.talk("Java"));
    }

}
