function onInit({ exc, props, container }) {
    exc('load("https://cdn.jsdelivr.net/npm/signature_pad@2.3.2/dist/signature_pad.min.js")', {}, () => {
        const canvas = container.appendChild(document.createElement("canvas"))
        canvas.width = parseInt(getComputedStyle(container).width) || 300
        canvas.height = parseInt(getComputedStyle(container).height) || 150
        const pad = new SignaturePad(canvas, props.option)
        container.getSignature = () => { return pad }
    })
}

$plugin({
    id: "zp105",
    props: [{
        prop: "option",
        type: "acejson",
        label: "option"
    }],
    onInit
})

/*
https://github.com/szimek/signature_pad

getSignature().toDataURL() // save image as PNG
getSignature().fromDataURL() // Draws signature image from data URL

getSignature().clear()
getSignature().off() // Unbinds all event handlers
getSignature().on()
getSignature().penColor = "rgb(66, 133, 244)"
getSignature().onEnd = func($exp.onEnd)

{
    "onEnd": "(func($exp.onEnd))"
}



*/