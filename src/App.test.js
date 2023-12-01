import { fireEvent, render, screen } from '@testing-library/react';
//import App from './App';
//import BookingForm from './components/BookingForm';
import Main from './components/Main';

test('InitalizeTimes function and availableTimes state both return ""', () => {
  const initializeTimes = jest.fn();
  //render(<BookingForm handleChange={handleChange}/>);
  render(<Main/>)

  //const selectInput = screen.getByLabelText(/Choose time/);
  //fireEvent.change(selectInput, {target: {value: "20:00"}});

  expect(initializeTimes).toBeCalled();
  expect(initializeTimes).toReturn("");
});
