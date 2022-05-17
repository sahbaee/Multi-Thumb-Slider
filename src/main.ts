import { LitElement, html, css } from "lit";
import { customElement, state, property } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import { styleMap } from "lit/directives/style-map.js";

@customElement("sahbaee-slider")
export class sahbaeeSlider extends LitElement {
  @state()
  private items: Array<number> = [];

  @property({ type: String })
  forward_btn: string = "forward_btn";

  @property({ type: Number })
  start: number = 1;

  @property({ type: String })
  backward_btn: string = "backward_btn";

  @property({ type: Number })
  point: number = 2;

  static styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    :host {
      width: 100%;
      height: 50px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .sp_bar {
      width: 99%;
      height: 10px;
      position: absolute;
      background-color: #004837;
    }

    .sp_bar_bar {
      width: 0%;
      height: 100%;
      border-radius: 20px;
      background-color: #00c397;
      transition: all ease 0.3s;
    }

    .sp_holder {
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      color: #ffffff;
      font-family: "calibri";
      background-color: #004837;
      transition: all ease 0.32s;
    }

    .sp_holder[sp_holder="true"] {
      background-color: #00c397;
    }

    .sp_holder[sp_holder="false"] {
      background-color: #004837;
    }

    .holder {
      z-index: 100;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  `;

  render() {
    return html`
      <div class="sp_bar" id="ali">
        <div
          class="sp_bar_bar"
          style="${styleMap({
            width: (100 / (this.point - 1)) * (this.start - 1) + "%",
          })}"
        ></div>
      </div>
      <div class="holder">
        ${repeat(
          this.items,
          (item) => html`
            <div
              class="sp_holder"
              sp_holder="${item <= this.start ? "true" : "false"}"
            >
              ${item}
            </div>
          `
        )}
      </div>
      <br />
    `;
  }

  protected slider_controller() {
    document
      .querySelector(`[sahbaee_slider_forward="${this.forward_btn}"]`)
      ?.addEventListener("click", () => {
        if (this.start < this.items.length) {
          this.start++;
          this.requestUpdate();
        }
      });
    document
      .querySelector(`[sahbaee_slider_backward="${this.backward_btn}"]`)
      ?.addEventListener("click", () => {
        if (1 < this.start) {
          this.start--;
          this.requestUpdate();
        }
      });
  }

  // protected back() {}

  protected build_holder_points() {
    for (let i = 0; i < this.point; i++) {
      this.items.push(i + 1);
    }
    this.requestUpdate();
  }

  firstUpdated() {
    this.build_holder_points();
    this.slider_controller();
  }
}
