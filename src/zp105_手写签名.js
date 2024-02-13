function init({ exc, props, container, ctx }) {
    exc('load("https://cdn.jsdelivr.net/npm/signature_pad@4.0.0/dist/signature_pad.umd.min.js")', {}, () => {
        const canvas = container.appendChild(document.createElement("canvas"))
        canvas.width = parseInt(getComputedStyle(container).width) || 300
        canvas.height = parseInt(getComputedStyle(container).height) || 150
        const $x = new SignaturePad(canvas, props.option)
        container.getSignature = () => { return $x }
        if (props.ready) exc(props.ready, { ...ctx, $ext_ctx: ctx, $x }, () => exc("render()"))
    })
}

$plugin({
    id: "zp105",
    props: [{
        prop: "option",
        type: "json",
        label: "option"
    }, {
        prop: "ready",
        type: "exp",
        label: "onReady",
        ph: "$x"
    }],
    init
})

/*
https://github.com/szimek/signature_pad

getSignature().toDataURL() // save image as PNG
getSignature().fromDataURL() // Draws signature image from data URL

getSignature().clear()
getSignature().off() // Unbinds all event handlers
getSignature().on()
getSignature().penColor = "rgb(66, 133, 244)"



Options
dotSize: (float or function) Radius of a single dot.
minWidth: (float) Minimum width of a line. Defaults to 0.5.
maxWidth: (float) Maximum width of a line. Defaults to 2.5.
throttle: (integer) Draw the next point at most once per every x milliseconds. Set it to 0 to turn off throttling. Defaults to 16.
minDistance: (integer) Add the next point only if the previous one is farther than x pixels. Defaults to 5.
backgroundColor: (string) Color used to clear the background. Can be any color format accepted by context.fillStyle. Defaults to "rgba(0,0,0,0)" (transparent black). Use a non-transparent color e.g. "rgb(255,255,255)" (opaque white) if you'd like to save signatures as JPEG images.
penColor: (string) Color used to draw the lines. Can be any color format accepted by context.fillStyle. Defaults to "black".
velocityFilterWeight: (float) Weight used to modify new velocity based on the previous velocity. Defaults to 0.7.


Events
beginStroke: Triggered before stroke begins.
endStroke: Triggered after stroke ends.
beforeUpdateStroke: Triggered before stroke update.
afterUpdateStroke: Triggered after stroke update.

You can add listeners to events with .addEventListener:

const signaturePad = new SignaturePad(canvas);
signaturePad.addEventListener("beginStroke", () => {
  console.log("Signature started");
}, { once: true });


*/