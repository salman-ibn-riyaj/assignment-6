import React, { use } from 'react';
import PricingCard from './PricingCard';

const SimpleTransparentPricingSection = ({threeDataPromise}) => {
    const pricings = use(threeDataPromise);
    
    return (
        <div className='w-10/12 mx-auto mb-15'>
            <div className='text-center mb-5'>
                <h2 className='text-3xl font-bold mb-4'>Simple, Transparent Pricing</h2>
                <p className='text-gray-500'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className='three-card-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    pricings.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                }
                
            </div>
        </div>
    );
};

export default SimpleTransparentPricingSection;