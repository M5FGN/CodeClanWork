import java.util.HashMap;

public class HashMaps {
    // Shortcut - psvm + tab
    public static void main(String[] args) {

        // Constructor
        // Hashmap<Type for Key, Type for Value> Hashmap_variable_name
        HashMap<String, String> favouriteFruits = new HashMap<String, String>();

//        Adds content to the HashMap - one line per entry.
        favouriteFruits.put("Alice", "Apple");
        favouriteFruits.put("Sarah", "Banana");
        favouriteFruits.put("Bob", "Strawberry");

        // Shortcut - sout + tab
        System.out.println(favouriteFruits.get("Alice"));

        HashMap<String, Integer> ages = new HashMap<String, Integer>();

        ages.put("Alice", 52);
        ages.put("Bob", 12);

        Integer aliceAge = ages.get("Alice");

        String output = "Alice's age is " + aliceAge.toString();
        System.out.println(output);
    }

}
