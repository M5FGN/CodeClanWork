import java.util.HashMap;

public class Population {

        public static void main(String[] args) {

            HashMap<String, Integer> populations = new HashMap<String, Integer>();

            populations.put("UK", 64100000);
            populations.put("Germany", 80620000);
            populations.put("France", 66030000);
            populations.put("Japan", 126300000);

            Integer getUK = populations.get("UK");
            String outputUK = "UK's Population is: " + getUK.toString();
            System.out.println(outputUK);

            Integer getGermany = populations.get("Germany");
            String outputGermany = "Germany's Population is: " + getGermany.toString();
            System.out.println(outputGermany);

            Integer getFrance = populations.get("France");
            String outputFrance = "France's Population is: " + getFrance.toString();
            System.out.println(outputFrance);

            Integer getJapan = populations.get("Japan");
            String outputJapan = "Japan's Population is: " + getJapan.toString();
            System.out.println(outputJapan);
        }



    }

