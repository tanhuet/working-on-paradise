import classes from './SetUpAccJobSeeker.module.scss'
import settingImage from '../../../../asses/setting.png'

const SetUpAccEmployer = (props) => {

    return (
        <div className={`container-fluid`} style={{fontWeight: 'bold'}}>
            <div className={`row`}>

                <div className={`col-sm-5 ${classes['img-setting']}`}>
                <img src={settingImage}></img>
                </div>
                {/* colum content */}
                <div className={`col-sm-6`}>

                    {/* row-content in colum content */}
                    <div className={`row ${classes["row-in-column"]}`}>
                    <div className={classes["title"]}>Set Up Account</div>
                    </div>

                    {/* row-content in colum content */}
                    <div className={`row ${classes["row-in-column"]}`}>
                    <div className={`col-sm-3 ${classes["row-in-column-content"]}`}>Size:</div>
                    <div className={`col-sm-9`}>
                        <input type='number' required></input>
                    </div>
                    </div>

                    {/* row-content in colum content */}
                    <div className={`row ${classes["row-in-column"]}`}>
                    <div className={`col-sm-3 ${classes["row-in-column-content"]}`}>About:</div>
                    <div className={`col-sm-9`}>
                        <textarea
                        rows={"10"}
                        columns={"40"} style={{width: '100%'}}></textarea>
                    </div>
                    </div>

                    {/* row-content in colum content */}
                    <div className={`row ${classes["row-in-column"]}`}>
                    <div className={`col-sm-3 ${classes["row-in-column-content"]}`}>Wallpaper:</div>
                    <div className={`col-sm-9`}>
                        <input type='file'/>
                    </div>
                    </div>

                    {/* row-content in colum content */}
                    <div className={`row ${classes["row-in-column"]}`}>
                    <div className={`col-sm-3`}></div>
                    <div className={`col-sm-9 ${classes['button-save']}`}>
                        <button>Save</button>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default SetUpAccEmployer;