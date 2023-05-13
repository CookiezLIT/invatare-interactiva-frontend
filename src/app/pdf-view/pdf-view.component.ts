import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import WebViewer from '@pdftron/webviewer';
@Component({
  selector: 'app-pdf-view',
  templateUrl: './pdf-view.component.html',
  styleUrls: ['./pdf-view.component.scss']
})
export class PdfViewComponent implements AfterViewInit{
  @ViewChild('viewer') viewerRef : ElementRef;

  ngAfterViewInit(): void {
    WebViewer({
      path: '../../assets/lib',
      initialDoc : 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf',
    }, this.viewerRef.nativeElement)
  }

}
