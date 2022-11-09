import { register_settings } from "./settings.js";
import { pc_sheet_config } from "./stylesheet_config/pc_sheet_config.js"

Hooks.on(`ready`, () => {
    register_settings()
    console.log('SASSY | Ready')
})

//Render Sheet hooks:
Hooks.on(`renderCharacterSheet`, pc_sheet_config);