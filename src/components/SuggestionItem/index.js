// Write your code here

// const SuggestionItem = props => {
//   const {userDetails} = props
//   const {suggestion, id} = userDetails
//   return (
//     <li>
//       <p>{suggestion}</p>
//       <img
//         src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
//         className="arrow-icon"
//         alt="arrow"
//       />
//     </li>
//   )
// }

// export default SuggestionItem

import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props
  const {suggestion} = suggestionDetails

  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion-text">{suggestion}</p>
      <button
        type="button"
        className="arrow-button"
        onClick={onClickSuggestion}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
