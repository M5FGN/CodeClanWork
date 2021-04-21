import CountrySelect from "../components/CountrySelect";
import { render } from '@testing-library/react';

describe ('CountrySelect', () => {

    let container;
    
    // This is dummy data which is being passed in as we can't test the API data.
    beforeEach(() => {
        const countries = [{name: 'France', alpha3Code: "FRA"}, {name: "Scotland", alpha3Code: "SCO"}];
        // This is checking that the function has been called.
        const onCountrySelected = function (alpha3Code) {};
        container = render(<CountrySelect countries={countries} onCountrySelected={onCountrySelected} />);
    });

    it('should have 3 options in select', () => {
        const allOptions = container.getAllByTestId("country-option");
        expect(allOptions.length).toBe(3);
    });

})