autowatch = 1;

var output_dict = new Dict("theme_dict");

var hcl_mode = "hcl"; // can be set to "hsl"

var _ignorelive = false;
var _ignorepatcher = false;
var _uselivedesktop = false;

var alternate_a = 0.15;
var alternate_b = 0.25;
var alternate_c = 0.4;

var _editor_hue_rotation = 0.;
var _editor_saturation = 1.;
var _editor_contrast = 1.;
var _editor_automagic = true;

// we just use the following for building up our variants
var kernel_colors = {};
kernel_colors.fg = "Foreground (Application Chrome)";
kernel_colors.bg = "Background (Application Chrome)";
kernel_colors.void = "Void (Document Background)"; 
kernel_colors.void_anti = "Anti-Void (Comments in Patcher)"; 
kernel_colors.neutral = "Neutral";
kernel_colors.hot = "Hot"; 
kernel_colors.warm = "Warm"; 
kernel_colors.cool = "Cool"; 
kernel_colors.success = "Success"; 
kernel_colors.color1 = "Color1";
kernel_colors.color2 = "Color2";
kernel_colors.color3 = "Color3";
kernel_colors.color4 = "Color4";
kernel_colors.dark = "Primary Dark (i.e Foreground or Background)";
kernel_colors.light = "Primary Light (i.e Foreground or Background)";
kernel_colors.void_dark = "Void Dark (i.e. Void or Anti-Void)"; 
kernel_colors.void_light = "Void Light (i.e. Void or Anti-Void)"; 
kernel_colors.editor_fg = "Text Editor Foreground";
kernel_colors.editor_bg = "Text Editor Background";

var theme_kernels = {};

var default_kernel = {};
theme_kernels["default"] = default_kernel;
var dark_kernel = default_kernel;
theme_kernels["dark"] = default_kernel;

// dark (default)
default_kernel.fg = [0.9, 0.9, 0.9];
default_kernel.bg = [0.15, 0.15, 0.15];
default_kernel.void = [0.1, 0.1, 0.1]; // emptiness
default_kernel.void_anti = [0.8, 0.8, 0.8]; // comments
default_kernel.neutral = [0.3, 0.3, 0.3];
default_kernel.hot = [1., 0.4, 0.3]; 		// red
default_kernel.warm = [0.9, 0.65, 0.05]; 	// orange
default_kernel.cool = [0., 0.6, 1.]; 		// blue
default_kernel.success = [0.25, 0.7, .25]; 	// bright green
default_kernel.color1 = [0.1, 0.45, 0.2];  	// green
default_kernel.color2 = [0., 0.6, 0.75];	// slate
default_kernel.color3 = [0.65, 0.2, 0.45];  // magenta
default_kernel.color4 = [0.3, 1., 1.];		// teal
// alias
theme_kernels["carbon"] = deepcopy(default_kernel);
theme_kernels["deepdark-carbon"] = theme_kernels["carbon"];

// slate
var slate_kernel = deepcopy(default_kernel);
theme_kernels["slate"] = slate_kernel;
theme_kernels["deepdark-slate"] = theme_kernels["slate"];
slate_kernel.bg = [0.11, 0.135, 0.16];
slate_kernel.void = [0.065, 0.095, 0.115]; // emptiness

// earth
var earth_kernel = deepcopy(default_kernel);
theme_kernels["earth"] = earth_kernel;
theme_kernels["deepdark-earth"] = theme_kernels["earth"];
earth_kernel.bg = [0.14, 0.13, 0.115];
earth_kernel.void = [0.1, 0.09, 0.08]; // emptiness

// max 9 (default)
var max9_kernel = deepcopy(default_kernel);
theme_kernels["max9"] = max9_kernel;
max9_kernel.fg = [0.9, 0.9, 0.9];
max9_kernel.bg = [0.125, 0.125, 0.125];
max9_kernel.void = [0.235, 0.235, 0.235]; // emptiness
max9_kernel.void_anti = [0.85, 0.85, 0.85]; // comments
max9_kernel.neutral = [0.325, 0.325, 0.325];

// alias
theme_kernels["max9-default"] = deepcopy(max9_kernel);
// the following modifcations for max9-default handled in generator patch
//theme_map.sidebar.meta.dataview_row1 = "bg_soften_c";
//theme_map.sidebar.meta.dataview_row2 = "bg_soften_a";

// dark-over-medium
var dark_over_medium_kernel = deepcopy(max9_kernel);
theme_kernels["dark-over-medium"] = dark_over_medium_kernel;
dark_over_medium_kernel.bg = [0.15, 0.15, 0.15];
dark_over_medium_kernel.void = [0.35, 0.35, 0.35]; // emptiness
dark_over_medium_kernel.void_anti = [0.85, 0.85, 0.85]; // comments
dark_over_medium_kernel.neutral = [0.4, 0.4, 0.4];

// dark-over-midlight
var dark_over_midlight_kernel = deepcopy(max9_kernel);
theme_kernels["dark-over-midlight"] = dark_over_midlight_kernel;
dark_over_midlight_kernel.bg = [0.15, 0.15, 0.15];
dark_over_midlight_kernel.void = [0.6, 0.6, 0.6]; // emptiness
dark_over_midlight_kernel.void_anti = [0.1, 0.1, 0.1]; // comments
dark_over_midlight_kernel.neutral = [0.4, 0.4, 0.4];


// dark-over-light
var dark_over_light_kernel = deepcopy(max9_kernel);
theme_kernels["dark-over-light"] = dark_over_light_kernel;
dark_over_light_kernel.bg = [0.175, 0.175, 0.175];
dark_over_light_kernel.void = [0.8, 0.8, 0.8]; // emptiness
dark_over_light_kernel.void_anti = [0.2, 0.2, 0.2]; // comments
dark_over_light_kernel.neutral = [0.4, 0.4, 0.4];

// dark2
var dark2_kernel = deepcopy(default_kernel);
theme_kernels["dark2"] = dark2_kernel;
dark2_kernel.fg = [0.9, 0.9, 0.9];
dark2_kernel.bg = [0.115, 0.115, 0.115];
dark2_kernel.void = [0.2, 0.2, 0.2]; // emptiness
dark2_kernel.void_anti = [0.8, 0.8, 0.8]; // comments
dark2_kernel.neutral = [0.3, 0.3, 0.3];
// alias
theme_kernels["graphite"] = deepcopy(dark2_kernel);
theme_kernels["dark-graphite"] = theme_kernels["graphite"];

// lazurite
var lazurite_kernel = deepcopy(dark2_kernel);
theme_kernels["lazurite"] = lazurite_kernel;
theme_kernels["dark-lazurite"] = theme_kernels["lazurite"];
lazurite_kernel.bg = [0.09, 0.14, 0.18];
lazurite_kernel.void = [0.155, 0.2, 0.245]; // emptiness

// bronzite
var bronzite_kernel = deepcopy(dark2_kernel);
theme_kernels["bronzite"] = bronzite_kernel;
theme_kernels["dark-bronzite"] = bronzite_kernel;
bronzite_kernel.bg = [0.155, 0.125, 0.095];
bronzite_kernel.void = [0.225, 0.19, 0.16]; // emptiness

// hematite
var middark_kernel = deepcopy(dark2_kernel);
var hematite_kernel = middark_kernel;
theme_kernels["hematite"] = hematite_kernel;
theme_kernels["middark-hematite"] = hematite_kernel;
theme_kernels["middark"] = hematite_kernel;
hematite_kernel.fg = [0.9, 0.9, 0.9];
hematite_kernel.bg = [0.17, 0.17, 0.17];
hematite_kernel.void = [0.26, 0.26, 0.26]; // emptiness
hematite_kernel.void_anti = [0.9, 0.9, 0.9]; // comments

// sodalite
var sodalite_kernel = deepcopy(middark_kernel);
theme_kernels["sodalite"] = sodalite_kernel;
theme_kernels["middark-sodalite"] = sodalite_kernel;
theme_kernels["middarkcool"] = sodalite_kernel;
sodalite_kernel.bg = [0.15, 0.17, 0.22];
sodalite_kernel.void = [0.24, 0.26, 0.31]; // emptiness

// axinite
var axinite_kernel = deepcopy(middark_kernel);
theme_kernels["axinite"] = axinite_kernel;
theme_kernels["middark-axinite"] = axinite_kernel;
theme_kernels["middarkwarm"] = axinite_kernel;
axinite_kernel.bg = [0.205, 0.173, 0.152];
axinite_kernel.void = [0.297, 0.261, 0.238]; // emptiness

// garnet
var garnet_kernel = deepcopy(middark_kernel);
theme_kernels["garnet"] = garnet_kernel;
theme_kernels["middark-garnet"] = garnet_kernel;
theme_kernels["middarkrose"] = garnet_kernel;
garnet_kernel.bg = [0.221, 0.152, 0.166];
garnet_kernel.void = [0.312, 0.242, 0.255]; // emptiness

