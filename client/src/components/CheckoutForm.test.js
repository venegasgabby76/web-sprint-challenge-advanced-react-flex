import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText} = render(<CheckoutForm />);

    const header = getByText(/checkout form/i)

    expect(header).toBeInDocument()
});

test("form shows success message on submit with form details", () => {
    

    const firstNameInput = screen.getByLabelText(/firstName/i);
    const lastNameInput = screen.getByLabelText(/lastName/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);

    
    fireEvent.change(firstNameInput, { target: { value: 'Gabby' } });
    fireEvent.change(lastNameInput, { target: { value: 'Venegas' } });
    fireEvent.change(addressInput, { target: { value: '18642 Nordhoff St' } });
    fireEvent.change(cityInput, { target: { value: 'Northridge' } });
    fireEvent.change(stateInput, { target: { value: 'California' } });
    fireEvent.change(zipInput, { target: { value: '91324' } });

    expect(firstNameInput.value).toBe('Gabby');
    expect(lastNameInput.value).toBe('Venegas');
    expect(addressInput.value).toBe('18642 Nordhoff St');
    expect(cityInput.value).toBe('Northridge');
    expect(stateInput.value).toBe('California');
    expect(zipInput.value).toBe('91324');


    //for the button
    const clickButton = screen.getByText('Checkout')
    fireEvent.click(clickButton)

    const yourName = screen.getByText(/gabby/i)
    expect(yourName).toBeInDocument

    //plant submittion
    const successPlants = screen.getByTestId(/successMessgae/i)
    expect(successPlants).toBeInDocument

    

});

