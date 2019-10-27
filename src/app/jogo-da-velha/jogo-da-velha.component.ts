import { Component, OnInit } from '@angular/core';
import { JogoDaVelhaService } from './shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.scss']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogodavelhaservice: JogoDaVelhaService) { }

  ngOnInit() {
    this.jogodavelhaservice.inicializar();
  }

  /**
   * Retorna se a tela de inicio deve ser exibida.
   * @return boolean
   */
  get ShowInicio():boolean{
    return this.jogodavelhaservice.showInicio;
  }
  /**
   * Retorna se o tabuleiro deve ser exibido
   * @return boolean 
   */

   get ShowTabuleiro():boolean{
     return this.jogodavelhaservice.showTabuleiro;
   }
   /**
    * Retorna a se a tela de fim de jogo deve ser exibida.
    * @Return boolean
    */
get showFinal():boolean{
  return this.jogodavelhaservice.showFinal;
}

/**
 * Inicalizar o jogo
 * @retrun void
 */
 iniciarJogo():void{
   this.jogodavelhaservice.iniciarJogo();
 }
 jogar(posX:number, posY:number):void{
   this.jogodavelhaservice.jogar(posX, posY);
 }

 exibirX(posX:number, posY:number):boolean{
   return this.jogodavelhaservice.exibirX(posX, posY);
 }

 exibirO(posX:number, posY:number):boolean{
  return this.jogodavelhaservice.exibirO(posX, posY);
}

exibirVitoria(posX:number, posY:number):boolean{
  return this.jogodavelhaservice.exibirVitoria(posX, posY);
}

novoJogo():void{
 this.jogodavelhaservice.novoJogo();
}

get jogador():number{
  return this.jogodavelhaservice.jogador;
}



}
