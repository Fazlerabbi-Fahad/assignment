import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Accordion from 'react-bootstrap/Accordion';
import './AllBookings.css';
import { AccordionContext, Button } from 'react-bootstrap';

const AllBookings = ({ allBookings }) => {
    const { id, address, name, company, phone, email, website } = allBookings;
    function ContextAwareToggle({ children, eventKey, callback }) {

        const { activeEventKey } = useContext(AccordionContext);
        const decoratedOnClick = useAccordionButton(
            eventKey,
            () => callback && callback(eventKey),
        );



        const isCurrentEventKey = activeEventKey === eventKey;
        return (
            <Button
                as="input"
                type="button"
                className='text-uppercase me-0 rounded-pill btn-danger'
                value={isCurrentEventKey ? "Hide Details" : "View Details"}
                onClick={decoratedOnClick}
            >
                {children}
            </Button >

        );
    }



    return (

        <tbody>
            <tr className='table-row border-2 rounded-5' >

                <td>{company.name}</td>
                <td>
                    <div>
                        <p className='fw-bold text-uppercase mb-0 '>Contact</p>
                        <p>{name}</p>
                    </div>
                </td>
                <td>
                    <div>
                        <p className='fw-bold text-uppercase mb-0'>City</p>
                        <p>{address.city}</p>
                    </div>
                </td>
                <td>
                    <div>
                        <p className='fw-bold text-uppercase mb-0'>State</p>
                        <p>{address.street}</p>
                    </div>
                </td>
                <td >
                    <ContextAwareToggle eventKey={`#rf${id}`}>
                    </ContextAwareToggle>
                </td>


            </tr >
            <tr className='accordion-table'>
                <td colspan="5">
                    <Accordion.Collapse eventKey={`#rf${id}`}>
                        <Card.Body>
                            <div className="row">
                                <div className="col-12">
                                    <h6 className='fw-bold'>Description</h6>
                                    <p>{company.catchPhrase}</p>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <h6 className='fw-bold'>Contact Person</h6>
                                    <p>{name}</p>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <h6 className='fw-bold'>Address</h6>
                                    <p>{address.street} {address.suit} {address.zipcode}</p>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <h6 className='fw-bold'>Website</h6>
                                    <p>{website}</p>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <h6 className='fw-bold'>City</h6>
                                    <p>{address.city}</p>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <h6 className='fw-bold'>Emails</h6>
                                    <p>{email}</p>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <h6 className='fw-bold'>State</h6>
                                    <p>{address.street}</p>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <h6 className='fw-bold'>Phones</h6>
                                    <p>{phone}</p>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <h6 className='fw-bold'>Zip Code</h6>
                                    <p>{address.zipcode}</p>
                                </div>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </td>


            </tr>
        </tbody >

    );
};

export default AllBookings;