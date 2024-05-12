import { secondaryButton } from "./utils"

const DeckForm: React.FC<any> = ({name, onSubmit, onNameChange}) => (
  <form className="flex flex-col" onSubmit={onSubmit}>
    <p>Name</p>
    <input
      className="py-3 px-5 bg-swamp-green-700"
      value={name}
      onChange={onNameChange}/>
      <button className={`${secondaryButton} my-6`} role="submit">Submit</button>
  </form>
)

export default DeckForm 
