public class WordCollection {
//    Declaring the variable words
    private String[] words;

//    Declaring the constructor
    public WordCollection() {
        // String[5] sets the length of the array
        this.words = new String[5];
    }

//    This will only return 5 as the array was set to take 5 values even if it has no values in it the space is kept with null values.
    public int getWordCount() {
        return this.words.length;
    }
}
