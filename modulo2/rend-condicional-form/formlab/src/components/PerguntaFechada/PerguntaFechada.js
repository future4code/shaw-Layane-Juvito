import React from "react";
import { Pergunta, Select, Options } from "../../style/StyleGlobalApp/StyleGlobalApp";

export default class PerguntaFechada extends React.Component {
    render() {
        // ====================== renderiza as opções do select ====================
        let optionsRender;
        optionsRender = this.props.opcoes.map((option, index) => {
            return <Options value={`${index + 1}`} key={index}>{option}</Options>
        });
        // =========================================================================

        // ================ retorna a pegunta + opções do select ===================            
        return (
            <>
                <Pergunta>
                    {this.props.pergunta}
                </Pergunta>
                <Select onChange={this.props.OnChangeFuncao}>
                    {optionsRender}
                </Select>
            </>
        );
        // =========================================================================
    }
}