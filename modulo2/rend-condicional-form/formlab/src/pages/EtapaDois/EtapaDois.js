import React from "react";
import PerguntaAberta from "../../components/PerguntaAberta/PerguntaAberta";
import { FieldsetForm, Button, Legend } from "../../style/StyleGlobalApp/StyleGlobalApp";

export default class EtapaDois extends React.Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.irParaEtapaFinal}>
                    <FieldsetForm>
                        <Legend>Etapa 2 - Informações do Ensino Superior</Legend>
                        <PerguntaAberta
                            pergunta={"5. Você ingressou em qual curso?"}
                            OnChangeFuncao={this.props.onChangePergunata5}
                            valorInputPergunta = {this.props.valorInputPergunta5}
                        />
                        {this.props.campoObrigatorio}
                        <PerguntaAberta
                            pergunta={"6. Qual a unidade de ensino?"}
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
