import { Link } from "react-router-dom";
import NavigationBar from "../components/organism/NavigationBar";
import LoginBar from "../components/organism/LoginBar";


function DashBoardPage() {
  return (
    <>
      <LoginBar />
      <NavigationBar />
      <div className="DashBoardPage">
        <p>DashBoardPage</p>
        <p>esta sera a pagina home apos o usuario realizar o login</p>
        <p>
          vai ter um card do materioas e pontos de coleteta ao clicar exibe
          lista do pontos com detalhes{" "}
        </p>
      </div>
    </>
  );
}

export default DashBoardPage;