// midnight 
var midnight_kernel = deepcopy(default_kernel);
theme_kernels["midnight"] = midnight_kernel;
midnight_kernel.fg = [0.8, 0.8, 0.8];
midnight_kernel.bg = [0.0, 0.0, 0.0];
midnight_kernel.void = [0.0, 0.0, 0.0]; // emptiness
midnight_kernel.void_anti = [0.7, 0.7, 0.7]; // comments
midnight_kernel.neutral = [0.4, 0.4, 0.4];
// alias
theme_kernels["obsidian"] = deepcopy(midnight_kernel);
theme_kernels["deepdark-obsidian"] = theme_kernels["obsidian"];

// medium
var medium_kernel = deepcopy(default_kernel);
theme_kernels["medium"] = medium_kernel;

medium_kernel.fg = [0.05, 0.05, 0.05];
medium_kernel.bg = [0.7, 0.7, 0.7];
medium_kernel.void = [0.75, 0.75, 0.75]; // emptiness
medium_kernel.void_anti = [0.15, 0.15, 0.15]; // comments
medium_kernel.neutral = [0.5, 0.5, 0.5];
// alias
theme_kernels["ash"] = deepcopy(medium_kernel);
theme_kernels["midlight-ash"] = theme_kernels["ash"];

// steel
var steel_kernel = deepcopy(medium_kernel);
theme_kernels["steel"] = steel_kernel;
theme_kernels["midlight-steel"] = theme_kernels["steel"];
steel_kernel.bg = [0.65, 0.675, 0.7];
steel_kernel.void = [0.716, 0.733, 0.75]; // emptiness

// sandstone
var sandstone_kernel = deepcopy(medium_kernel);
theme_kernels["sandstone"] = sandstone_kernel;
theme_kernels["midlight-sandstone"] = theme_kernels["sandstone"];
sandstone_kernel.bg = [0.7, 0.675, 0.65];
sandstone_kernel.void = [0.75, 0.733, 0.716]; // emptiness

// light
var light_kernel = deepcopy(default_kernel);
theme_kernels["light"] = light_kernel;

light_kernel.fg = [0.05, 0.05, 0.05];
light_kernel.bg = [0.9, 0.9, 0.9];
light_kernel.void = [0.95, 0.95, 0.95]; // 
light_kernel.void_anti = [0.25, 0.25, 0.25]; // comments
light_kernel.neutral = [0.7, 0.7, 0.7];

// snow
var snow_kernel = deepcopy(light_kernel);
theme_kernels["snow"] = snow_kernel;
theme_kernels["light-snow"] = theme_kernels["snow"];
snow_kernel.bg = [0.95, 0.95, 0.95];
snow_kernel.void = [1., 1., 1.]; // emptiness

// blizzard
var blizzard_kernel = deepcopy(light_kernel);
theme_kernels["blizzard"] = blizzard_kernel;
blizzard_kernel.bg = [1., 1., 1.];
blizzard_kernel.void = [1., 1., 1.]; // emptiness

// ice
var ice_kernel = deepcopy(light_kernel);
theme_kernels["ice"] = ice_kernel;
theme_kernels["light-ice"] = theme_kernels["ice"];
ice_kernel.bg = [0.81, 0.85, 0.89];
ice_kernel.void = [0.9, 0.925, 0.95]; // emptiness

// desert
var desert_kernel = deepcopy(light_kernel);
theme_kernels["desert"] = desert_kernel;
theme_kernels["light-desert"] = theme_kernels["desert"];
desert_kernel.bg = [0.875, 0.85, 0.825];
desert_kernel.void = [0.95, 0.925, 0.9]; // emptiness

// rose
var rose_kernel = deepcopy(light_kernel);
theme_kernels["rose"] = rose_kernel;
theme_kernels["light-rose"] = theme_kernels["rose"];
rose_kernel.bg = [0.9, 0.85, 0.85];
rose_kernel.void = [0.95, 0.925, 0.925]; // emptiness

// max8_dark (-ish. not exact)
var max8_dark_kernel = deepcopy(default_kernel);
theme_kernels["max8_dark"] = max8_dark_kernel;
max8_dark_kernel.fg = [0.9, 0.9, 0.9];
max8_dark_kernel.bg = [0.2, 0.2, 0.2];
max8_dark_kernel.void = [0.9, 0.9, 0.9]; // emptiness
max8_dark_kernel.void_anti = [0.15, 0.15, 0.15]; // comments
max8_dark_kernel.neutral = [0.5, 0.5, 0.5];

var vaporwave_kernel = deepcopy(default_kernel);
theme_kernels["vaporwave"] = vaporwave_kernel;
vaporwave_kernel.fg = [1., 0.7, 1.];
vaporwave_kernel.bg = [0.5, 0.1, 0.3];
vaporwave_kernel.void = [0., .5, 0.5]; // emptiness
vaporwave_kernel.void_anti = [0.4, 0.1, 0.3]; // comments
vaporwave_kernel.neutral = [0.6, 0.6, 0.6];
vaporwave_kernel.hot = [1., 0.4, 0.3]; 			// red
vaporwave_kernel.warm = [0.9, 0.65, 0.05]; 		// orange
vaporwave_kernel.cool = [0., 0.6, .75]; 		// blue
vaporwave_kernel.success = [0.25, 0.7, .25]; 	// bright green
vaporwave_kernel.color1 = [0., 0.45, 0.2];  	// green
vaporwave_kernel.color2 = [0., 0.6, 0.75];		// slate
vaporwave_kernel.color3 = [0.65, 0.2, 0.45];  	// magenta
vaporwave_kernel.color4 = [0.3, 1., 1.];		// teal

var user_dark_kernel = deepcopy(dark_kernel);
theme_kernels["user_dark"] = user_dark_kernel;

var user_light_kernel = deepcopy(light_kernel);
theme_kernels["user_light"] = user_light_kernel;

// derived colors
function make_individual_variants(kernel, color_name, variant_name, variant_function)
{
    kernel[color_name + "_" + variant_name + "_a"] = variant_function(kernel, color_name, alternate_a); 
    kernel[color_name + "_" + variant_name + "_b"] = variant_function(kernel, color_name, alternate_b); 
    kernel[color_name + "_" + variant_name + "_c"] = variant_function(kernel, color_name, alternate_c); 
}

function make_individual_variants_mix(kernel, color_name1, color_name2)
{
    kernel[color_name1 + "_" + color_name2 + "_25"] = variant_mix(kernel, color_name1, color_name2, 0.25); 
    kernel[color_name1 + "_" + color_name2 ] = variant_mix(kernel, color_name1, color_name2, 0.5); 
    kernel[color_name1 + "_" + color_name2 + "_75"] = variant_mix(kernel, color_name1, color_name2, 0.75); 

    /* unused
    kernel[color_name1 + "_" + color_name2 + "_a"] = variant_mix(kernel, color_name1, color_name2, alternate_a); 
    kernel[color_name1 + "_" + color_name2 + "_b"] = variant_mix(kernel, color_name1, color_name2, alternate_b); 
    kernel[color_name1 + "_" + color_name2 + "_c"] = variant_mix(kernel, color_name1, color_name2, alternate_c); 
    */
}

function build_variant_colors(kernel)
{
    var fg_hcl = gl2hcl(kernel.fg);
    var bg_hcl = gl2hcl(kernel.bg);
    var void_hcl = gl2hcl(kernel.void);
    var void_anti_hcl = gl2hcl(kernel.void_anti);
    
    // primary dark/light (between fg/bg)
    if (fg_hcl[2] > bg_hcl[2]) {
        kernel.dark = deepcopy(kernel.bg);
        kernel.light = deepcopy(kernel.fg);
    } else {
        kernel.dark = deepcopy(kernel.fg);
        kernel.light = deepcopy(kernel.bg);
    }

    // void dark/light (between void/void_anti)
    if (void_anti_hcl[2] > void_hcl[2]) {
        kernel.void_dark = deepcopy(kernel.void);
        kernel.void_light = deepcopy(kernel.void_anti);
    } else {
        kernel.void_dark = deepcopy(kernel.void_anti);
        kernel.void_light = deepcopy(kernel.void);
    }

    // editor bg/fg (use greatest contrast)
    if (fg_hcl[2] > bg_hcl[2]){
        // brightest light on darkest dark
        if (void_anti_hcl[2] > fg_hcl[2]) {
            kernel.editor_fg = deepcopy(kernel.void_anti);
        } else {
            kernel.editor_fg = deepcopy(kernel.fg);
        }
        if (void_hcl[2] < bg_hcl[2]) {
            kernel.editor_bg = text_editor_bgdeeper(kernel.void);
        } else {
            kernel.editor_bg = text_editor_bgcontrast(kernel.bg);
        }
    } else {
        // darkest dark on brightest light
        if (void_anti_hcl[2] < fg_hcl[2]) {
            kernel.editor_fg = deepcopy(kernel.void_anti);
        } else {
            kernel.editor_fg = deepcopy(kernel.fg);
        }
        if (void_hcl[2] > bg_hcl[2]) {
            kernel.editor_bg = text_editor_bgdeeper(kernel.void);
        } else {
            kernel.editor_bg = text_editor_bgcontrast(kernel.bg);
        }
    }

    for (var name in kernel_colors) 
    {
        if (name != "neutral") {
            make_individual_variants(kernel, name, "soften", variant_soften);
            make_individual_variants(kernel, name, "harden", variant_harden);
        }
        // unused
        //make_individual_variants(kernel, name, "lighten", variant_lighten);
        //make_individual_variants(kernel, name, "darken", variant_darken);
        if (name == "fg" || 
            name == "bg" || 
            name == "void" || 
            name == "void_anti" ||
            name == "dark" || 
            name == "light" ||
            name == "void_dark" || 
            name == "void_light" ||
            name == "editor_bg" ||
            name == "editor_fg") {
            make_individual_variants_mix(kernel, name, "neutral");
            make_individual_variants_mix(kernel, name, "hot");
            make_individual_variants_mix(kernel, name, "warm");
            make_individual_variants_mix(kernel, name, "cool");
            make_individual_variants_mix(kernel, name, "success");
            make_individual_variants_mix(kernel, name, "color1");
            make_individual_variants_mix(kernel, name, "color2");
            make_individual_variants_mix(kernel, name, "color3");
            make_individual_variants_mix(kernel, name, "color4");
            if (name == "fg" || name == "bg") {
                make_individual_variants_mix(kernel, name, "void");
            }
        } else if (name != "neutral") {
            make_individual_variants_mix(kernel, name, "neutral");	
        } 
    }
}

