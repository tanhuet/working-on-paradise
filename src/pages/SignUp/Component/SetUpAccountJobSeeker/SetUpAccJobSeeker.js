import classes from './SetUpAccJobSeeker.module.scss'
import settingImage from '../../../../asses/setting.png'

const SetUpAccJobSeeker = (props) => {

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
                    <div className={`col-sm-3 ${classes["row-in-column-content"]}`}>Age:</div>
                    <div className={`col-sm-9`}>
                        <input type='number' required></input>
                        <button style={{marginLeft: '5%'}}>Male</button>
                        <button style={{backgroundColor: '#BFBFBF',marginLeft: '5%'}}>Female</button>
                    </div>
                    </div>

                    {/* row-content in colum content */}
                    <div className={`row ${classes["row-in-column"]}`}>
                    <div className={`col-sm-3 ${classes["row-in-column-content"]}`}>Experience:</div>
                    <div className={`col-sm-9`}>
                        <textarea
                        rows={"4"}
                        columns={"40"} style={{width: '100%'}}></textarea>
                    </div>
                    </div>

                    {/* row-content in colum content */}
                    <div className={`row ${classes["row-in-column"]}`}>
                    <div className={`col-sm-3 ${classes["row-in-column-content"]}`}>Advanced Skill:</div>
                    <div className={`col-sm-9`}>
                        <textarea
                        rows={"4"}
                        columns={"40"} style={{width: '100%'}}></textarea>
                    </div>
                    </div>

                    {/* row-content in colum content */}
                    <div className={`row ${classes["row-in-column"]}`}>
                    <div className={`col-sm-3 ${classes["row-in-column-content"]}`}>Desired Salary:</div>
                    <div className={`col-sm-9`}>
                        <input type='number' required></input> <span> to </span>
                        <input type='number' required></input>
                    </div>
                    </div>

                    {/* row-content in colum content */}
                    <div className={`row ${classes["row-in-column"]}`}>
                    <div className={`col-sm-3 ${classes["row-in-column-content"]}`}>Workplace:</div>
                    <div className={`col-sm-9`}>
                    <select className={`ui dropdown`}>
                  <option>Remote</option>
                  <option>On-site</option>
                </select>
                    </div>
                    </div>

                    {/* row-content in colum content */}
                    <div className={`row ${classes["row-in-column"]}`}>
                    <div className={`col-sm-3 ${classes["row-in-column-content"]}`}>Type Of Job:</div>
                    <div className={`col-sm-9`}>
                        <input type='text' style={{width: '100%'}} required></input>
                    </div>
                    </div>

                    {/* row-content in colum content */}
                    <div className={`row ${classes["row-in-column"]}`}>
                    <div className={`col-sm-3 ${classes["row-in-column-content"]}`}>Desired Career Field:</div>
                    <div className={`col-sm-9`}>
                        <input type='text' style={{width: '100%'}} required></input>
                    </div>
                    </div>

                    {/* row-content in colum content */}
                    <div className={`row ${classes["row-in-column"]}`}>
                    <div className={`col-sm-3 ${classes["row-in-column-content"]}`}>CV:</div>
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
export default SetUpAccJobSeeker;