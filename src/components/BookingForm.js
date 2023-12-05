import { useState } from "react";
import "../App.css";

export default function BookingForm({availableTimes, handleDateChange, submitForm}) {
    const timesArray = Array.from(availableTimes);

    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(timesArray[0]);
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");

    function handleChange(e) {
        setDate(e.target.value);
        handleDateChange(e.target.value);
    }

    function validateData() {
        if (date < (new Date().toLocaleDateString())) {
            alert("Invalid date. Please try again.");
        } else if ((guests < 1 || guests > 10) || guests.type() !== "number") {
            alert("Amount of guests must be a number and can't be less than 1 or more than 10.");
        } else {
            return true;
        }
    }

    return (
        <section className="bookingPage">
            <form className="bookingForm" style={{display: "grid", maxWidth: "200px", gap: "20px"}} onSubmit={submitForm({date, time, guests, occasion})}>
                <h2>Book a table</h2>

                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={handleChange} required/>
                <label htmlFor="res-time">Choose time</label>
                <select test-id="res-time" id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
                    {timesArray.map(available => <option key={available}>{available}</option>)}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} required/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" onClick={validateData}/>
            </form>
        </section>
    );
}