var theme_map = {};
theme_map.styledefaults = {};

// Patcher content  ----------------------------------------------------- // 
theme_map.content = {};

theme_map.content.alignmentguide = "hot_neutral";
theme_map.content.box_selection_background = "fg_cool_25";
theme_map.content.comment_outline = "neutral"; 
theme_map.content.object_bogus_color = "bg_hot_25";
theme_map.content.patcher_box_selection = "bg_cool";
theme_map.content.patcher_circle_fill =  "fg_success_75";
theme_map.content.patcher_circle_outline =  "dark_soften_b",
theme_map.content.patcher_io_connected_inside = "bg";
theme_map.content.patcher_io_connected_outside = "bg_neutral";
theme_map.content.patcher_io_unconnected = "fg_soften_b";
theme_map.content.patcher_tinge_hilite = "cool_soften_a";
theme_map.content.patcher_tinge_object = "warm_soften_a";

// leave these out for now
//theme_map.content.patcher_cool_inlet = "cool_soften_b";	
//theme_map.content.patcher_hot_inlet = "hot_soften_b"; 	
//theme_map.content.patcher_outlet = "warm";				
//theme_map.content.patchline_badge_break = "hot";
//theme_map.content.patchline_badge_disabled = "bg_neutral";
//theme_map.content.patchline_badge_monitor = "warm";
//theme_map.content.patchline_badge_post = "cool";
//theme_map.content.presentation_frame = "hot_soften_a";
//theme_map.content.plugintoolbar_background = "bg_cool";
//theme_map.content.plugintoolbar_header_background = "bg";


// style (patcher and objects)
theme_map.styledefaults.bgcolor = "bg";
theme_map.styledefaults.color = "fg_cool"; // midpoint(fg, cool)
theme_map.styledefaults.elementcolor = "bg_neutral"; // midpoint(bg, neutral)
theme_map.styledefaults.accentcolor = "fg_neutral_75"; // midpoint(fg, neutral)
theme_map.styledefaults.selectioncolor = "fg_warm_75"; // midpoint(fg, warm)
theme_map.styledefaults.textcolor = "void_anti";  
theme_map.styledefaults.textcolor_inverse = "fg"; 
theme_map.styledefaults.patchlinecolor = "void_anti_neutral_75";
//theme_map.styledefaults.clearcolor = [1.,1.,1.,0.]; // needs to keep zero alpha
theme_map.styledefaults.locked_bgcolor = "void"; 
theme_map.styledefaults.editing_bgcolor = "void";
theme_map.styledefaults.stripecolor = "bg_neutral_25";  
theme_map.styledefaults.bgfillcolor_color = "bg_neutral_25";
theme_map.styledefaults.bubble_outlinecolor = "void_anti";
theme_map.styledefaults.bubble_bgcolor = "void";
/* Super special case for keyslider
"darkcolor" : [ 0.0, 0.0, 0.0, 1.0 ], // link to fg
"lightcolor" : [ 0.92156862745098, 0.917647058823529, 0.933333333333333, 1.0 ],
*/
// syntax highlighting
theme_map.styledefaults.syntax_objectcolor = "theme_map.jed.meta.libfunction";
theme_map.styledefaults.syntax_attributecolor = "editor_fg_cool";
theme_map.styledefaults.syntax_objargcolor = "theme_map.jed.defaulttext";
theme_map.styledefaults.syntax_attrargcolor = "editor_fg_hot_25"; // "theme_map.jed.meta.string";

// application chrome ---------------------------------------------- // 

theme_map.assistance_background = "bg_soften_a";
theme_map.assistance_text = "fg";
theme_map.patcher_active_tab = "bg_soften_a";
theme_map.patcher_inactive_tab = "bg_soften_c";
theme_map.patcher_tab_bottom_line = "bg_soften_b";
theme_map.patcher_tab_text_active = "cool";
theme_map.patcher_tab_text_inactive = "fg_soften_b";
theme_map.patcher_tab_top_line = "bg_soften_a";

// special colors
theme_map.audiocolor = "cool";
theme_map.dirtygreen = "color1"; // format palette
theme_map.favicolor = "warm";
theme_map.iceice = "cool"; // inpector attr frozen, and autocompletion
theme_map.local_audiocolor = "warm";
theme_map.transport_green = "fg_success";
theme_map.yellowpin = "warm";

// toolbar
theme_map.toolbar_active_unique = "fg_cool_75";
theme_map.toolbar_background_active = "bg";
theme_map.toolbar_background_inactive = "bg_soften_a";
theme_map.toolbar_badge = "hot";
theme_map.toolbar_disabled_active = "fg_neutral_75"; 
theme_map.toolbar_disabled_inactive = "fg_neutral_75";
theme_map.toolbar_divider_active = "bg_soften_a";
theme_map.toolbar_divider_inactive = "bg_soften_b";
theme_map.toolbar_enabled_modified = "fg_soften_b";
theme_map.toolbar_enabled_off = "fg";
theme_map.toolbar_enabled_on = "warm";
theme_map.toolbar_overlay_background = "bg_soften_a";
theme_map.toolbar_searchbar_background = "bg_soften_b";
theme_map.toolbar_searchbar_emptytext = "fg_neutral";
theme_map.toolbar_searchbar_hilite = "bg_cool";
theme_map.toolbar_searchbar_text = "fg";

// browser
theme_map.browser_background = "bg"; // void or bg_neutral?

// calendar (most colors come from inspector)
theme_map.calendar_activity = "neutral";
theme_map.calendar_success = "success";

// colortab1-9 ignore for now

// clues
theme_map.clue_system_background = "bg";
theme_map.clue_text = "fg";
theme_map.clue_user_background = "bg_soften_a";

// format palette
// TODO: could convert into terms of toolbar colors
theme_map.formatpalette_background = "bg";
theme_map.formatpalette_inherited = "bg_soften_b";
theme_map.formatpalette_inherited_background = "bg_neutral";
theme_map.formatpalette_inherited_on = "fg";
theme_map.formatpalette_renamer_background = "bg";

// menu
theme_map.menu_background = "bg_soften_a";
theme_map.menu_disabled_text = "fg_neutral_75";
theme_map.menu_highlighted_background = "bg_neutral";
theme_map.menu_highlighted_text = "fg_soften_a";
theme_map.menu_headertext = "bg_neutral";
theme_map.menu_text = "fg_soften_a";

// project window 
theme_map.projectwindow_background = "bg";
theme_map.projectwindow_divider = "bg_soften_b";

// parameter window
//theme_map.pattrstorage_active = "warm";

// misc
//theme_map.standardappletexthilite = "bg_cool";
theme_map.text_editingcolor = "bg_cool";

// sidebar ----------------------------------------------------- //
// chrome harden
theme_map.sidebar = {};
theme_map.sidebar.meta = {};

theme_map.sidebar.meta.dataview_row1 = "bg_harden_b";
theme_map.sidebar.meta.dataview_row2 = "bg_harden_a";
theme_map.sidebar.meta.dataview_header_bg = "bg";
theme_map.sidebar.meta.disabled_text = "fg_neutral_75";
theme_map.sidebar.meta.details_bg = "bg_harden_a";
theme_map.sidebar.meta.headerline = "bg_harden_b";
theme_map.sidebar.meta.menuheader = "warm";
theme_map.sidebar.meta.linkcolor = "fg_cool";
theme_map.sidebar.meta.selectedrow = "bg_cool";
theme_map.sidebar.meta.selection = "cool_soften_b";
theme_map.sidebar.meta.tab = "warm";
theme_map.sidebar.meta.texteditor_background = "bg_soften_c"; 
theme_map.sidebar.meta.textcolor = "fg";

