import React from 'react';
import { Check } from 'lucide-react';

const Feature = ({feature}) => {
    console.log(feature);
    return (
        <li className='flex items-center gap-1.5'> <span><Check color="#60dd1d" /></span> {feature}</li>
    );
};

export default Feature;