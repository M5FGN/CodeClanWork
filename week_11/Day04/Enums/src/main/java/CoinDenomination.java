public enum CoinDenomination {

    // List the enum values

    PENNY(1),
    NICKLE(5),
    DIME(10),
    QUARTER(25);

    // final keyword means it cannot be changed
    private final int value;

    // Constructor
    // Multiple Constructors needed to add more values into Enum
    CoinDenomination(int value) {
        this.value = value;
    }

    // Getter
    public int getValue() {
        return value;
    }
}