// inspector
theme_map.sidebar.refbar_stripe2  = "theme_map.sidebar.meta.dataview_row2";
theme_map.sidebar.refbar_details_background = "theme_map.sidebar.meta.details_bg";
theme_map.sidebar.refbar_details_linkcolor = "theme_map.sidebar.meta.linkcolor";
theme_map.sidebar.inspector_background = "theme_map.sidebar.meta.dataview_row1";
theme_map.sidebar.inspector_disabled_text = "theme_map.sidebar.meta.disabled_text";
theme_map.sidebar.inspector_header_background = "theme_map.sidebar.meta.dataview_header_bg";
theme_map.sidebar.inspector_headerline = "theme_map.sidebar.meta.headerline";
theme_map.sidebar.inspector_menuheader = "theme_map.sidebar.meta.menuheader";
theme_map.sidebar.inspector_selectedrow = "theme_map.sidebar.meta.selectedrow";
theme_map.sidebar.inspector_selection = "theme_map.sidebar.meta.selection";
theme_map.sidebar.inspector_tab = "theme_map.sidebar.meta.tab";
theme_map.sidebar.inspector_texteditor_background = "theme_map.sidebar.meta.texteditor_background";

// lessons
theme_map.sidebar.lesson_button_background = "bg_neutral";
theme_map.sidebar.lesson_downloading = "fg_color3";
theme_map.sidebar.lesson_inprogress = "fg_success";
theme_map.sidebar.lesson_play = "success";
theme_map.sidebar.lesson_range = "fg_success";
theme_map.sidebar.lesson_remote = "bg_neutral_75";
theme_map.sidebar.lesson_started = "fg_cool_75";
theme_map.sidebar.lesson_step_border = "fg_soften_b";
theme_map.sidebar.lesson_step_bottomgradient = "bg";
theme_map.sidebar.lesson_step_circle = "warm";
theme_map.sidebar.lesson_step_titlebar = "bg_neutral";
theme_map.sidebar.lesson_step_topgradient = "bg_neutral_25";
theme_map.sidebar.lesson_text_hilite = "theme_map.sidebar.meta.selection";
theme_map.sidebar.lesson_todo = "fg_neutral";
theme_map.sidebar.lessonbrowser_row1_background = "theme_map.sidebar.meta.dataview_row1";
theme_map.sidebar.lessonbrowser_row2_background = "theme_map.sidebar.meta.dataview_row2";

// max window
theme_map.sidebar.maxwindow_bugtext = "fg_cool_75";
theme_map.sidebar.maxwindow_errorbackground = "bg_hot";
theme_map.sidebar.maxwindow_errorbackground2 = "bg_hot_25";
theme_map.sidebar.maxwindow_errortext = "theme_map.sidebar.meta.textcolor";
theme_map.sidebar.maxwindow_postobject = "theme_map.sidebar.meta.textcolor";
theme_map.sidebar.maxwindow_postobject_hilite = "warm_neutral";
theme_map.sidebar.maxwindow_posttext = "theme_map.sidebar.meta.textcolor";
theme_map.sidebar.maxwindow_selection_background = "theme_map.sidebar.meta.selectedrow";
theme_map.sidebar.maxwindow_warningbackground1 = "bg_warm";
theme_map.sidebar.maxwindow_warningbackground2 = "bg_warm_25";
theme_map.sidebar.maxwindow_warningtext = "fg_warm_25";

// patcherbrowser
theme_map.sidebar.patcherbrowser_results_background = "theme_map.sidebar.meta.dataview_header_bg"; // currently unused?
theme_map.sidebar.patcherbrowser_results_darkrowbg = "theme_map.sidebar.meta.dataview_row1";
theme_map.sidebar.patcherbrowser_results_lightrowbg = "theme_map.sidebar.meta.dataview_row2";
theme_map.sidebar.patcherbrowser_results_selected  = "theme_map.sidebar.meta.selectedrow";
theme_map.sidebar.patcherbrowser_results_textcolor = "theme_map.sidebar.meta.textcolor"; 

// jed --------------------------------------------------------- //
theme_map.jed = {};
theme_map.jed.meta = {};

theme_map.jed.background = "editor_bg";
theme_map.jed.defaulttext = "editor_fg";
theme_map.jed.hilite = "void_cool";
theme_map.jed.linenumber_text = "editor_fg_soften_a";
                 
theme_map.jed.meta.bracket = "editor_fg";
theme_map.jed.meta.comment = "editor_fg_color1";
theme_map.jed.meta.error = "hot";
theme_map.jed.meta.number = "editor_fg_color4";
theme_map.jed.meta.identifier = "editor_fg_color2";
theme_map.jed.meta.keyword = "editor_fg_color3";
theme_map.jed.meta.operator = "editor_fg";
theme_map.jed.meta.preprocessor = "editor_fg_warm";
theme_map.jed.meta.punctuation = "editor_fg";
theme_map.jed.meta.string = "editor_fg_hot";
theme_map.jed.meta.libfunction = "editor_fg_warm";
theme_map.jed.meta.userfunction = "editor_fg_warm_25";
theme_map.jed.meta.namedconstant = "editor_fg_cool";

// language specific needs (TODO: eliminate. at least move to second pass not from file theme_map)
// need to fix lua tokenizer since it is currently hard coded (double check) 
// also look at default JUCE cpp, lua, and xml (are these used at all?)
theme_map.jed.cpp_preprocessor = "theme_map.jed.meta.preprocessor";
theme_map.jed.expr_bracket = "theme_map.jed.meta.bracket";
theme_map.jed.expr_comment = "theme_map.jed.meta.comment";
theme_map.jed.expr_error = "theme_map.jed.meta.error";
theme_map.jed.expr_float = "theme_map.jed.meta.number";
theme_map.jed.expr_integer = "theme_map.jed.meta.number";
theme_map.jed.expr_identifier = "theme_map.jed.meta.identifier";
theme_map.jed.expr_keyword = "theme_map.jed.meta.keyword";
theme_map.jed.expr_operator = "theme_map.jed.meta.operator";
theme_map.jed.expr_preprocessor = "theme_map.jed.meta.preprocessor";
theme_map.jed.expr_punctuation = "theme_map.jed.meta.punctuation";
theme_map.jed.expr_string = "theme_map.jed.meta.string";
theme_map.jed.expr_corefunction = "theme_map.jed.meta.libfunction";
theme_map.jed.expr_userfunction = "theme_map.jed.meta.libfunction";
theme_map.jed.expr_namedconstant = "theme_map.jed.meta.namedconstant";
theme_map.jed.js_bracket = "theme_map.jed.meta.bracket";
theme_map.jed.js_comment = "theme_map.jed.meta.comment";
theme_map.jed.js_error = "theme_map.jed.meta.error";
theme_map.jed.js_float = "theme_map.jed.meta.number";
theme_map.jed.js_integer = "theme_map.jed.meta.number";
theme_map.jed.js_identifier = "theme_map.jed.meta.identifier";
theme_map.jed.js_keyword = "theme_map.jed.meta.keyword";
theme_map.jed.js_operator = "theme_map.jed.meta.operator";
theme_map.jed.js_punctuation = "theme_map.jed.meta.punctuation";
theme_map.jed.js_string = "theme_map.jed.meta.string";
theme_map.jed.js_corefunction = "theme_map.jed.meta.libfunction";
theme_map.jed.js_maxfunction = "theme_map.jed.meta.libfunction";

// live colors: 
theme_map.live = {};

