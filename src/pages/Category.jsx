import { useState, useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import { getFilteredCategory } from '../api';
import { MealList } from '../components/MealList';
import { Preloader } from '../components/Preloader';

function Category() {
    const {name} = useParams();
    const [meals, setMeals] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getFilteredCategory(name).then(data => setMeals(data.meals));
    }, [name]);

    return (
        <>
            <button className='btn' onClick={() => navigate(-1)}>Go back</button>
            {!meals.length ? <Preloader /> : <MealList meals={meals} />}
        </>
    )
}

export {Category}