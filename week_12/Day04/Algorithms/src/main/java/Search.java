import java.lang.reflect.Array;
import java.util.ArrayList;

public class Search {

    public Boolean linearSearch(ArrayList<Integer> array, int searchNumber) {
        for (int number : array) {
            if (number == searchNumber) {
                return true;
            }
        }
        // returns false if full loop runs and no result found.
        return false;
    }

    public Boolean binarySearch(ArrayList<Integer> array, int searchNumber) {
        if (array.size() == 0) {
            return false;
        }
        int midIndex = 0;
        if (array.size() > 1) {
            // find the mid point
            midIndex = (int) Math.ceil((double) array.size() / 2);
        }

        int midPoint = array.get(midIndex);

        if (searchNumber == midPoint) {
            return true;
        }

        ArrayList<Integer> newSearchArea;

        if (searchNumber < midPoint) {
            // New list of numbers smaller than mid
            newSearchArea = new ArrayList<>(array.subList(0, midIndex));
        } else {
            newSearchArea = new ArrayList<>(array.subList(midIndex + 1, array.size()));
        }

        //Example of Recursion - where function calls itself.
        return binarySearch(newSearchArea, searchNumber);

    }
}
