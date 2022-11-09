export async function pc_sheet_config(app, html, _) {
    //Disable Branding:
    const disableBranding = game.settings.get('sassy', 'disableBranding')
    if (disableBranding) {
        html.find('figure.gridcell.branding').css('display', 'none')
        html.find('.charname-container').css('background', 'transparent')
        html.find('.charname-container').css('min-width', '530px')
    }
}