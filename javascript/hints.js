// mouseover tooltips for various UI elements

var titles = {
    "Sampling steps": "Number of iterations for image improvement",
    "Sampling method": "Algorithm used for image generation",
    "GFPGAN": "Restore low quality faces with GFPGAN",
    "Euler a": "Highly creative depending on step count (higher than 30-40 does not help)",
    "DDIM": "Best at inpainting",
    "UniPC": "Fast Sampling of Diffusion Models",
    "DPM adaptive": "Ignores step count, determined by CFG",

    "\u{1F4D0}": "Auto detect size from img2img",
    "Batch count": "Number of image batches (no impact on performance)",
    "Batch size": "Number of images in a batch (increases performance at cost of VRAM)",
    "CFG Scale": "How strongly image conforms to prompt (lower = more creative)",
    "Seed": "Determines output of random number generator",
    "\u{1f3b2}\ufe0f": "Randomize seed",
    "\u267b\ufe0f": "Reuse last seed",
    "\u2199\ufe0f": "Apply last generation parameters",
    "\u{1f4c2}": "Open output directory",
    "\u{1f4be}": "Save style",
    "\u{1f5d1}\ufe0f": "Clear prompt",
    "\u{1f4cb}": "Apply selected styles to prompt",
    "\u{1f4d2}": "Paste available values",
    "\u{1f3b4}": "Show/hide extra networks",
    "\u{1f300}": "Restore progress",

    "Inpaint a part of image": "Mask and regenerate image according to prompt",
    "SD upscale": "Upscale image, split into tiles, improve each tile using img2img, merge whole image back",

    "Just resize": "Stretch image to target resolution",
    "Crop and resize": "Resize image to target resolution by cropping sticking out parts",
    "Resize and fill": "Resize image to fit target resolution",

    "Mask blur": "Blur mask before processing (px)",
    "Masked content": "Content inside masked area",
    "fill": "Fill with image colors",
    "original": "Keep original content",
    "latent noise": "Fill with latent space noise",
    "latent nothing": "Fill with latent space zeroes",
    "Inpaint at full resolution": "Upscale masked region to target resolution, do inpainting, downscale back and paste into original image",

    "Denoising strength": "Algorithm's respect for image content (higher = more unrelated)",

    "Skip": "Skip current image processing",
    "Interrupt": "Stop processing images",
    "Save": "Write image to directory",

    "X values": "Values for X axis (separated by comma)",
    "Y values": "Values for Y axis (separated by comma)",

    "Prompt matrix": "Separate prompts into parts using | character and the script will create a picture for every combination of them (except for the first part, which will be present in all combinations)",
    "X/Y/Z plot": "Create grids with different parameters",
    "Custom code": "Run Python code (must run with \"--allow-code\")",

    "Prompt S/R": "List tokens separated by comma. The first one will be used as a keyword: script will search for this in the prompt and replace it with others.",
    "Prompt order": "List tokens separated by comma. The script will make a variation of prompt with those tokens for their every possible order.",

    "Tiling": "Produce tiled image",
    "Tile overlap": "Overlap between tiles so that merged ones have no seam",

    "Variation seed": "Seed of a different picture to be mixed into the generation",
    "Variation strength": "How strong of a variation to produce (0 = no effect, 1 = complete picture with variation seed)",
    "Resize seed from height": "Produce similar picture from height",
    "Resize seed from width": "Produce similar picture from width",

    "Interrogate": "Reconstruct prompt from image",

    "Images filename pattern": "Define filenames with tags",
    "Directory name pattern": "Define subdirectories names with tags",
    "Max prompt words": "Maximum words in prompt to be used in the [prompt_words] option",

    "Loopback": "Process image multiple times (output images are used as input for the next loop)",
    "Loops": "Number of processing cycles (1 = no loops)",
    "Final denoising strength": "Strength for final loop of each image",
    "Denoising strength curve": "Rate of denoising strength change each loop\n\nAggressive: Most of the change will happen towards the start of the loops\nLinear: Change will be constant through all loops\nLazy: Most of the change will happen towards the end of the loops",

    "Style 1": "Apply style 1",
    "Style 2": "Apply style 2",
    "Apply style": "Apply selected styles to prompt",
    "Create style": "Save current prompts as style",

    "Checkpoint name": "You can either use hash or a part of filename. Recommended to use with Y axis.",
    "Inpainting conditioning mask strength": "Mask strength for inpainting (1 = fully masked, lower = preserve the overall composition, but will struggle with large changes). Only applies to inpainting models",

    "Eta noise seed delta": "Add to seed for more variation",

    "Filename word regex": "This regular expression will be used extract words from filename, and they will be joined using the option below into label text used for training. Leave empty to keep filename text as it is.",
    "Filename join string": "This string will be used to join split words into a single line if the option above is enabled.",

    "Weighted sum": "Result = A * (1 - M) + B * M",
    "Add difference": "Result = A + (B - C) * M",
    "No interpolation": "Result = A",

    "Initialization text": "If the number of tokens is more than the number of vectors, some may be skipped.\nLeave empty to start with zeroed out vectors.",
    "Learning rate": "How fast should training go. Low values will take longer to train, high values may fail to converge (not generate accurate results) and/or may break the embedding (This has happened if you see Loss: nan in the training info textbox. If this happens, you need to manually restore your embedding from an older not-broken backup).\n\nYou can set a single numeric value, or multiple learning rates using the syntax:\n\n   rate_1:max_steps_1, rate_2:max_steps_2, ...\n\nEG:   0.005:100, 1e-3:1000, 1e-5\n\nWill train with rate of 0.005 for first 100 steps, then 1e-3 until 1000 steps, then 1e-5 for all remaining steps.",

    "Clip skip": "Early stopping for CLIP model\n\"1\" is stop at last layer as usual, \"2\" is stop at penultimate layer, etc",

    "Approx NN": "Cheap neural network approximation.\nVery fast compared to VAE, but produces pictures with 4 times smaller horizontal/vertical resolution and lower quality.",
    "Approx cheap": "Very cheap approximation.\nVery fast compared to VAE, but produces pictures with 8 times smaller horizontal/vertical resolution and extremely low quality.",

    "Hires. fix": "Two-step image creation to improve details without changing composition",
    "Hires steps": "Sampling steps for upscaled picture (0 = same as original)",
    "Upscale by": "Image size multiplier",
    "Resize width to": "Resize to this width",
    "Resize height to": "Resize to this height",
    "Discard weights with matching name": "Regular expression; if weights's name matches it, the weights is not written to the resulting checkpoint. Use ^model_ema to discard EMA weights.",
    "Extra networks tab order": "Comma-separated list of tab names; tabs listed here will appear in the Extra Networks UI first and in order listed.",
    "Negative Guidance minimum sigma": "Skip negative prompt for steps where image is already mostly denoised; the higher this value, the more skips there will be; provides increased performance in exchange for minor quality reduction."
};

