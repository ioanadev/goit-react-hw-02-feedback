import PropTypes from "prop-types";

const FeedbackOptions = ({options, onLeaveFeedback}) =>{


    return(
        <>
        {options.map(option =>(
            <button type="button" key={option} onClick = {() =>onLeaveFeedback(option)}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
        ))}
        </>
    )
}
FeedbackOptions.propTypes = {
    options:PropTypes.array,
    onLeaveFeedback:PropTypes.func
}
export default FeedbackOptions;