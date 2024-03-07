import { DialogRef } from '@angular/cdk/dialog';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageModalComponent } from 'app/image-modal/image-modal.component';
import { NotificationService } from 'app/notification.service';
import { UserServiceServiceService } from 'app/user-service-service.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  imageUrls: string[] = [];
  selectedFiles: File[] = [];
  images: string[] = [];
  imagesData: any[] = [];
  sanitizer: any;

  constructor(private http: HttpClient, private imageService: UserServiceServiceService, private notificationService: NotificationService) { }

  imgSrc: string;
  onClick(event) {
    const imgElem = event.target;
    var target = event.target || event.srcElement || event.currentTarget;
    var srcAttr = target.attributes.src;
    this.imgSrc = srcAttr.nodeValue;
  }
  ngOnInit(): void {
    this.imageService.getImageUrls().subscribe((data) => {
      this.imageUrls = data;

    });

    // this.imageService.getAllImages().subscribe(res => {
    //   this.images = res[0].images as ImageEntity[];
    //   console.log(this.images);
    //   if (this.images) {
    //     this.images.forEach(element => {
    //       let objectURL = 'data:image/jpeg;base64,' + this.bin2string(element.imageUrl);
    //       this.imagesData.push(this.sanitizer.bypassSecurityTrustResourceUrl(objectURL));
    //     })
    //   }
    // }, error => {
    //   console.log(error);
    // });
  }

  imageData(imageData: any) {
    throw new Error('Method not implemented.');
  }
  bin2string(imgData: any) {
    throw new Error('Method not implemented.');
  }


  onFileSelected(event: any) {
    const files: FileList = event.target.files;

    for (let i = 0; i < files.length; i++) {
      this.selectedFiles.push(files[i]);

      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageUrls.push(e.target.result as string);
      };
      reader.readAsDataURL(files[i]);
      alert("Img Upload");
    }
  }

  onSubmit(event: any) {
    event.preventDefault();
    const data: FormData = new FormData();

    for (const file of this.selectedFiles) {
      data.append('file', file);
    }

    this.http.post('http://localhost:8080/upload', data)
      .subscribe(response => {
        this.notificationService.showNotification('View Images......');

      });
  }


}