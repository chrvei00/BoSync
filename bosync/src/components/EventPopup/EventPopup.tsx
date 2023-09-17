import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { ReactComponent as Cross } from '../../assets/x-lg.svg';
import { useAppDispatch } from '../../hooks/redux';
import { selectCollective } from '../../store/features/collective/collectiveReducer';
import { addEventThunk, updateEventThunk } from '../../store/features/collective/eventThunks';
import { Event } from '../../types/collective';
import { EventColors, eventCategoryColorTranslator } from '../../util/color';
import './EventPopup.css';

interface EventPopupProps {
    onCloseClick: () => void;
    visible: boolean;
    date: Date;
    event: Event | null;
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

const validateForm = (formValues: FormType) => {
    if (!formValues.name) {
        toast.error('Du må skrive inn en tittel');
        return false;
    }
    if (!formValues.description) {
        toast.error('Du må skrive inn en beskrivelse');
        return false;
    }
    if (!formValues.assigned) {
        toast.error('Du må velge en ansvarlig person');
        return false;
    }
    return true;
};

export const EventPopup = ({ onCloseClick, visible, date, event }: EventPopupProps) => {
    const collective = useSelector(selectCollective);
    const dispatch = useAppDispatch();

    const formDefaultValues = {
        name: '',
        description: '',
        assigned: '',
        isRepeating: false,
        repeatInterval: 0,
        repeatIntervalCount: '',
        category: EventColors[0]
    } as FormType;

    const [formValues, setFormValues] = useState(formDefaultValues);

    useEffect(() => {
        if (event) {
            setFormValues({
                name: event.name,
                description: event.description,
                assigned: event.assigned,
                isRepeating: event.isRepeating,
                repeatInterval: event.repeatInterval,
                repeatIntervalCount: event.repeatIntervalCount,
                category: event.category
            });
        }
    }, [event]);

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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newEvent: Event = {
            ...formValues,
            deadline: date,
            completed: event?.completed || false,
            _id: event?._id
        };
        if (!validateForm(newEvent)) {
            return;
        }

        if (newEvent._id) {
            dispatch(updateEventThunk(newEvent));
        } else {
            dispatch(addEventThunk(newEvent));
        }
        setFormValues(formDefaultValues);
        onCloseClick();
    };

    return (
        visible && (
            <div className="event-popup-container">
                <div className="event-popup">
                    <Cross className="close-icon" onClick={onCloseClick} />
                    <h2>{event ? 'Rediger gjøremål' : 'Legg til nytt gjøremål'}</h2>
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
                            <select
                                className="form-control"
                                onChange={getSelectFieldHandler('assigned')}
                                value={formValues.assigned}
                            >
                                {collective.members.map((member) => (
                                    <option key={member} value={member}>
                                        {member}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Farge:</label>
                            <select
                                className="form-select"
                                onChange={getSelectFieldHandler('category')}
                                value={formValues.category}
                            >
                                {EventColors.map((color) => (
                                    <option key={color} value={color}>
                                        {eventCategoryColorTranslator[color]}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button className="btn btn-primary" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
                <Toaster />
            </div>
        )
    );
};
