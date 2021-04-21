describe("App", () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    });

    it('Loads the app', () => {
        const counter = cy.get('h1');
        counter.should('contain', "0")
    })


    it ('Should have 251 items in the select', () => {
        const countrySelectOptions = cy.get('#country-selector option');
        countrySelectOptions.should('have.length', 251)
    })

    it('Should be able to select an option', () => {
        cy.get('#country-selector').select('France');
    })

}) 