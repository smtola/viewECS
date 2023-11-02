import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-comp2',
  template: `
    <div class="app-component">
      <h2>Comp2 Component</h2>
      <p>This is <b>Comp2</b> components.</p>
      <button>Comp2</button>
    </div>
  `,
  styles: [
    `
        .app-component{
        text-align:center;
        border:#bbb 2px solid;
        padding:40px;
        margin-top:30px;
        margin-left:10px;
        margin-right:10px;
      }`,
  ],
  // encapsulation:ViewEncapsulation.ShadowDom
})
export class Comp2Component {}
