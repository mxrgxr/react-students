import Score from './Score';

export default function Student({student}) {
    return(
        <div>
            <h2>{student.name}</h2>
            <p>{student.bio}</p>
            {student.scores.map((score, index) => (
                <Score key={index} score={score} />
            ))}
        </div>
    )
}