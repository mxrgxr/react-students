import './Score.css'

export default function Score ({score}) {
    return (
        <tr className="score-row">
          <td className="score-date">{score.date}</td>
          <td className="score-value">{score.score}</td>
        </tr>
      );
}