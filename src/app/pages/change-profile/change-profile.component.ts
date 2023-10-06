import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-change-profile',
  templateUrl: './change-profile.component.html',
  styleUrls: ['./change-profile.component.css']
})
export class ChangeProfileComponent {
  loggedInUser : any = {

  };
  imageFile? : File;
  imageUrl? : string;
  changepassword : {old:string,newp:string,verify:string} = {
    old:"",newp:"",verify:""
  };
  constructor( private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loggedInUser = this.authService.getLoggedInUserInfo();
    this.imageUrl = environment.ImageUrl + this.loggedInUser.imagePath;

    this.changepassword={
      newp: '',
      old: '',
      verify:''
    };
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.imageFile = (event.target as HTMLInputElement).files[0];
     // console.log(this.imageFile);
    }
  }

  onSubmit(){
    const formdata = new FormData();
    formdata.append('username',this.loggedInUser.userName);
    formdata.append('firstName' ,this.loggedInUser.firstName);
    formdata.append('lastName' ,this.loggedInUser.lastName);
    formdata.append('email' ,this.loggedInUser.email);
    formdata.append('profileImage',this.imageFile);
    this.accountService.update(formdata)
      .subscribe((data:any) => {
        
      })
  }

  change(){
    this.accountService.changePassword(this.changepassword).subscribe(() => {
      
    });
  }

  openBasicModal(content: any) {
    this.changepassword.newp='';
    this.changepassword.old='';
    this.changepassword.verify='';
    this.modalService.open(content, {}).result.then((result) => {
    }).catch((res) => {});
  }
}
