const StartPage: React.FC<StartPageProps> = ({setPage}) => (
  <div>
    <h1>
      Start Page
    </h1>
    <button onClick={e => setPage("main")}>Back</button>
  </div>
)

export default StartPage
