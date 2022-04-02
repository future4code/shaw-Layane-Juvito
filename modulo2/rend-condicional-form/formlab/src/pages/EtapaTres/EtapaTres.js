import React from "react";
import PerguntaAberta from "../../components/PerguntaAberta/PerguntaAberta";
import PerguntaFechada from "../../components/PerguntaFechada/PerguntaFechada";
import { FieldsetForm, Button, Legend } from "../../style/StyleGlobalApp/StyleGlobalApp";


export default class EtapaTres extends React.Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.voltarAoInicio}>
          <FieldsetForm>
            <Legend>Etapa 3 - Informações Gerais de Ensino</Legend>

            <PerguntaAberta
              pergunta={" 5. Por que você não terminou um curso de graduação?"}
              OnChangeFuncao={this.props.onChangePergunata5}
              valorInputPergunta = {this.props.valorInputPergunta5}
            />
            {this.props.campoObrigatorio}
            <PerguntaFechada
              pergunta={"6. Você fez algum curso complementar?"}
              opcoes={[
                "Nenhum",
                "Curso técnico",
                "Curso de inglês"
              ]}
              OnChangeFuncao={this.props.onChangePergunata6}
              valorInputPergunta = {this.props.valorInputPergunta6}

            />
            
            <Button type={"submit"}>Finalizar</Button>
          </FieldsetForm>

        </form>

      </div>
    );
  }
}
