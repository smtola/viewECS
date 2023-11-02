import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="margin:20px auto;width: 780px;">
        <div class="app-component">
            <h2>App Component</h2>
            <p>This is <b>app</b> components.</p>
            <button>App</button>
        </div>

        <div class="component-container">
          <app-comp1></app-comp1>
          <app-comp2></app-comp2>
        </div>
    </div>
  `,
  styles: [`
      .app-component{
        text-align:center;
        border:#bbb 2px solid;
        padding-top:40px;
        padding-bottom:40px;
        margin-top:30px;
        margin-left:10px;
        margin-right:10px;
      }
      .component-container{
        display:flex;
       justify-content:center;
      }

  `],
  encapsulation:ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'encapviewsolution';
}
