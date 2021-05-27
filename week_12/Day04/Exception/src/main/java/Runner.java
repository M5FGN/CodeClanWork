public class Runner {

    public static void main(String[] args) {
        try {
            int one = 1;
            int zero = 0;
            System.out.println(one/zero);
        // You can add as more than one catch
        } catch (ArithmeticException ex) {
            System.out.println("Error: " + ex.getMessage());
        }
    }
}
