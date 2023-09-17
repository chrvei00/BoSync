import { ReactComponent as Cross } from '../../assets/x-lg.svg';
import './EventPopup.css';

interface EventPopupProps {
    onCloseClick: () => void;
    visible: boolean;
}

export const EventPopup = ({ onCloseClick, visible }: EventPopupProps) => {
    return (
        visible && (
            <div className="event-popup-container">
                <div className="event-popup">
                    <Cross className="close-icon" onClick={onCloseClick} />
                    <h2>EventPopup</h2>
                </div>
            </div>
        )
    );
};