theme_map.live.desktop = "void";
theme_map.live.lcd_bg = "dark_harden_b";
theme_map.live.lcd_frame = "dark_soften_b";
theme_map.live.lcd_control_fg = "light_warm";
theme_map.live.lcd_control_fg_alt = "light_cool";
theme_map.live.lcd_control_fg_zombie = "neutral";
theme_map.live.lcd_title = "light_soften_b";
theme_map.live.surface_bg = "void_soften_b",
theme_map.live.control_bg = "void_soften_a";
theme_map.live.control_text_bg = "void";
theme_map.live.control_fg = "void_anti";
theme_map.live.control_fg_on = "dark_harden_b";
theme_map.live.control_fg_off = "void_anti";
theme_map.live.control_selection = "warm";
theme_map.live.control_zombie = "void_anti_neutral";
theme_map.live.value_arc = "void_anti_cool";
theme_map.live.value_bar = "void_anti_cool";
theme_map.live.active_automation = "hot";
theme_map.live.inactive_automation = "hot_neutral";
theme_map.live.contrast_frame = "dark_harden_a";
theme_map.live.assignment_text_bg = "theme_map.live.control_bg";
theme_map.live.control_fg_zombie = "theme_map.live.control_zombie";
theme_map.live.value_arc_zombie = "theme_map.live.control_zombie";
theme_map.live.numbox_triangle = "theme_map.live.lcd_control_fg_alt";
theme_map.live.macro_title = "theme_map.live.control_bg";
theme_map.live.selection = "void_cool"; // "SelectionBackground" RGBA(199, 237, 255)
theme_map.live.led_bg = "void_neutral_25";
theme_map.live.meter_bg = "dark_harden_b";
theme_map.live.surface_frame = "void_anti_neutral_25";
theme_map.live.control_fg_off_zombie = "void_anti_neutral";
theme_map.live.control_fg_on_zombie = "dark_neutral";
theme_map.live.focus_frame = "void_anti_neutral_75";
theme_map.live.dial_fg = "void_anti_neutral";
theme_map.live.dial_triangle = "void_anti"; 
theme_map.live.dial_needle = "void_anti";
theme_map.live.dial_fg_zombie = "void_anti_neutral";
theme_map.live.dial_needle_zombie = "theme_map.live.dial_fg_zombie";
theme_map.live.control_text_zombie = "void_anti_neutral";
theme_map.live.control_text_selection = "void_anti";
theme_map.live.control_fill_handle = "void_anti_neutral";
theme_map.live.arranger_grid_tiles = "void_anti";
theme_map.live.control_text_selection_standby = "void_anti_soften_a"
theme_map.live.display_scale_text = "light_soften_c";

// leave unchanged for now, but could do something similar to the following
//theme_map.live.alert = "hot"; // JRGBA(255, 125, 67, 255)
//theme_map.live.control_selection_alt = "theme_map.live.lcd_control_fg_alt"; // JRGBA(0, 238, 255, 255)
//theme_map.live.display_handle_one = "theme_map.live.lcd_control_fg"; // JRGBA(255, 177, 0, 255)
//theme_map.live.display_handle_two = "theme_map.live.lcd_control_fg_alt"; // JRGBA(247, 110, 110, 255)
//theme_map.live.display_line_one =  "theme_map.live.lcd_control_fg"; // JRGBA(255, 177, 0, 255)
//theme_map.live.display_line_two =  "theme_map.live.lcd_control_fg_alt"; // JRGBA(85, 222, 246, 255)
//theme_map.live.live_freeze_color =  "cool"; //  JRGBA(79, 163, 252, 255)
//theme_map.live.live_gain_reduction_line_color =  "theme_map.live.lcd_control_fg"; // JRGBA(255, 181, 50, 255)
//theme_map.live.key_assignment =  JRGBA(255, 100, 0, 255);
//theme_map.live.macro_assignment =  JRGBA(0, 218, 72, 255);
//theme_map.live.macro_assigned =  JRGBA(0, 218, 72, 255);
//theme_map.live.midi_assignment =  JRGBA(64, 52, 239, 255);
//theme_map.live.modulation = JRGBA(0, 236, 255, 255); 
//theme_map.live.play = JRGBA(0, 250, 163, 255);
//theme_map.live.record = JRGBA(255, 89, 95, 255);
//theme_map.live.live_prelisten = JRGBA(26, 125, 241, 255);
//theme_map.live.spectrum_alternative_color = "cool_neutral"; //JRGBA(74, 161, 255, 255)
//theme_map.live.spectrum_default_color = "neutral"; //JRGBA(100, 100, 100, 255)
//theme_map.live.spectrum_grid_lines = "fg_neutral"; //JRGBA(159, 159, 159, 85)
//theme_map.live.selection_standby = "cool_neutral"; // JRGBA(171, 198, 203, 255)
//theme_map.live.surface_frame_focus = "bg_soften_c"; //JRGBA(110, 110, 110, 255) 
//theme_map.live.live_threshold_line_color = "cool"; //JRGBA(109, 215, 255, 255);
//theme_map.live.value_bar_two = JRGBA(248, 118, 128, 255);
//theme_map.live.value_bar_three = JRGBA(241, 172, 0, 255);
//theme_map.live.input_curve_color = "fg";
//theme_map.live.input_curve_outline_color = "bg";
//theme_map.live.output_curve_color = "fg_cool_25";
//theme_map.live.output_curve_outline_color = "fg_cool_50";



var theme_map_default = deepcopy(theme_map);

function deepcopy(o)
{
    if (o) {
        return JSON.parse(JSON.stringify(o));
    } else {
        return undefined;
    }
}

// could make a theme_kernel class and construct with these functions
// currently unused
function kernel_init_val(k, name, vals, defaults)
{
    k[name] = (vals && vals[name]) ? vals[name] : defaults[name];
}

function theme_kernel(vals)
{
    var k = {};
    
    for (var name in default_kernel) {
        kernel_init_val(k, name, vals, default_kernel);
    }

    return k;
}

function clamp(input,min,max)
{
    return (input>max) ? max : (input<min) ? min : input;
}

function trunc(f)
{
    var i = f|0;
    return i;
}

function mix(x, y, a)
{
    if (!x && (x !== 0)) return y ? y : 0.;
    if (!y && (y !== 0)) return x;
    return x*(1-a)+y*a;
}

function rgb_mix(c1, c2, a)
{
    var c3 = new Array(3);

    c3[0] = mix(c1[0], c2[0], a);
    c3[1] = mix(c1[1], c2[1], a);
    c3[2] = mix(c1[2], c2[2], a);

    return c3;
}


function hcl_mix(a, b, amount)
{
    var h_a = a[0];
    var h_b = b[0];
    var c_a = a[1];
    var c_b = b[1];

    // if chroma values is zero for one color, 
    // match in order to not interpolate hue them
    if (!c_b) {
        h_b = h_a;
    } else if (!c_a) {
        h_a = h_b;
    }
 
    // interpolate shortest distance around hue circle between the colors
    // if they are exactly complementary hues (180 degrees apart), I suppose
    // it's a toss up as to which direction around circle to interpolate
    if ((h_a - h_b) > 180) {
        h_b += 360;
    }

    var h = mix(h_a,h_b,amount);
    var c = mix(a[1],b[1],amount);
    var l = mix(a[2],b[2],amount);
    
    return [h,c,l];
}

function hcl_mix_dominant_hue(a, b, amount)
{
    var h_a = a[0];
    var h_b = b[0];
    var c_a = a[1];
    var c_b = b[1];
    var h = 0;

    // if chroma values is zero for one color, 
    // match in order to not interpolate hue them
    // if they are far apart choose the dominant chroma's hue
    if (!c_b) {
        h = h_b = h_a;
    } else if (!c_a) {
        h = h_a = h_b;
    } else {
        if (Math.abs(c_a - c_b) > 10.) {
            if (c_a > c_b) {
                h = h_a;
            } else {
                h = h_b;
            }
        } else {
            h = mix(h_a,h_b,amount);
        }
    }

    var c = mix(a[1],b[1],amount);
    var l = mix(a[2],b[2],amount);
    
    return [h,c,l];
}

function variant_mix(kernel, color_name1, color_name2, amount, colorspace)
{
    if (!colorspace)
        colorspace = hcl_mode;

    var c = hcl_mix_dominant_hue(gl2hcl(kernel[color_name1]), gl2hcl(kernel[color_name2]), amount);

    return hcl2gl(c);
}

function rgb_mix_in_hcl(a, b, amount)
{
    var c = hcl_mix(gl2hcl(a), gl2hcl(b), amount);
    
    return hcl2gl(c);
}

function variant_soften(kernel, color_name, amount)
{
    var neutral = gl2hcl(kernel.neutral);
    var source = gl2hcl(kernel[color_name]);

    // keep our brightness target at least 0.1 away
    // so that we don't have total washout for softened variants
    if (source[2] < neutral[2]) {
        if ((neutral[2] - source[2]) < 10) {
            neutral[2] = neutral[2]+10;
        }
    } else {
        if ((source[2] - neutral[2]) < 10) {
            neutral[2] = neutral[2]-10;
        }
    }
    // keep chroma variation subtler than lightness, esp harden
    var c;
    if (amount > 0) {
        c = mix(source[1], neutral[1], amount * 0.5);
    } else {
        c = mix(source[1], neutral[1], amount * 0.25);
    }
    var l = mix(source[2], neutral[2], amount);

    return hcl2gl([source[0], c, l]);
}

function variant_harden(kernel, color_name, amount)
{
    return variant_soften(kernel, color_name, -amount)
}

function variant_darken(kernel, color_name, amount)
{
    // absolute lightness offset
    var v = gl2hcl(kernel[color_name]);
    v[2] -= amount*100;
    return hcl2gl(v);}

function variant_lighten(kernel, color_name, amount)
{
    // absolute lightness offset
    var v = gl2hcl(kernel[color_name]);
    v[2] += amount*100;
    return hcl2gl(v);
}


function text_editor_bgcontrast(c)
{
    var c1 = gl2hcl(c);
    if (c1[2] > 50) {
        if (c1[2] <= 75) {
            c1[2] += 8; 
        } else if (c1[2] < 95) {
            c1[2] += 4;
        } else {
            c1[2] -= 3;
        } 
    } else {
        if (c1[2] >= 25) {
            c1[2] -= 8;
        } else if (c1[2] > 5) {
            c1[2] -= 4;
        } else {
            c1[2] += 3;
        }
    }
    return hcl2gl(c1)
}

