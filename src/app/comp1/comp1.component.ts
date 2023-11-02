import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-comp1',
  template: `
    <div class="app-component">
      <h2>Comp1 Component</h2>
      <p>This is <b>Comp1</b> components.</p>
      <button>Comp1</button>
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
      }
      button{
    width:120px;
    height:30px;
    border:none;
    text-align:center;
    background-color:coral;
}
    `
  ],
  encapsulation:ViewEncapsulation.None

})
export class Comp1Component {}
