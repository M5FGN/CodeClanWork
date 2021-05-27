import device_management.Computer;
import device_management.Monitor;
import device_management.Printer;
import device_management.Speaker;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class ComputerTest {
    Computer computer;
    Monitor monitor;

    @Before
    public void before() {
        monitor = new Monitor(22, 786432);
        computer = new Computer(8, 512, monitor);
    }

    @Test
    public void hasRam() {
        assertEquals(8, computer.getRam());
    }

    @Test
    public void hasHddSize() {
        assertEquals(512, computer.getHddSize());
    }

//    @Test
//    public void hasMonitor() {
//        assertEquals(22, computer.getMonitor().getScreenSize());
//        assertEquals(786432, computer.getMonitor().getPixels());
//    }

    @Test
    public void canOutputData() {
        assertEquals("space invaders is now on screen", computer.outputData("space invaders"));
    }

    @Test
    public void canPrintData() {
        Printer printer = new Printer("Epson", "Stylus", 120, 4);
computer.setOutputDevice(printer);
assertEquals("printing: space invaders", computer.outputData("space invaders"));
    }

    @Test
    public void canOutputSound(){
        Speaker speaker = new Speaker(100);
        computer.setOutputDevice(speaker);
        assertEquals("playing: Beep!", speaker.outputData("Beep!"));
    }
}