function text_editor_bgdeeper(c)
{
    var c1 = gl2hcl(c);
    if (c1[2] > 50) {
        if (c1[2] <= 75) {
            c1[2] += 8; 
        } else if (c1[2] <= 90) {
            c1[2] += 4;
        } 
    } else {
        if (c1[2] >= 25) {
            c1[2] -= 8;
        } else if (c1[2] >= 10) {
            c1[2] -= 4;
        } 
    }
    return hcl2gl(c1)
}

function hcl2gl(c) 
{
   return hcl2rgb(c);
}

function gl2hcl(c) 
{
   return rgb2hcl(c);
}

function string_startswith(s, prefix)
{
    if (s) {
        return s.slice(0, prefix.length) == prefix;
    } else {
        return false;
    }
}

function arrayfromarguments(args)
{
    var a = new Array(args.length);
    for (var i = 0; i < args.length; i++) {
        a[i] = args[i];
    }
    return a;
}

// Max messages:

function createkernel(dest_name, src_name) {
    if (!dest_name) dest_name = "user";
    if (!src_name) src_name = "default";
    copykernel(dest_name, src_name);
}

function kernelcolor() {
    var msg = arrayfromarguments(arguments);
    if (msg && msg.length > 3) {
        var color = msg.slice(2);
        dokernelcolor(msg[0], msg[1], color);
    }
}

function kernelcolor_hcl() {
    var msg = arrayfromarguments(arguments);
    if (msg && msg.length > 3) {
        var color = msg.slice(2);
        dokernelcolor(msg[0], msg[1], hcl2gl(color));
    }
};
function thememap() 
{
    var msg = arrayfromarguments(arguments);
     // by named reference
    if (msg && (msg.length == 2) && (typeof msg[1] == "string")) {
        dothememap(msg[0], msg[1]);
    }
    // by specific color value
    if (msg && msg.length > 2) {
        var color = msg.slice(1);
        dothememap(msg[0], color);
    }
};

function thememap_hcl() 
{
    var msg = arrayfromarguments(arguments);
     // by named reference
    if (msg && (msg.length == 2) && (typeof msg[1] == "string")) {
        dothememap(msg[0], msg[1]);
    }
    // by specific color value
    if (msg && msg.length > 2) {
        var color = msg.slice(1);
        dothememap(msg[0], hcl2gl(color));
    }
};

function resetmap() 
{
    theme_map = deepcopy(theme_map_default);
};

function gen() 
{
    var msg = arrayfromarguments(arguments);
    if (msg.length == 0) {
        generate();
    } else if (msg.length == 1) {
        generate(msg[0]);
    } else if (msg.length == 2) {
        generate(msg[0], msg[1]);
    } else if (msg.length == 3) {
        generate(msg[0], msg[1], msg[2]);
    } else if (msg.length == 4) {
        generate(msg[0], msg[1], msg[2], msg[3]);
    } else if (msg.length == 5) {
        generate(msg[0], msg[1], msg[2], msg[3], msg[4]);
    }
}

function quickcalc(theme, r, g, b, contrast, neutral, void_shift) 
{
    doquickcalc(theme, [r, g, b], contrast, neutral, void_shift);
}

function quickcalc_hcl(theme, h, c, l, contrast, neutral, void_shift) 
{
    var rgb = hcl2gl([h, c, l]);
    doquickcalc(theme, rgb, contrast, neutral, void_shift);
}

function alternates() 
{
    var msg = arrayfromarguments(arguments);
    if (msg.length > 0)
        alternate_a = msg[0];
    if (msg.length > 1)
        alternate_b = msg[1];
    if (msg.length > 2)
        alternate_c = msg[2];
};

function editor_hue_rotation(v) 
{
    _editor_hue_rotation = v;
    _editor_automagic = false;
};

function editor_saturation(v) 
{
    _editor_saturation = v;
    _editor_automagic = false;
};

function editor_constrast(v) 
{
    _editor_contrast = v;
    _editor_automagic = false;
};

function editor_automagic_reset()
{
    _editor_automagic = true;
} 

function ignorelive(val)
{
    _ignorelive = val;
};

function ignorepatcher(val)
{
    _ignorepatcher = val;
}

function uselivedesktop(val)
{
    _uselivedesktop = val;
}

var _liveversionstring = "";
var _liveversion = 12;

function liveversion(s) 
{
    if (s && string_startswith(s, "11.")) {
        _liveversion = 11;
    }
    _liveversionstring = s;
    //post("JS: liveversionstring = " + s + "\n");
}

function livesync() 
{
    var k = deepcopy(default_kernel);
    var c1, c2;
    // cache and restore major theme changes
    var old_ignorelive = _ignorelive;
    var old_alternate_a = alternate_a;
    var old_alternate_b = alternate_b;
    var old_alternate_c = alternate_c;
    var old_styledefaults = deepcopy(theme_map.styledefaults);
    
    _ignorelive = true;
    alternate_a = 0.15;
    alternate_b = 0.25;
    alternate_c = 0.4;

    k.void = max.getcolor("live_surface_bg");
    k.void_anti = max.getcolor("live_control_fg");
    
    if ((_liveversion > 11) && _uselivedesktop)  {
        k.bg = max.getcolor("live_desktop");
    } else {
        c1 = max.getcolor("live_surface_bg");
        c2 = max.getcolor("live_surface_frame");
        k.bg = rgb_mix_in_hcl(c1, c2, 0.5);
    }
    k.fg = max.getcolor("live_control_fg");
   
    k.warm = max.getcolor("live_lcd_control_fg");
    k.cool = max.getcolor("live_lcd_control_fg_alt");

    k.neutral = rgb_mix(k.bg, k.fg, 0.5);

    // styledefaults
    control_bg = max.getcolor("live_control_bg");
    surface_bg = max.getcolor("live_surface_bg");

    theme_map.sidebar.meta.selection = "cool_soften_b";

    theme_map.text_editingcolor = rgb_mix_in_hcl(control_bg, k.cool, 0.5);
    theme_map.patcher_box_selection = rgb_mix_in_hcl(control_bg, k.cool, 0.5);    

    theme_map.styledefaults.bgcolor = deepcopy(control_bg);
    theme_map.styledefaults.elementcolor = rgb_mix_in_hcl(control_bg, k.neutral, 0.25);
    theme_map.styledefaults.accentcolor = rgb_mix_in_hcl(control_bg, k.neutral, 0.75);
    theme_map.styledefaults.stripecolor = rgb_mix_in_hcl(control_bg, k.neutral, 0.25);
    theme_map.styledefaults.patchlinecolor = max.getcolor("live_focus_frame");
    // similar to current style "bg_neutral_25", replacing bg with styledefaults.bgcolor
    //theme_map.styledefaults.bgfillcolor_color = rgb_mix_in_hcl(control_bg, k.neutral, 0.25);
    // halfway between bgcolor and void (patcher bg)	
    theme_map.styledefaults.bgfillcolor_color = rgb_mix_in_hcl(control_bg, surface_bg, 0.5);
    
    // mix toward content lightness for sidebar kernel
    var ksidebar = deepcopy(k);
    c1 = gl2hcl(k.bg);
    c2 = gl2hcl(k.void);
    c1[2] = mix(c1[2], c2[2], 0.25);
    ksidebar.bg = hcl2gl(c1); 

    // use object box bgcolor for text editor
    var ktexteditor = deepcopy(k);
    ktexteditor.void = ktexteditor.bg = deepcopy(theme_map.styledefaults.bgcolor);    

    theme_kernels["live"] = k;
    theme_kernels["livesidebar"] = ksidebar;
    theme_kernels["livetexteditor"] = ktexteditor;

    gen("live","live","livesidebar","livetexteditor","live");

    _ignorelive = old_ignorelive;
    alternate_a = old_alternate_a;
    alternate_b = old_alternate_b;
    alternate_c = old_alternate_c;
    theme_map.styledefaults = deepcopy(old_styledefaults);

}


/*
function doquickcalc(	theme = "default", 
                    bg = [0.15, 0.15, 0.15], 
                    contrast = 0.6,
                    neutral = 0.3, 
                    void_shift = -0.05) 
*/
function doquickcalc( theme, bg, contrast, neutral, void_shift)
{
    var bg_hcl = gl2hcl(bg);
    

    if (bg_hcl[2] > 50) {
        contrast = -contrast;
        void_shift = -void_shift;
    }
    // fg
    var fg_hcl = deepcopy(bg_hcl);
    fg_hcl[2] = bg_hcl[2] + (contrast*100.);
    // neutral
    var neutral_hcl = hcl_mix(bg_hcl, fg_hcl, neutral);
    //void
    var void_hcl = deepcopy(bg_hcl);
    void_hcl[2] = bg_hcl[2] + (void_shift*100.);
    //void_anti
    var void_anti_hcl = deepcopy(fg_hcl);
    void_anti_hcl[2] = fg_hcl[2] - (void_shift*100.);
    
    var kernel = theme_kernels[theme];
    if (kernel) {
        kernel.bg = hcl2gl(bg_hcl);
        kernel.fg = hcl2gl(fg_hcl);
        kernel.void = hcl2gl(void_hcl);
        kernel.void_anti = hcl2gl(void_anti_hcl);
        kernel.neutral = hcl2gl(neutral_hcl);
        generate(theme);
    } else {
        post("quickcalc: couldn't find theme kernel " + theme + "\n");
    }
}


