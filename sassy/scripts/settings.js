export function register_settings() {
    //TBD

    //Invisible setting to disable the branding:
    game.settings.register('sassy', 'disableBranding', {
        name: '',
        hint: '',
        type: Boolean,
        default: false,
        scope: 'world',
        config: false,
    });

    /* Colour picker template
    new window.Ardittristan.ColorSetting('sassy', 'stuff', {
        name: game.i18n.localize('SASSY.stuffName'),
        hint: game.i18n.localize('SASSY.stuffHint'),
        label: game.i18n.localize('SASSY.stuffButton'),
        restricted: true,
        defaultColor: '#ffffff',
        config: true,
        scope: 'world',
    })
    */
    /* Image picker template
    game.settings.register('sassy', 'stuff', {
        name: game.i18n.localize("SASSY.stuffName"),
        hint: game.i18n.localize("SASSY.stuffHint"),
        type: window.Azzu.SettingsTypes.FilePickerImage,
        default: '',
        restricted: true,
        scope: 'world',
        config: true,
    })
    */
}