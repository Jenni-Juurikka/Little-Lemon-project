import "../App.css";
import {useReducer} from 'react';
import {useNavigate} from 'react-router-dom';
import Nav from "./Nav";
import BookingForm from "./BookingForm";
import Footer from "./Footer";

export default function BookingPage() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
    const navigate = useNavigate();

    function seededRandom(seed) {
        var m = 2 ** 35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
        return (s = (s * a) % m) / m;
        };
    }

    function fetchAPI(date) {
        let result = [];
        let dt = new Date(date);
        let seed = dt.getDate();

        let random = seededRandom(seed);
        for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ":00");
        }
        if (random() < 0.5) {
            result.push(i + ":30");
        }
        }
        return result;
    }

    function submitAPI(formData) {
        return true;
    }

    function updateTimes(date) {
        fetchAPI(date);
    }

    function initializeTimes() {
        fetchAPI(new Date());
    }

    function submitForm(formData) {
        if (submitAPI(formData)) {
            navigate("/confirmed");
        }
    }

    return (
        <>
            <Nav/>
            <BookingForm
                availableTimes={availableTimes}
                handleDateChange={dispatch}
                submitForm={submitForm}
            />
            <Footer/>
        </>
    );
}