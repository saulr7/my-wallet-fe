import  React from 'react'
import './LandingPage.css'


function LandingPage() {

    return (
        <div className="container">
            
            <div className="row pt-4">
                <div className="col-12 col-md-6">

                    <i className="fa fa-money icon-landing-page text-success" aria-hidden="true"></i>

                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde reprehenderit odio mollitia assumenda tempora aspernatur accusantium magni. Totam dolore, quas recusandae atque facere, aspernatur optio, itaque sequi voluptate nulla dolorem.
                    </p>

                </div>
                <div className="col-12 col-md-6">
                    <i className="fa fa-credit-card-alt fa-2x icon-landing-page text-danger" aria-hidden="true"></i>

                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde reprehenderit odio mollitia assumenda tempora aspernatur accusantium magni. Totam dolore, quas recusandae atque facere, aspernatur optio, itaque sequi voluptate nulla dolorem.
                    </p>
                </div>
            </div>
            
        </div>
    )

}

export default LandingPage