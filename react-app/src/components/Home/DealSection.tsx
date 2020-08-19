import React from 'react';
import Timer from '../Timer/Timer';

const DealSection = (): JSX.Element => {
    const today = new Date();
    const countDownDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 3,
        15,
        0,
        0
    );

    return (
        <section className="deal">
            <div className="deal__main-box">
                <div className="deal__small-box">
                    <div className="dash">
                        <span className="dash__line" />
                        <h4 className="heading-quaternary">Deal of the week</h4>
                    </div>

                    <h2 className="heading-tertiary">Stay Warm</h2>

                    <button className="btn-underline btn-underline--white" type="button">
                        Shop Now
                    </button>
                </div>

                <Timer countDownDate={countDownDate} />
            </div>
        </section>
    );
};

export default DealSection;
