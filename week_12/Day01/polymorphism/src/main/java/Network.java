import java.util.*;

public class Network {
    private String name;
    ArrayList<IConnect> devices;

    public Network(String name){
        devices = new ArrayList<>();
        this.name = name;
    }

    public String getName(){
        return name;
    }

    public int deviceCount(){
        return devices.size();
    }


    public void disconnectAll(){
        devices.clear();
    }

    public void connect(IConnect device) {
        this.devices.add(device);
    }

}