import java.util.ArrayList;

public class NumberList {

    private ArrayList<Integer> numbers;

    public NumberList() {
        this.numbers = new ArrayList<Integer>();
    }

    public int getNumberCount() {
//        .size is a method so needs () but .length is a property so no () needed.
        return numbers.size();
    }

    public void addNumber(int newNumber) {
        this.numbers.add(newNumber);
    }

    public int getNumberAtIndex(int index) {
        return this.numbers.get(index);
    }


//    public int getTotal() {
//        int total = 0;
//        // Loop - old style
//        for(int i = 0; i < getNumberCount(); i++) {
//            total += getNumberAtIndex(i);
//
//        }
//        return total;
//    }

    public int getTotal() {
        int total = 0;
        // Loop - new style
        for (int number : this.numbers){
            total += number;
        }
        return total;
    }
}
