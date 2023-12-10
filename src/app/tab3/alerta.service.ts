import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class AlertaService {
  constructor(private sanitizer: DomSanitizer) {}

  mostrarAlerta(): { img: string; link: string } {
    const imgSrc =
      'https://cdn.discordapp.com/attachments/1158791526399344780/1158865728208908338/rick-roll-rick-ashley.gif?ex=651dcd50&is=651c7bd0&hm=8a71ba28f0700912e615c8c71a71ac346ce0afa60113340e383c725b5ef7f196&';

    const linkHref = 'https://cdn.discordapp.com/attachments/1158791526399344780/1158865728208908338/rick-roll-rick-ashley.gif?ex=651dcd50&is=651c7bd0&hm=8a71ba28f0700912e615c8c71a71ac346ce0afa60113340e383c725b5ef7f196&';

    const img = `<img src="${imgSrc}" alt="Rick Astley">`;
    const link = `<a href="${linkHref}" target="_blank">Veja o GIF</a>`;

    return { img, link };
  }

  tornarHTMLSeguro(html: string): string {
    return this.sanitizer.bypassSecurityTrustHtml(html) as string;
  }
}