function updateTooltip(element) {
    if (element.title) return; // already has a title

    let text = element.textContent;
    let tooltip = localization[titles[text]] || titles[text];

    if (!tooltip) {
        let value = element.value;
        if (value) tooltip = localization[titles[value]] || titles[value];
    }

    if (!tooltip) {
        // Gradio dropdown options have `data-value`.
        let dataValue = element.dataset.value;
        if (dataValue) tooltip = localization[titles[dataValue]] || titles[dataValue];
    }

    if (!tooltip) {
        for (const c of element.classList) {
            if (c in titles) {
                tooltip = localization[titles[c]] || titles[c];
                break;
            }
        }
    }

    if (tooltip) {
        element.title = tooltip;
    }
}

// Nodes to check for adding tooltips.
const tooltipCheckNodes = new Set();
// Timer for debouncing tooltip check.
let tooltipCheckTimer = null;

function processTooltipCheckNodes() {
    for (const node of tooltipCheckNodes) {
        updateTooltip(node);
    }
    tooltipCheckNodes.clear();
}

onUiUpdate(function(mutationRecords) {
    for (const record of mutationRecords) {
        if (record.type === "childList" && record.target.classList.contains("options")) {
            // This smells like a Gradio dropdown menu having changed,
            // so let's enqueue an update for the input element that shows the current value.
            let wrap = record.target.parentNode;
            let input = wrap?.querySelector("input");
            if (input) {
                input.title = ""; // So we'll even have a chance to update it.
                tooltipCheckNodes.add(input);
            }
        }
        for (const node of record.addedNodes) {
            if (node.nodeType === Node.ELEMENT_NODE && !node.classList.contains("hide")) {
                if (!node.title) {
                    if (
                        node.tagName === "SPAN" ||
                        node.tagName === "BUTTON" ||
                        node.tagName === "P" ||
                        node.tagName === "INPUT" ||
                        (node.tagName === "LI" && node.classList.contains("item")) // Gradio dropdown item
                    ) {
                        tooltipCheckNodes.add(node);
                    }
                }
                node.querySelectorAll('span, button, p').forEach(n => tooltipCheckNodes.add(n));
            }
        }
    }
    if (tooltipCheckNodes.size) {
        clearTimeout(tooltipCheckTimer);
        tooltipCheckTimer = setTimeout(processTooltipCheckNodes, 1000);
    }
});

onUiLoaded(function() {
    for (var comp of window.gradio_config.components) {
        if (comp.props.webui_tooltip && comp.props.elem_id) {
            var elem = gradioApp().getElementById(comp.props.elem_id);
            if (elem) {
                elem.title = comp.props.webui_tooltip;
            }
        }
    }
});
