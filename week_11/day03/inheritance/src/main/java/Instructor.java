
// Instructor inherits from person
public class Instructor extends Person {

    private String moduleTeam;

    public Instructor(String name, String cohort, String moduleTeam) {
        // inherit from person
        super(name, cohort);
        // Instructor Specific instances
        this.moduleTeam = moduleTeam;
    }

    public String getModuleTeam() {
        return moduleTeam;
    }

    public void setModuleTeam(String moduleTeam) {
        this.moduleTeam = moduleTeam;
    }
}