function copykernel(dest_name, src_name)
{
    theme_kernels[dest_name] = deepcopy(theme_kernels[src_name]);
}

function dokernelcolor(theme_name, color_name, color)
{
    var kernel = theme_kernels[theme_name];
    
    if (kernel) {
        if (kernel[color_name]) {
            var c = [0, 0, 0];

            if (color) {
                if (color.length > 0) c[0] = color[0];
                if (color.length > 1) c[1] = color[1];
                if (color.length > 2) c[2] = color[2];
            }

            kernel[color_name] = c;
        } else {
            post("kernelcolor: no kernel color named " + color_name + "\n");
        }
    } else {
        post("kernelcolor: no theme kernel named " + theme_name + "\n");
    }
}

function thememap_submap(submap, prefix, color_name, color)
{
    if (string_startswith(color_name, prefix)) {
        var short_name = color_name.slice(prefix.length + 1); // +1 for sprarator: '.' or '_'
        if (submap[short_name]) {
            submap[short_name] = color;
            return true;	
        } else if (string_startswith(short_name, "meta")) {
            short_name = short_name.slice(5); // +1 for sprarator: '.' or '_'
            if (submap.meta[short_name]) {
                submap.meta[short_name] = color;
                return true;	
            }
        }
    }
    return false;
}

function dothememap(color_name, color)
{	
    // first try at top level
    if (theme_map[color_name]) {
        theme_map[color_name] = color;
        return;
    }
    // next try content for top level names
    if (theme_map.content[color_name]) {
        theme_map.content[color_name] = color;
        return;
    }
    // next try sidebar for top level names
    if (theme_map.sidebar[color_name]) {
        theme_map.sidebar[color_name] = color;
        return;
    }
    // now look for prefixes and place in sub entries
    if (thememap_submap(theme_map.jed, "jed", color_name, color)) {
        return;
    }
    if (thememap_submap(theme_map.sidebar, "sidebar", color_name, color)) {
        return;
    }
    if (thememap_submap(theme_map.live, "live", color_name, color)) {
        return;
    }
    if (thememap_submap(theme_map.styledefaults, "styledefaults", color_name, color)) {
        return;
    }
    // finally fallback for styledefaults as a top level name, 
    // but maybe not recommended, because a bit generic?
    if (theme_map.styledefaults[color_name]) {
        theme_map.styledefaults[color_name] = color;
        return;
    }

    post("thememap: no theme color named " + color_name + "\n");
}

function thememap_findreference_submap(submap, prefix, color_name)
{
    if (string_startswith(color_name, prefix)) {
        var short_name = color_name.slice(prefix.length + 1); // +1 for sprarator: '.' or '_'
        if (submap[short_name]) {
            return submap[short_name];
        } else if (string_startswith(short_name, "meta")) {
            short_name = short_name.slice(5); // +1 for sprarator: '.' or '_'
            if (submap.meta[short_name]) {
                return submap.meta[short_name];
            } else {
                //post("thememap_findreference_submap: " + color_name + " not found in " + prefix + ".meta\n");
            }
        } else {
            //post("thememap_findreference_submap: " + color_name + " not found in " + prefix + "\n");
        }
    } else {
        //post("thememap_findreference_submap: " + color_name + " doesn't match " + prefix + "\n");
    }
    return undefined;
}

function thememap_findreference(color_name)
{	
    var ref = undefined;
    // this function looks up any color name that references another theme_map color

    // first try at top level
    if (theme_map[color_name]) {
        return theme_map[color_name];
    }
    // next try content for top level names
    if (theme_map.content[color_name]) {
        return theme_map.content[color_name];
    }
    // next try sidebar for top level names
    if (theme_map.sidebar[color_name]) {
        return theme_map.sidebar[color_name];
    }
    // now look for prefixes and place in sub entries
    if (ref = thememap_findreference_submap(theme_map.jed, "jed", color_name)) {
        return ref;
    }
    if (ref = thememap_findreference_submap(theme_map.sidebar, "sidebar", color_name)) {
        return ref;
    }
    if (ref = thememap_findreference_submap(theme_map.live, "live", color_name)) {
        return ref;
    }
    if (ref = thememap_findreference_submap(theme_map.styledefaults, "styledefaults", color_name)) {
        return ref;
    }
    // finally fallback for styledefaults as a top level name, 
    // but maybe not recommended, because a bit generic?
    if (ref = theme_map.styledefaults[color_name]) {
        return ref;
    }

    post("thememap_findreference: no theme color named " + color_name + "\n");

    return ref;
}

function isString(s)
{
    return (s && ((typeof s == "string") || (s instanceof String)));
}

function theme_map_resolve_color(key, domain_map, theme_kernel, output, prefix)
{
    var v;
    var color_name = domain_map[key];
        
    // allow for explicit color overrides in the theme_map
    if (domain_map[key] && !isString(domain_map[key])) {
        v = deepcopy(domain_map[key]);
    } else {
        var maximum_depth = 0;
        // follow theme_map references if present
        while (color_name && string_startswith(color_name, "theme_map")) {
            var ref = thememap_findreference(color_name.slice(10));
            if (ref && !isString(ref)) {
                //post("theme_map_resolve_color: found non-string " + ref + " for " + color_name);
                v = deepcopy(ref);
                break;
            } else {
                //post("theme_map_resolve_color: found reference " + ref + " for " + color_name);
                if (ref) {
                    if ((ref == color_name) || (maximum_depth++ > 10)) {
                        // if our mapped reference name is the same as the input name, or
                        // we have to follow 10 steps, var's call it a circular reference
                        post("circular_reference found for: " + color_name + " mapped from " + key + "\n");
                        return;
                    }
                    color_name = ref;
                    break;
                }
            }
        }
        if (!v && color_name) {
            if (theme_kernel[color_name]) {
                v = deepcopy(theme_kernel[color_name]);
            } 
        }
    }
    if (prefix)
        key = prefix + key;	
    if (v) {
        // apply jed color transformations
        if ((string_startswith(prefix, "jed") || string_startswith(key, "syntax")) && (key != "jed_background")) {
            if (color_name.indexOf("background") !== -1) {
                post("found: " + key + "\n")
            }
            v = jed_transform_color(v);
        }
        v[3] = 1.;
        output[key] = v;
    } else {
        post("can't find kernel color: " + color_name + " mapped from " + key + "\n");
    }
}

function theme_map_resolve_domain_colors(theme_map, theme_kernel, output, prefix)
{
    for (var key in theme_map) {
        if (key != "meta") {
            theme_map_resolve_color(key, theme_map, theme_kernel, output, prefix);
        }
    }
} 

function copy_core_colors(kernel)
{
    var copy = {};
    for (var key in kernel_colors) {
        copy[key] = deepcopy(kernel[key]);
    }
    return copy;
}

function override_alpha(colors, name, alpha)
{
    var c =  colors[name]; 
    colors[name] = [ c[0], c[1], c[2], alpha ];    
}

