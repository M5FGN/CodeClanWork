public class Coin {

    private CoinDenomination denomination;

    public Coin(CoinDenomination denomination) {
        this.denomination = denomination;
    }

    public CoinDenomination getDenomination() {
        return denomination;
    }

    public int getValueFromEnum() {
    return this.denomination.getValue();
    }
}
