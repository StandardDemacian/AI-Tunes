export default function TopScorersCard({ name, score }){
    return(
        <>
            <h3>{name}</h3>
            <p>Score: {score}</p>
        </>
    )
}