import './ProgressBar.css';

const ProgressBar = ({ heading, percentage, className }) => {

    return (
        <div className={`progress-bar-container ${className ? className :''}`}>
            <div className="progress-bar-heading">
                <p>{heading}</p>
                <span>{percentage}%</span>
            </div>
            <div className="progress-bar-status">
                <span style={{width: `${(percentage)}%`}}></span>
                <span style={{width: `${(100-percentage)}%`}}></span>
            </div>
        </div>
    );
}
export default ProgressBar;