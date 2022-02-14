const Option = props => {
  const {optionDetails} = props
  const {capitalDisplayText, id} = optionDetails

  return <option value={id}>{capitalDisplayText}</option>
}
export default Option
