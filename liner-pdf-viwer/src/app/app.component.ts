import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  test = false;
  firstPdfSrc = 'https://salessprout-stage.s3.us-east-2.amazonaws.com/Files/9d693de9-0368-44a1-b684-78b052f03be5_response.pdf%27';
  secondPdfSrc = 'https://salessprout-dev.s3.us-east-2.amazonaws.com/Files/a9d68805-79ab-4af5-8462-0409753a4980_comany roles.pdf';

  pdfList: { src: string; viewerId: string }[] = [
    {
      src: 'https://salessprout-dev.s3.us-east-2.amazonaws.com/Files/a9d68805-79ab-4af5-8462-0409753a4980_comany roles.pdf',
      viewerId: 'MyUniqueID1'
    },
    {
      src: 'https://salessprout-dev.s3.us-east-2.amazonaws.com/Files/a9d68805-79ab-4af5-8462-0409753a4980_comany roles.pdf',
      viewerId: 'MyUniqueID2'
    }
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.test = true;
    }, 2000);
  }

  onPageChange(viewerId: string, event: any) {
    console.log('Page changed in viewer with ID', viewerId, ':', event);
    // Handle page change for the viewer with the specified viewerId
  }
}
