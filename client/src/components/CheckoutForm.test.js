import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />)

    const header = getByText(/checkout form/i)

    expect(header).toBeInTheDocument()

});

test("form shows success message on submit with form details", () => {
   
    render(<CheckoutForm />)

    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)

    fireEvent.change(firstNameInput, { target: { value: 'Gabby' } })
    fireEvent.change(lastNameInput, { target: { value: 'Venegas' } })
    fireEvent.change(addressInput, { target: { value: '2727 St' } })
    fireEvent.change(cityInput, { target: { value: 'Shibuya' } })
    fireEvent.change(stateInput, { target: { value: 'CA' } })
    fireEvent.change(zipInput, { target: { value: '91324' } })


    expect(firstNameInput.value).toBe('Gabby')
    expect(lastNameInput.value).toBe('Venegas')
    expect(addressInput.value).toBe('2727 St')
    expect(cityInput.value).toBe('Shibuya')
    expect(stateInput.value).toBe('CA')
    expect(zipInput.value).toBe('91324')


    const checkoutButton = screen.getByText('Checkout')
    fireEvent.click(checkoutButton)


    const yourName= screen.getByText(/gabby/i)
    expect(yourName).toBeInTheDocument()


    const successPlants = screen.getByTestId(/successMessage/i)
    expect(successPlants).toBeInTheDocument()

});