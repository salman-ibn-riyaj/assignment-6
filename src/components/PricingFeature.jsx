import React from 'react';
import { Check } from 'lucide-react';

const PricingFeature = ({feature}) => {
    return (
        
            <li className='flex items-center gap-1'> <span><Check color="#60dd1d" /></span> {feature}</li>
        
    );
};

export default PricingFeature;