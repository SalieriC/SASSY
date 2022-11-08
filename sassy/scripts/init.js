import { register_settings } from "./settings";

Hooks.on(`ready`, () => {
    register_settings()
    console.log('SASSY | Ready')
})