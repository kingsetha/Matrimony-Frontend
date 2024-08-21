import React, { useState } from 'react';
import Swal from 'sweetalert2';

const PricingSection = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePlanClick = (plan) => {
        setSelectedPlan(plan);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handlePurchase = (e) => {
        e.preventDefault();
        // Simulate a purchase request
        console.log(`Purchasing plan: ${selectedPlan.name}`);
        handleCloseModal();
        Swal.fire({
            title: 'Purchase Successful!',
            text: `You have successfully purchased the ${selectedPlan.name}.`,
            icon: 'success',
            confirmButtonText: 'OK'
        });
    };

    const plans = [
        {
            name: 'Premium Package',
            price: 29,
            features: [
                '20 Express Interests',
                '20 Gallery Photo Upload',
                '20 Profile Info View',
                'Show Auto Profile Match'
            ]
        }
    ];

    return (
        <section className="pricing-section">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="header-text">
                            <h2>Packages</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit id cupiditate. Repudiandae blanditiis ullam natus quas explicabo</p>
                        </div>
                    </div>
                </div>

                <div className="row gy-3 g-md-8 justify-content-center">
                    {plans.map((plan, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="box">
                                <div className="icon-box">
                                    <i className={`fas ${plan.name === 'Premium Package' ? 'fa-crown' : ''}`}></i>
                                </div>
                                <div className="text-box">
                                    <h4>{plan.name}</h4>
                                    <h2><span>Rs:</span>{plan.price}</h2>
                                    <ul>
                                        {plan.features.map((feature, i) => (
                                            <li key={i}>
                                                <i className="fal fa-check"></i>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        className="btn-flower purchaseNow planPurchaseButton"
                                        onClick={() => handlePlanClick(plan)}
                                    >
                                        Purchase Package
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isModalOpen && (
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content form-block">
                            <div className="modal-header">
                                <h5 className="modal-title">Purchase Package</h5>
                                <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
                            </div>
                            <form className="login-form" id="invest-form" onSubmit={handlePurchase}>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <h3 className="text-green text-center plan-name">{selectedPlan?.name}</h3>
                                        <h4 className="text-center plan-price">$ {selectedPlan?.price}</h4>
                                        <input type="hidden" name="checkout" value="checkout" />
                                        <input type="hidden" name="plan_id" value={selectedPlan?.id || ''} />
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn-flower2 btn1" onClick={handleCloseModal}>Close</button>
                                    <button type="submit" className="btn-flower2 btn2">Purchase Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default PricingSection;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

// const PricingSection = () => {
//     const [selectedPlan, setSelectedPlan] = useState(null);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Check if the user has already purchased a plan
//         const hasPurchasedPlan = localStorage.getItem('hasPurchasedPlan') === 'true';
//         if (hasPurchasedPlan) {
//             navigate('/dashboard'); // Redirect to dashboard if plan is already purchased
//         }
//     }, [navigate]);

//     const handlePlanClick = (plan) => {
//         setSelectedPlan(plan);
//         setIsModalOpen(true);
//     };

//     const handleCloseModal = () => {
//         setIsModalOpen(false);
//     };

//     const handlePurchase = (e) => {
//         e.preventDefault();
//         console.log(`Purchasing plan: ${selectedPlan.name}`);
        
//         Swal.fire({
//             title: 'Purchase Successful!',
//             text: `You have successfully purchased the ${selectedPlan.name}.`,
//             icon: 'success',
//             confirmButtonText: 'OK'
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 handleCloseModal();
//                 localStorage.setItem('hasPurchasedPlan', 'true'); // Save the purchase status
//                 navigate('/Dashboard'); // Navigate to the dashboard
//             }
//         });
//     };

//     const plans = [
//         {
//             name: 'Premium Package',
//             price: 299,
//             features: [
//                 '20 Express Interests',
//                 'Show Auto Profile Match'
//             ]
//         }
//     ];

//     return (
//         <section className="pricing-section">
//             <div className="container">
//                 <div className="row">
//                     <div className="col">
//                         <div className="header-text">
//                             <h2>Packages</h2>
//                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit id cupiditate. Repudiandae blanditiis ullam natus quas explicabo</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="row gy-3 g-md-8 justify-content-center">
//                     {plans.map((plan, index) => (
//                         <div className="col-lg-4 col-md-6" key={index}>
//                             <div className="box">
//                                 <div className="icon-box">
//                                     <i className={`fas ${plan.name === 'Premium Package' ? 'fa-crown' : ''}`}></i>
//                                 </div>
//                                 <div className="text-box">
//                                     <h4>{plan.name}</h4>
//                                     <h2><span>Rs:</span>{plan.price}</h2>
//                                     <ul>
//                                         {plan.features.map((feature, i) => (
//                                             <li key={i}>
//                                                 <i className="fal fa-check"></i>
//                                                 <span>{feature}</span>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                     <button
//                                         className="btn-flower purchaseNow planPurchaseButton"
//                                         onClick={() => handlePlanClick(plan)}
//                                     >
//                                         Purchase Package
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {isModalOpen && (
//                 <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-hidden="true">
//                     <div className="modal-dialog modal-dialog-centered">
//                         <div className="modal-content form-block">
//                             <div className="modal-header">
//                                 <h5 className="modal-title">Purchase Package</h5>
//                                 <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
//                             </div>
//                             <form className="login-form" id="invest-form" onSubmit={handlePurchase}>
//                                 <div className="modal-body">
//                                     <div className="form-group">
//                                         <h3 className="text-green text-center plan-name">{selectedPlan?.name}</h3>
//                                         <h4 className="text-center plan-price">$ {selectedPlan?.price}</h4>
//                                         <input type="hidden" name="checkout" value="checkout" />
//                                         <input type="hidden" name="plan_id" value={selectedPlan?.id || ''} />
//                                     </div>
//                                 </div>
//                                 <div className="modal-footer">
//                                     <button type="button" className="btn-flower2 btn1" onClick={handleCloseModal}>Close</button>
//                                     <button type="submit" className="btn-flower2 btn2">Purchase Now</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </section>
//     );
// };

// export default PricingSection;
