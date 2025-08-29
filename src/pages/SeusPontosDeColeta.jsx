import NavigationBar from "../components/organism/NavigationBar";
import LoginBar from "../components/organism/LoginBar";

function SeusPontosDeColetaPage() {
  return (
    <>
    <LoginBar />
    <NavigationBar />
    <div className="SeusPontosDeColetaPage">
      <p>Seus Pontos De Coleta Page </p>
      <p>grid com os pontos de coletas do usuario</p>
    </div>
    </>
  );
}

export default SeusPontosDeColetaPage;