function generate(theme_name, content_name, sidebar_name, jed_name, live_name)
{
    var output = {};
    output.colors = {};
    output.styledefaults = {};

    var kernel = default_kernel;
    var content_kernel = default_kernel;
    var sidebar_kernel = default_kernel;
    var jed_kernel = default_kernel;
    var live_kernel = default_kernel;
    var last_editor_saturation = _editor_saturation;

    if (theme_name && theme_kernels[theme_name]) {
        kernel = theme_kernels[theme_name];
        content_kernel = kernel;
        sidebar_kernel = kernel;
        jed_kernel = kernel;
        live_kernel = kernel;
    }
    // special sauce for improving editor readability with saturation
    if (_editor_automagic) {
        var fg_hcl = rgb2hcl(jed_kernel.fg);
        var bg_hcl = rgb2hcl(jed_kernel.bg);
        if (fg_hcl[2] > bg_hcl[2]) {
            _editor_saturation = 1.25;
        } else {
            _editor_saturation = 3.;
        }
    }

    build_variant_colors(kernel);
    if (content_name && theme_kernels[content_name]) {
        content_kernel = theme_kernels[content_name];
        jed_kernel = content_kernel;
        live_kernel = content_kernel;
        build_variant_colors(content_kernel);
    }
    if (sidebar_name && theme_kernels[sidebar_name]) {
        sidebar_kernel = theme_kernels[sidebar_name];
        build_variant_colors(sidebar_kernel);
    }
    if (jed_name && theme_kernels[jed_name]) {
        jed_kernel = theme_kernels[jed_name];
        build_variant_colors(jed_kernel);
    }
    if (live_name && theme_kernels[live_name]) {
        live_kernel = theme_kernels[live_name];
        build_variant_colors(live_kernel);
    }

    for (var key in theme_map) {
        if (key == "styledefaults") {
            if (!_ignorepatcher) {
                theme_map_resolve_domain_colors(theme_map.styledefaults, content_kernel, output.styledefaults);
            }
        } else if (key == "content") {
            if (!_ignorepatcher) {
                theme_map_resolve_domain_colors(theme_map.content, content_kernel, output.colors);
            }
        } else if (key == "sidebar") {
            theme_map_resolve_domain_colors(theme_map.sidebar, sidebar_kernel, output.colors);
        } else if (key == "jed") {
            theme_map_resolve_domain_colors(theme_map.jed, jed_kernel, output.colors, "jed_");
        } else if (key == "live") {
            if (!_ignorelive) {
                theme_map_resolve_domain_colors(theme_map.live, live_kernel, output.colors, "live_");
            }
        } else {
            theme_map_resolve_color(key, theme_map, kernel, output.colors);
        }
    }

    {
        // special cases:
        // enforce alpha for selection color
        override_alpha(output.colors, "box_selection_background", 0.25);
        
        // enforce light unconnected outlet colors:
        c = gl2hcl(output.styledefaults["accentcolor"]);
        if (c[2] < 80) {
            c[2] += 20;
        } else {
            c[2] -= 20;
        }
        c = hcl2gl(c);
        output.colors["patcher_io_unconnected"] = [ c[0], c[1], c[2], 1. ];

        // enforce dark connected outlet colors:
        c = gl2hcl(output.styledefaults["accentcolor"]);
        if (c[2] > 20) {
            c[2] -= 20;
        } else {
            c[2] += 20;
        }
        c = hcl2gl(c);
        output.colors["patcher_io_connected_inside"] = [ c[0], c[1], c[2], 1. ];
    }

    for (var key in output.colors) {
        max.setcolor(key, output.colors[key]);
    }

    for (var key in output.styledefaults) {
        if (key == "bgfillcolor_color") {
            max.setdefaultstylecolor("bgfillcolor", "gradient", output.styledefaults[key], output.styledefaults[key]);
        } else {
            max.setdefaultstylecolor(key, output.styledefaults[key]);
        }
    }
    max.refresh();
    if (this.box) {
        // can remove the following once all in application, not object box
        output.kernel = copy_core_colors(kernel);
        output.variants = deepcopy(kernel); // uncomment if you want to see all the variants in the output dict
        output.kernel_hcl = deepcopy(output.kernel);
        for (var key in output.kernel_hcl) {
            var hcl = gl2hcl(output.kernel_hcl[key]);
            if (isNaN(hcl[0]))
                hcl[0] = "nan";
            output.kernel_hcl[key] = hcl;
        }
        
        output_dict.parse(JSON.stringify(output));
        outlet(0, "dictionary", output_dict.name);
    } else {
       // post("I'm executing inside of without a box\n");
    }

    if (_editor_automagic) {
        _editor_saturation = last_editor_saturation;
    }
}

function jed_transform_color(c)
{
    var hcl = gl2hcl(c);

    if (hcl[1] < 3) {
        return c;
    }

    // only rotate hue for colors with some chroma
    if (hcl[1] > 2) {
        hcl[0] = hcl[0] + _editor_hue_rotation;
        hcl[0] = hcl[0] % 360; 
        if (hcl[0] < 0) {
            hcl[0] += 360;
        }
    }

    // only increase chroma for colors with some chroma
    if (hcl[1] > 2) {
        hcl[1] = hcl[1] * _editor_saturation; 
        if (hcl[1] < 0) {
            hcl[1] = 0;
        } else if (hcl[1] > 100) {
            hcl[1] = 100;
        }
    }
/*
    if (hcl[2] > 50) {
        hcl[2] = hcl[2] * _editor_contrast;
        if (hcl[2] > 100) {
            hcl[2] = 100;
        }
    } else {
        hcl[2] = hcl[2] / _editor_contrast;
        if (hcl[2] < 0) {
            hcl[2] = 0;
        }

    }
*/
    return hcl2gl(hcl);
}

// The following functions are based on chroma.js
// all rgb functions correspond to normalized floating point values
// aka "gl" colorspace in chroma. NOT 0-255 "rgb"

/*
chroma.js - JavaScript library for color conversions

Copyright (c) 2011-2019, Gregor Aisch
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. The name Gregor Aisch may not be used to endorse or promote products
   derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

-------------------------------------------------------
*/

function hcl2rgb(hcl) {
    var lab = hcl2lab(hcl);
    return lab2rgb(lab);
}

function hcl2lab(hcl) {
    /*
    Convert from a qualitative parameter h and a quantitative parameter l to a 24-bit pixel.
    These formulas were invented by David Dalrymple to obtain maximum contrast without going
    out of gamut if the parameters are in the range 0-1.

    A saturation multiplier was added by Gregor Aisch
    */
    var h = hcl[0];
    var c = hcl[1];
    var l = hcl[2];
    if (isNaN(h)) h = 0;
    h = h * Math.PI/180; // DEG2RAD
    return [l, Math.cos(h) * c, Math.sin(h) * c]
}

/*
 * L* [0..100]
 * a [-100..100]
 * b [-100..100]
 */
var LAB_CONSTANTS = {};
// Corresponds roughly to RGB brighter/darker
LAB_CONSTANTS.Kn =  18;
// D65 standard referent
LAB_CONSTANTS.Xn =  0.950470;
LAB_CONSTANTS.Yn = 1;
LAB_CONSTANTS.Zn = 1.088830;

LAB_CONSTANTS.t0 = 0.137931034;  // 4 / 29
LAB_CONSTANTS.t1 = 0.206896552;  // 6 / 29
LAB_CONSTANTS.t2 = 0.12841855;   // 3 * t1 * t1
LAB_CONSTANTS.t3 = 0.008856452;  // t1 * t1 * t1

function lab2rgb(lab) {
    var l = lab[0];
    var a = lab[1];
    var b = lab[2];
    var x,y,z, r,g,b_;

    y = (l + 16) / 116;
    x = isNaN(a) ? y : y + a / 500;
    z = isNaN(b) ? y : y - b / 200;

    y = LAB_CONSTANTS.Yn * lab_xyz(y);
    x = LAB_CONSTANTS.Xn * lab_xyz(x);
    z = LAB_CONSTANTS.Zn * lab_xyz(z);

    r = xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z);  // D65 -> sRGB
    g = xyz_rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z);
    b_ = xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);

    r = clamp (r, 0., 1.);
    g = clamp (g, 0., 1.);
    b_ = clamp (b_, 0., 1.);
 
    return [r,g,b_];
};

function xyz_rgb(r) {
    return (r <= 0.00304 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - 0.055);
}

function lab_xyz(t) {
    return t > LAB_CONSTANTS.t1 ? t * t * t : LAB_CONSTANTS.t2 * (t - LAB_CONSTANTS.t0)
}

function rgb2hcl(rgb) {
    var lab = rgb2lab(rgb);
    return lab2hcl(lab);
}

function rgb2lab (rgb) {
    var xyz = rgb2xyz(rgb);
    var x = xyz[0];
    var y = xyz[1];
    var z = xyz[2];
    
    var l = 116 * y - 16;
    return [l < 0 ? 0 : l, 500 * (x - y), 200 * (y - z)];
}

function rgb_xyz(r) {
    if (r <= 0.04045) return r / 12.92;
    return Math.pow((r + 0.055) / 1.055, 2.4);
}

function xyz_lab(t) {
    if (t > LAB_CONSTANTS.t3) return Math.pow(t, 1 / 3);
    return t / LAB_CONSTANTS.t2 + LAB_CONSTANTS.t0;
}

function rgb2xyz(rgb) {
    var r = rgb[0];
    var g = rgb[1];
    var b = rgb[2];
    r = rgb_xyz(r);
    g = rgb_xyz(g);
    b = rgb_xyz(b);
    var x = xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / LAB_CONSTANTS.Xn);
    var y = xyz_lab((0.2126729 * r + 0.7151522 * g + 0.0721750 * b) / LAB_CONSTANTS.Yn);
    var z = xyz_lab((0.0193339 * r + 0.1191920 * g + 0.9503041 * b) / LAB_CONSTANTS.Zn);
    return [x,y,z];
}

function lab2hcl(lab) {
    var l = lab[0];
    var a = lab[1];
    var b = lab[2];
    var c = Math.sqrt(a * a + b * b);
    var h = (Math.atan2(b, a) * (180/Math.PI) + 360) % 360; // RAD2DEG
    if (Math.round(c*10000) === 0) h = Number.NaN;
    return [h, c, l];
}