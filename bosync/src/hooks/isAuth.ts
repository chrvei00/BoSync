import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCollective, setUser } from '../store/features/collective/collectiveReducer';
import { getCollectiveByIdThunk } from '../store/features/collective/collectiveThunks';
import { getUser } from '../util/session';
import { useAppDispatch } from './redux';

export const useAuth = () => {
    const navigate = useNavigate();
    const collective = useSelector(selectCollective);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!collective._id) {
            const user = getUser();
            if (user) {
                dispatch(getCollectiveByIdThunk(user.collective));
                dispatch(setUser(user));
            } else {
                navigate('/auth');
            }
        }
    }, [collective._id, dispatch, navigate]);

    return !!collective._id;
};
