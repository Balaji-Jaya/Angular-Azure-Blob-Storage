import { AzureBlobStorageService } from './../azure-blob-storage.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { MatRadioButton, MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-sas',
  templateUrl: './sas.component.html',
  styleUrls: ['./sas.component.css']
})
export class SasComponent implements OnInit {

  // SAS (shared access signatures)
  //sas = "";

  picturesList: string[] = [];
  picturesDownloaded: string[] = []

  videosList: string[] = [];
  videoDownloaded;
  file;
  deleteLoader: boolean;
  uploadLoader: boolean;
  emptyFile: boolean;
  uploadFile: boolean;
  categoryError:boolean;
  @Output()
change: EventEmitter<MatRadioChange> 

  sas:any;

  // Enter your storage account name
  //picturesAccount = "enimgstorage"; //enimgstorage 
  // container name
  picturesContainer :any; //imageextractor //forms
  constructor(private blobService: AzureBlobStorageService,public dialog: MatDialog,public router:Router) {
    //this.uploadLoader=true;
  }

  ngOnInit(): void {
    this.reloadImages();
  }

  // public setSas(event) {
  //   this.sas = event.target.value
  // }
  value:any;

  onChange(mrChange: MatRadioChange) {
    this.value=mrChange.value
    if(this.value=='other'){
      this.picturesContainer='imageextractor';
      this.sas=''
    }else if(this.value='drivingLicence'){
      this.picturesContainer='forms';
      this.sas=''
    }
    this.uploadLoader=true;
    this.reloadImages();
 } 

  public imageSelected(file: File) {
    this.file=file;
  }

  public uploadImage(element){
    // if(this.value){
    //   this.categoryError=false;
    // }else{
    //   this.categoryError=true;
    //   this.uploadLoader=false;
    //   this.emptyFile=false;
    // }
    if(!this.file||!this.value){
      if(!this.file){
        this.emptyFile=true;
        this.uploadFile=false;
      } else if(!this.value){
        this.categoryError=true;
        this.emptyFile=false;
        //element.value='';
      }else{
        this.categoryError=true;
        this.emptyFile=true;
        this.uploadFile=false;
      }
    }else{
      this.categoryError=false;
      element.value='';
this.uploadLoader=true;
this.emptyFile=false;
this.blobService.uploadImage(this.sas,this.picturesContainer, this.file, this.file.name, () => {
      this.reloadImages()
    })
    this.uploadFile=true;
setTimeout(()=>{
  this.uploadFile=false;
},3000)
this.file='';
    }
  }

  public deleteImage (name: string) {
    this.uploadLoader=true;
    this.blobService.deleteImage(this.sas,this.picturesContainer, name, () => {
      this.reloadImages()
    })
  }

  public downloadImage (name: string) {
    this.blobService.downloadImage(this.sas,this.picturesContainer, name, blob => {
      let url = window.URL.createObjectURL(blob);
      window.open(url);
    })
  }

  private reloadImages() {
    this.blobService.listImages(this.sas,this.picturesContainer).then(list => {
      this.uploadLoader=false;
      this.deleteLoader=false;
      this.picturesList = list
      const array = []
      this.picturesDownloaded = array

      for (let name of this.picturesList) {
        this.blobService.downloadImage(this.sas,this.picturesContainer, name, blob => {
          var reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = function () {
            array.push(reader.result as string)
          }
        })
      }
    })
  }

  signOutPage() {
    localStorage.clear();
    this.router.navigate(['/home']);
  }

  
}
