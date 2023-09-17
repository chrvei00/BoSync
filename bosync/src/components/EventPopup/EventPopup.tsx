import { useState } from 'react';
import { ReactComponent as Cross } from '../../assets/x-lg.svg';
import { useAppDispatch } from '../../hooks/redux';
import { addEventThunk } from '../../store/features/collective/eventThunks';
import { Event } from '../../types/collective';
import { EventColors } from '../../util/color';
import './EventPopup.css';

interface EventPopupProps {
    onCloseClick: () => void;
    visible: boolean;
    date: Date;
}

interface FormType {
    name: string;
    description: string;
    assigned: string;
    isRepeating: boolean;
    repeatInterval: number;
    repeatIntervalCount: string;
    category: string;
}

export const EventPopup = ({ onCloseClick, visible, date }: EventPopupProps) => {
    const [formValues, setFormValues] = useState({
        name: '',
        description: '',
        assigned: '',
        isRepeating: false,
        repeatInterval: 0,
        repeatIntervalCount: '',
        category: 'blue'
    } as FormType);
    const dispatch = useAppDispatch();

    const getFieldHandler = (fieldName: keyof FormType) => {
        return (event: React.ChangeEvent<HTMLInputElement>) => {
            const { value } = event.target;
            setFormValues((prev) => {
                return { ...prev, [fieldName]: value };
            });
        };
    };

    const getSelectFieldHandler = (fieldName: keyof FormType) => {
        return (event: React.ChangeEvent<HTMLSelectElement>) => {
            const { value } = event.target;
            setFormValues((prev) => {
                return { ...prev, [fieldName]: value };
            });
        };
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newEvent: Event = {
            ...formValues,
            deadline: date,
            completed: false
        };

        dispatch(addEventThunk(newEvent));
        onCloseClick();
    };

    return (
        visible && (
            <div className="event-popup-container">
                <div className="event-popup">
                    <Cross className="close-icon" onClick={onCloseClick} />
                    <h2>EventPopup</h2>
                    <form className="event-form-container" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Tittel:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={formValues['name']}
                                onChange={getFieldHandler('name')}
                            />
                        </div>
                        <div className="form-group">
                            <label>Beskrivelse:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={formValues['description']}
                                onChange={getFieldHandler('description')}
                            />
                        </div>
                        <div className="form-group">
                            <label>Ansvarlig person:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={formValues['assigned']}
                                onChange={getFieldHandler('assigned')}
                            />
                        </div>
                        <div className="form-group">
                            <label>Farge:</label>
                            <select
                                className="form-select"
                                onChange={getSelectFieldHandler('category')}
                            >
                                {EventColors.map((color) => (
                                    <option key={color} value={color}>
                                        {color}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button className="btn btn-primary" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    );
};
