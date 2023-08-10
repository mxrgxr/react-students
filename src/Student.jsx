import Score from './Score';
import './Student.css'

export default function Student({student}) {
    return (
        <div className="student-card">
          <h2 className="student-name">{student.name}</h2>
          <p className="student-bio">{student.bio}</p>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {student.scores.map((score, index) => (
                <Score key={index} score={score} />
              ))}
            </tbody>
          </table>
        </div>
    );
}