import "./Competencias.css";

interface CompetenciasProps {
  setLoading: (loading: boolean) => void;
  setLoadingText: (text: string) => void;
}

export default function Competencias({
  setLoading,
  setLoadingText,
}: CompetenciasProps) {
  return (
    <div className="content-container competencias-container">
      <div className="title-comp">
        <h1>Abrir nova competência</h1>
      </div>
      <div className="title-input">
        <div className="input-date">
          <label htmlFor="open-date">Data de abertura</label>
          <input type="date" name="open-date" id="open-date" />
        </div>
        <div className="input-date">
          <label htmlFor="close-date">Data de fechamento</label>
          <input type="date" name="close-date" id="close-date" />
        </div>
        <div className="button-date">
          <button type="button" className="btn btn-primary">
            Confirmar
          </button>
        </div>
      </div>
      <div className="table-comp">
        <div className="title-table-comp">
          <h1>Histórico de Competências</h1>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Mês de referência</th>
              <th scope="col">Data de abertura</th>
              <th scope="col">Data de fechamento</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">03/2024</td>
              <td>01/03/2024</td>
              <td>30/03/2024</td>
              <td className="status-aberto">Aberto</td>
            </tr>
            <tr>
            <td scope="row">03/2024</td>
              <td>01/03/2024</td>
              <td>30/03/2024</td>
              <td className="status-fechado">Fechado</td>
            </tr>
            <tr>
            <td scope="row">03/2024</td>
              <td>01/03/2024</td>
              <td>30/03/2024</td>
              <td className="status-fechado">Fechado</td>
            </tr>
            <tr>
            <td scope="row">03/2024</td>
              <td>01/03/2024</td>
              <td>30/03/2024</td>
              <td className="status-fechado">Fechado</td>
            </tr>
            <tr>
            <td scope="row">03/2024</td>
              <td>01/03/2024</td>
              <td>30/03/2024</td>
              <td className="status-fechado">Fechado</td>
            </tr>
            <tr>
            <td scope="row">03/2024</td>
              <td>01/03/2024</td>
              <td>30/03/2024</td>
              <td className="status-fechado">Fechado</td>
            </tr>
            <tr>
            <td scope="row">03/2024</td>
              <td>01/03/2024</td>
              <td>30/03/2024</td>
              <td className="status-fechado">Fechado</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
