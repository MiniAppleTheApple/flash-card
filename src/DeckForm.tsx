const DeckForm: React.FC<any> = ({deck, onSubmit, onNameChange}) => (
  <form className="flex flex-col" onSubmit={onSubmit}>
    <p>Name</p>
    <input
      className="py-3 px-5 bg-swamp-green-700"
      value={deck.name}
      onChange={onNameChange}/>
    </form>
)

export default DeckForm 
