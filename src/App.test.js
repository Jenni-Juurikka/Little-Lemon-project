import { fireEvent, render, screen } from '@testing-library/react';
//import App from './App';
import BookingForm from './components/BookingForm';
import BookingPage from './components/BookingPage';

test('Renders BookingForm header', () => {
  render(<BookingForm/>);

  const labelElement = screen.getByLabelText("/Choose date:/");
  expect(labelElement).toBeInTheDocument();
});

test('InitializeTimes function return an array of available times', () => {
  render(<BookingForm/>);
  const time = screen.getAllByTestId("res-time");

  expect(time).toContain("17:00");
});