import org.junit.Before;
import org.junit.Test;

import static junit.framework.TestCase.assertEquals;

public class SeniorInstructorTest {

    SeniorInstructor seniorInstructor;

    @Before
    public void before() {
        seniorInstructor = new SeniorInstructor("Ally", "G24", "Java", "Python");
    }

    @Test
    public void getName() {
        assertEquals("Ally", seniorInstructor.getName());
    }

    @Test
    public void getCohort() {
        assertEquals("G24", seniorInstructor.getCohort());
    }

    @Test
    public void getModuleTeam() {
        assertEquals("Java", seniorInstructor.getModuleTeam());
    }

    @Test
    public void getHiringTeam() {
        assertEquals("Python", seniorInstructor.getHiringTeam());
    }

    @Test
    public void setModuleTeam() {
        seniorInstructor.setModuleTeam("Python");
        assertEquals("Python", seniorInstructor.getModuleTeam());
    }

    @Test
    public void setHiringTeam() {
        seniorInstructor.setHiringTeam("Java");
        assertEquals("Java", seniorInstructor.getHiringTeam());
    }

    @Test
    public void canTalk() {
        assertEquals("I love hiring Java instructors.", seniorInstructor.talk("Java"));
    }
}

