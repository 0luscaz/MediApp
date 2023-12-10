import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  formData = {
    Df: "",
    Df2: "",
    Dp: "",
    Ce: "",
    Kg: "",
  }

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  create() {
    console.log(this.formData);
    axios.post("http://localhost/dados.php", this.formData)
      .then(
        (response) => {
          console.log("Response:", response.data);
          this.navCtrl.navigateForward('/tabs/tab1');  
        })
      .catch((error) => {
        console.log("Error:", error);
      });
  }
}
