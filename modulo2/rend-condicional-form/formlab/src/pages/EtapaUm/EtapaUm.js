import React from "react";
import PerguntaAberta from "../../components/PerguntaAberta/PerguntaAberta";
import PerguntaFechada from "../../components/PerguntaFechada/PerguntaFechada";
import { FieldsetForm, Button, Legend } from "../../style/StyleGlobalApp/StyleGlobalApp";

export default class EtapaUm extends React.Component {

  render() {
  
    return (
      <div>
        <form onSubmit={this.props.irParaProximaEtapa}>
          <FieldsetForm>
            <Legend>Etapa 1 - Dados Gerais</Legend>

            <PerguntaAberta
              pergunta = {"1. Qual o seu nome?"}
              OnChangeFuncao = {this.props.onChangePergunata1}
              valorInputPergunta = {this.props.valorInputPergunta1}
            />
            {this.props.campoObrigatorio}
            <PerguntaAberta
              pergunta = {"2. Qual a sua idade?"}
              OnChangeFuncao = {this.props.onChangePergunata2}
              valorInputPergunta = {this.props.valorInputPergunta2}
            />
            {this.props.campoObrigatorio}
            <PerguntaAberta
              pergunta = {"  3. Qual o seu e-mail??"}
              OnChangeFuncao = {this.props.onChangePergunata3}
              valorInputPergunta = {this.props.valorInputPergunta3}
            />
            {this.props.campoObrigatorio}
            <PerguntaFechada
              pergunta = {"4. Qual seu nível de escolaridade?"}
              opcoes = {[
                "Ensino médio incompleto",
                "Ensino médio completo",
                "Ensino superior incompleto",
                "Ensino superior completo"
              ]}
              OnChangeFuncao = {this.props.onChangePergunata4}
              valorInputPergunta = {this.props.valorInputPergunta4}
            />



            <Button type = {"submit"}>Próxima etapa</Button>
          </FieldsetForm>

        </form>

      </div>
    );
  }
}
