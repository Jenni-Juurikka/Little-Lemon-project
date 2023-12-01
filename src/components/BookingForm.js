import { useState } from "react";
import "../App.css";

export default function BookingForm(props) {
    const [date, setDate] = useState(new Date());
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    function handleChange(e) {
        const {name, value} = e.target;

        if (name == "res-date") {
            setDate(value);
            props.onDateChange(value);
        } else if (name == "res-time") {
            props.handleChange({date, time: value});
        }
    }

    return (
        <form style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={() => handleChange({name: "res-date"})} required/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={props.selectedTime} onChange={() => handleChange({name: "res-time"})} required>
                {props.availableTimes.map(time => (
                    <option key={time}>{time}</option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} required/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" onSubmit={props.submitForm({date, time, guests, occasion})}/>
        </form>
    );
}