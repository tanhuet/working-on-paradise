import classes from "./OfferList.module.scss"
import ExcitingOffer from "../../../../components/exciting-offer/ExcitingOffer"
import { Fragment } from "react"

const OfferList = (props) => {
    const job = props.jobs[0]
    return (
        <Fragment>
            <h1 className={classes.title}>Grab These Exciting Offer And <span>APPLY NOW</span></h1>
            <div className={classes.list}>
                <ExcitingOffer/>
                <ExcitingOffer/>
                <ExcitingOffer/>
            </div>
        </Fragment>
    )
}

export default OfferList