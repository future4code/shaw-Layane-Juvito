import React from "react";
import { Input, Pergunta } from "../../style/StyleGlobalApp/StyleGlobalApp";

export default class PerguntaAberta extends React.Component {
    render() {
        // ====== retorna a pegunta e atualiza o valor da variável de controle do input ======
        return (
            <>
                <Pergunta>
                    {this.props.pergunta}
                </Pergunta>
                <Input
                    value={this.props.valorInputPergunta}
                    onChange={this.props.OnChangeFuncao}
                />
            </>
        );
        // ====== retorna a pegunta e atualiza o valor da variável de controle do input ======
    }
}