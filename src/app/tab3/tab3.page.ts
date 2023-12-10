import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AlertaService } from './alerta.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  constructor(private alertaService: AlertaService, private alertController: AlertController) {}

  async mostrarAlerta() {
    const { img, link } = this.alertaService.mostrarAlerta();

    const imgSeguro = this.alertaService.tornarHTMLSeguro(img);
    const linkSeguro = this.alertaService.tornarHTMLSeguro(link);

    const alert = await this.alertController.create({
      header: '',
      message: `<div>${imgSeguro}</div> <br> <div>${linkSeguro}</div>`,
      buttons: ['OK'],
    });

    await alert.present();
  }
}