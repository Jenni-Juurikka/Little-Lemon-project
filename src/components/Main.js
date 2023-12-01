import '../App.css';
import {useReducer, useEffect} from 'react';
import BookingForm from './BookingForm';
/* import Specials from "./Specials";
import Testimonials from './Testimonials';
import About from "./About"; */

/* let startingTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
]; */

export default function Main() {
    const [state, dispatch] = useReducer(updateTimes, {date: new Date(), selectedTime: "17:00", availableTimes: initializeTimes()});

    function updateTimes(action) {
        //const {date, selectedTime} = action;
        //const newTimes = getAvailableTimesForDate(date);
        return state.availableTimes;
    }

    function initializeTimes(action) {
        const {date} = action;
        fetchData(date);
    }

    function handleDateChange(newDate) {
        dispatch({date: newDate, selectedTime: state.selectedTime});
    }

    function submitForm(formData) {
        var submitData = submitAPI(formData);

        if (submitData == true) {
            navigate("/confirmed");
        }
    }

    return (
        <main className='main'>
            <BookingForm
                selectedTime={state.selectedTime}
                availableTimes={state.availableTimes}
                handleChange={() => dispatch({date: state.date})}
                onDateChange={handleDateChange}
                submitForm={submitForm}
            />
        </main>
    );
}