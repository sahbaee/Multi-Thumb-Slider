# Multi-Thumb-Slider
![This is an image](./readme.png)

The Slider web component.

## Usage
- install node modules
- build component `npm run build`.
- link script file to your project. `'./dist/main.js'`.
- well done. now you can use this component in your project.

# Html tag and attribute properties

html tag: `<sahbaee-slider></sahbaee-slider>` 

properties: 
- `point="X"` --> `X` Specifies the number of points.
- `start="X"` --> `X` Specifies the starting position of the slidder_bar.
- `forward_btn="name"` --> `name` Set the value of the forward button attribute. <br/>
--> `<button sahbaee_slider_forward="next">next</button> `
- `backward_btn="name"` --> `name` Set the value of the backward button attribute. <br/>
--> `<button sahbaee_slider_backward="back">back</button>`

##  Example

```html
<sahbaee-slider point="5" start="2" forward_btn="next" backward_btn="back"></sahbaee-slider>

<button sahbaee_slider_backward="back">back</button>
<button sahbaee_slider_forward="next">next</button>
```

`https://sahbaee.github.io` 
Mahdiyar Sahbaee - Multi Thumb Slider - Lit web component  -2022
