import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCollective } from '../store/features/collective/collectiveReducer';

export const useAuth = () => {
    const navigate = useNavigate();
    const collective = useSelector(selectCollective);

    useEffect(() => {
        if (!collective._id) navigate('/auth');
    }, [navigate, collective]);
};
