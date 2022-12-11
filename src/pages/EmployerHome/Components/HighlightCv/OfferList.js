import classes from "./OfferList.module.scss"
import ExcitingOffer from "../../../../components/ExcitingOffer/ExcitingOffer"
import { Fragment } from "react"

const OfferList = () => {
    return (
        <Fragment> 
            <h1 className={classes.title}>Grab These Exciting CVs And <span>CONNECT NOW</span></h1>
            <div className={classes.list}>
                <ExcitingOffer borderColor={classes['border-color1']} heartColor={classes['heart-color1']} applyColor ={classes['apply-color1']} />
                <ExcitingOffer borderColor={classes['border-color2']} heartColor={classes['heart-color2']} applyColor ={classes['apply-color2']}/>
                <ExcitingOffer borderColor={classes['border-color3']} heartColor={classes['heart-color3']} applyColor ={classes['apply-color3']}/>
            </div>
        </Fragment>
    )
}

export default OfferList